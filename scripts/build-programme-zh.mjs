import { readFile, writeFile } from 'node:fs/promises';
const { events } = JSON.parse(await readFile(new URL('../public/data/programme.json', import.meta.url)));
const translations = JSON.parse(await readFile(new URL('./programme-zh.json', import.meta.url)));
const dictionary = {};
for (const event of events) {
  const entry = translations[event.id];
  if (!entry || entry.title !== event.title || entry.excerpt !== event.excerpt || !entry.titleZh || !entry.excerptZh) {
    throw new Error(`Missing or stale Chinese translation: ${event.id} (${event.title})`);
  }
  dictionary[event.title] = entry.titleZh === event.title ? entry.titleZh : `${entry.titleZh}（${event.title}）`;
  dictionary[event.excerpt] = entry.excerptZh;
}
await writeFile(new URL('../public/zh-programme.js', import.meta.url), '// Chinese reading translations of the local programme snapshot. Original titles remain visible.\nexport const programmeZh = ' + JSON.stringify(dictionary, null, 2) + ';\n');
console.log(`Built Chinese translations for ${events.length} projects.`);
