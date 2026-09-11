import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { programmeZh } from '../public/zh-programme.js';
import { zh } from '../public/zh.js';
const {events}=JSON.parse(await readFile(new URL('../public/data/programme.json',import.meta.url)));
const records=JSON.parse(await readFile(new URL('./programme-zh.json',import.meta.url)));
test('all 650 catalogue projects have current Chinese titles and descriptions',()=>{
  assert.equal(events.length,650);
  for(const e of events){
    assert.equal(records[e.id].title,e.title);assert.equal(records[e.id].excerpt,e.excerpt);
    for(const key of [e.title,e.excerpt])assert.match(programmeZh[key],/[\u3400-\u9fff]/,e.title);
    for(const tag of e.tags)assert.match(zh[tag],/[\u3400-\u9fff]/,tag);
    assert.match(zh[e.category],/[\u3400-\u9fff]/,e.category);
    assert.match(zh[e.category.toUpperCase()],/[\u3400-\u9fff]/,e.category);
  }
});
test('Chinese search text and dynamic time labels translate without losing official identifiers',async()=>{
  globalThis.localStorage={getItem:()=> 'zh'};
  const {t}=await import('../public/i18n.js?zh-test');
  const example=events.find(e=>e.title==='FUNGI: Anarchist Designers');
  assert.match(t(example.title),/真菌/);assert.ok(t(example.title).includes(example.title));
  assert.match(t(example.excerpt),/真菌/);assert.equal(t('10:00–12:00 · 3 slots'),'10:00–12:00 · 3 个场次');
  assert.equal(t('13'),'13');assert.equal(t('Courtyard by Marriott Linz'),'Courtyard by Marriott Linz');assert.equal(t('12 sessions'),'12 个场次');assert.equal(t('DE, EN'),'德语、英语');
  // The language is captured at module load, so verify English with a fresh module.
  globalThis.localStorage={getItem:()=> 'en'};
  const {t:en}=await import('../public/i18n.js?english');assert.equal(en(example.title),example.title);
});
