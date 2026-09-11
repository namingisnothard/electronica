import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const base='https://festivalplanner.ars.electronica.art/api';
async function get(path) { const r=await fetch(base+path); if(!r.ok) throw Error(`${path}: ${r.status}`); return r.json(); }
await mkdir('.cache',{recursive:true});
const first=await get('/events?limit=100&page=1');
let events=[...first.data];
for(let page=2;page<=first.meta.pages;page++) { events.push(...(await get(`/events?limit=100&page=${page}`)).data); }
events=events.filter(e=>['2026-09-11','2026-09-12','2026-09-13'].includes(e.start_time.slice(0,10)));
if(events.length<100) throw Error('Unexpectedly small programme; existing snapshot preserved.');
await writeFile('.cache/ars-weekend.json',JSON.stringify(events));
await writeFile('.cache/ars-locations.json',JSON.stringify(await get('/locations')));
execFileSync('python3',['scripts/build-data.py','.cache'],{stdio:'inherit'});
