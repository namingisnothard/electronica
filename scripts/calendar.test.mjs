import test from 'node:test';
import assert from 'node:assert/strict';
import { calendarEntries, overlapsDay, calendarHTML } from '../public/calendar.js';
const session = (id, start, end, flexible=false) => ({id,start,end,day:start.slice(0,10),flexible,hub:'MED CAMPUS',venueId:1,venue:'Test venue'});
const events = [{title:'A',category:'Concert',excerpt:'Test',sessions:[
  session(1,'2026-09-11T23:00:00+02:00','2026-09-12T02:00:00+02:00'),
  session(2,'2026-09-12T10:15:00+02:00','2026-09-12T11:00:00+02:00'),
  session(4,'2026-09-12T11:00:00+02:00','2026-09-12T12:00:00+02:00'),
]},{title:'Exhibition',category:'Exhibition',excerpt:'Open',sessions:[session(3,'2026-09-12T10:00:00+02:00','2026-09-12T18:00:00+02:00',true)]}];
test('overnight occurrences appear on both intersected days',()=>{
  assert.equal(overlapsDay(events[0].sessions[0],'2026-09-12'),true);
  const rows=calendarEntries(events,{day:'2026-09-12',from:0,to:60});
  assert.deepEqual(rows.map(x=>x.session.id),[1]);assert.equal(rows[0].slot,0);
});
test('time ranges use overlap and exclude sessions ending at the start or beginning at the end',()=>{
  const rows=calendarEntries(events,{day:'2026-09-12',from:630,to:660});
  assert.deepEqual(rows.map(x=>x.session.id),[3,2]);assert.ok(rows.every(x=>x.slot===630));
  assert.deepEqual(calendarEntries(events,{day:'2026-09-12',from:660,to:690}).map(x=>x.session.id),[3,4]);
});
test('half-hour groups retain exact starts, filters work, invalid ranges are empty',()=>{
  assert.equal(calendarEntries(events,{day:'2026-09-12',kind:'fixed'}).find(x=>x.session.id===2).slot,600);
  assert.deepEqual(calendarEntries(events,{day:'2026-09-12',kind:'open'}).map(x=>x.session.id),[3]);
  assert.equal(calendarEntries(events,{day:'2026-09-12',hub:'OTHER'}).length,0);
  assert.equal(calendarEntries(events,{day:'2026-09-12',venue:2}).length,0);
  assert.equal(calendarEntries(events,{day:'2026-09-12',from:600,to:600}).length,0);
});
test('calendar renders each occurrence once with actions and overnight context',()=>{
  const rows=calendarEntries(events,{day:'2026-09-12'});
  const html=calendarHTML(rows,{day:'2026-09-12',from:0,to:1440,esc:s=>s,isSaved:()=>false,range:s=>s.start.slice(11,16)+'–'+s.end.slice(11,16)});
  for(const id of [1,2,3,4])assert.equal(html.split(`data-calendar-session="${id}"`).length-1,1);
  assert.match(html,/Continues from the previous day/);assert.match(html,/10:15–11:00/);assert.match(html,/Flexible opening hours/);
});
