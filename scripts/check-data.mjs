import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const d=JSON.parse(readFileSync('public/data/programme.json','utf8'));
const ids=new Set();let n=0;
assert(d.events.length===d.coverage.projects);
for(const e of d.events){assert(e.id&&e.title&&e.source);assert(e.excerpt.split(/\s+/).length<=24);for(const s of e.sessions){assert(!ids.has(s.id),`Duplicate occurrence ${s.id}`);ids.add(s.id);n++;assert(d.coverage.dates.includes(s.day));assert(new Date(s.end)>new Date(s.start),`Invalid times ${s.id}`);assert(s.start.endsWith('+02:00'));if(s.lat){assert(s.lat>48&&s.lat<49,`Latitude ${s.id}`);assert(s.lng>13&&s.lng<15,`Longitude ${s.id}`);}}}
assert(n===d.coverage.occurrences);
const find=id=>d.events.find(e=>e.curation?.photo===id);
assert.equal(find(100).sessions[0].start,'2026-09-11T18:30:00+02:00');
assert.equal(find(239).sessions[0].start,'2026-09-12T20:00:00+02:00');
assert.equal(find(243).sessions[0].end,'2026-09-12T04:00:00+02:00');
console.log(`Verified ${d.coverage.projects} projects, ${n} unique occurrences, time zones, coordinates and evening anchors.`);
