// All calendar arithmetic uses the programme's Linz dates, never the viewer's timezone.
export function dayStart(day) { return Date.parse(`${day}T00:00:00+02:00`); }
export function overlapsDay(session, day) {
  const start = dayStart(day);
  return Date.parse(session.start) < start + 86400000 && Date.parse(session.end) > start;
}
export function isOpenWindow(event, session) { return session.flexible && ['Exhibition','Project','Collection','Experience','Open Lab'].includes(event.category); }
export function calendarEntries(events, { day, from = 0, to = 1440, kind = 'all', hub = 'all', venue = null, filter = 'all' }) {
  const base = dayStart(day), start = base + from * 60000, end = base + to * 60000;
  if (from >= to) return [];
  return events.flatMap(event => event.sessions.filter(session =>
    Date.parse(session.start) < end && Date.parse(session.end) > start &&
    (hub === 'all' || session.hub === hub) && (!venue || session.venueId === venue) &&
    (filter !== 'free' || session.hub === 'MED CAMPUS') &&
    (kind === 'all' || (kind === 'open') === Boolean(isOpenWindow(event,session)))
  ).map(session => ({ event, session, slot: Math.floor(Math.max(from, (Date.parse(session.start) - base) / 60000) / 30) * 30 })))
    .sort((a, b) => a.slot - b.slot || a.session.start.localeCompare(b.session.start) || a.event.title.localeCompare(b.event.title));
}
export function timeLabel(minutes) { return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`; }
export function calendarHTML(entries, { day, from, to, esc, isSaved, range }) {
  if (from >= to) return '<div class="empty-state" role="alert">Choose an end time after the start time.</div>';
  if (!entries.length) return '<div class="empty-state">No sessions in this time range.<br><button class="text-button" id="calendar-reset">Show the whole day ↗</button></div>';
  const card = ({ event, session }) => `<article class="calendar-event" data-calendar-session="${session.id}">
    <div class="calendar-event-meta"><time>${range(session)}</time><span>${esc(event.category)}</span></div>
    ${session.day < day ? '<small class="calendar-running">Continues from the previous day</small>' : Date.parse(session.start) < dayStart(day) + from * 60000 ? '<small class="calendar-running">Already running</small>' : ''}
    <button class="calendar-title" data-detail="${session.id}">${esc(event.title)}</button>
    <p class="calendar-description">${esc(event.curation?.summary || event.excerpt)}</p>
    <div class="calendar-venue">${esc(session.venue)}</div>
    <div class="calendar-event-actions"><button class="text-button" data-detail="${session.id}">Take a look ↗</button><button class="small-button" data-save="${session.id}" aria-label="${isSaved(session.id) ? 'Remove' : 'Save'} ${esc(event.title)}" aria-pressed="${isSaved(session.id)}">${isSaved(session.id) ? '✓ Saved · remove' : '+ Add to my weekend'}</button></div>
  </article>`;
  const open = entries.filter(x => isOpenWindow(x.event,x.session)), fixed = entries.filter(x => !isOpenWindow(x.event,x.session)), groups = new Map();
  for (const entry of fixed) { if (!groups.has(entry.slot)) groups.set(entry.slot, []); groups.get(entry.slot).push(entry); }
  return `<div class="calendar-summary"><b>${entries.length} sessions</b><span>${timeLabel(from)}–${timeLabel(to)} · <span>All times CEST · Linz local time</span></span></div>
    ${open.length ? `<details class="calendar-open" ${fixed.length ? '' : 'open'}><summary><span>Flexible opening hours</span> <b>${open.length}</b><small>Visit at any time within the listed hours</small></summary><div class="calendar-cards">${open.map(card).join('')}</div></details>` : ''}
    ${fixed.length ? '<h3 class="calendar-heading">Scheduled sessions · grouped by half-hour start slots</h3>' : ''}
    <div class="calendar-timeline">${[...groups].map(([slot, rows]) => `<section class="calendar-slot"><h4><time>${timeLabel(slot)}</time><small>–${timeLabel(slot + 30)}</small></h4><div class="calendar-cards">${rows.map(card).join('')}</div></section>`).join('')}</div>`;
}
