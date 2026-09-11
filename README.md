# Linz Weekender

A personal Ars Electronica planner for Friday 11 to Sunday 13 September 2026, built from the public official programme. Includes a venue map, 650 projects / 1,658 occurrences, 18 editorial picks, event background, saved visits, overlap and transfer warnings, calendar export, five local food stops, and an airport / public transport / ticket guide.

## Run

```sh
npm run dev
```

Open http://localhost:3086. No package installation is needed. Node 20+ is sufficient; the app uses native browser modules and a locally included Leaflet 1.9.4 distribution. `public/` can also be hosted by any static HTTP server.

## Programme data

`public/data/programme.json` is a September 10 snapshot of the official festival planner. Opening hours and repeated sessions are grouped under their project. Every entry links to its official page. Editorial notes and suggested visit lengths are separate from official facts. Restaurant opening hours and ticket / transport information link to primary sources in the page.

`npm run refresh` retrieves all pages of the public catalogue and rebuilds the weekend snapshot. This requires network access and Python 3. Curation is in `scripts/curation.json`. The importer deliberately treats empty ticket fields as unknown; it does not equate missing prices with free admission. The concert registration flag is overridden by the explicit official Festivalpass+ policy. Futurelab Night is marked registration-required and fully booked based on its official event page, which differs from the catalogue API; the suggested Saturday evening uses the free Klangwolke instead.

```sh
npm run check
```

Checks JavaScript syntax, unique occurrence IDs, source links, weekend date coverage, time ordering, coordinate ranges, CEST offsets, and the key evening programmes.

## Notes

- Confirmed incoming route: FRA → LNZ. Flight numbers / times have not been supplied. Sunday return via LNZ and Courtyard by Marriott Linz at Europaplatz 2 are explicitly marked assumptions.
- Personal plans and travel notes use browser local storage. Saving does not create a booking. Calendar export includes UTC timestamps corresponding to the chosen Linz times.
- Map venue coordinates come from the official programme. Food pins approximate published addresses. Walking allowances are estimates; external directions links provide actual routes.
- Street tiles require internet access and are provided by OpenStreetMap. Event images outside the editorial selection load from the official programme. Selected photos are local copies with the official credits shown in the detail panels. Google Fonts are optional; system fonts are fallbacks.
- This is a local site, not a publicly deployed service. A phone needs a reachable hosted URL or network access to the machine running the server; `localhost` on a phone points to the phone itself.
- Programme updates and live seat availability are not automatically tracked. Use the linked official listing before travelling or booking.

## Browser QA

Checked in Chrome: desktop layout, street tiles, event detail view, saving and reload persistence, suggested route addition, filtering, mobile layout, food map links, and travel guide. Calendar and conflict handling also have programme data checks; see the implementation for export formatting and transfer estimates.

Photographs and programme content remain credited to Ars Electronica and the respective contributors. Leaflet is distributed under its BSD-2-Clause licence.

Language: the header 中文 / EN switch translates navigation, curated event context, food, routes and transport guidance, and remembers the choice locally. Official titles, venue names and non-curated source excerpts retain their original wording. Translation dictionaries live in public/zh.js and public/zh-content.js. Map wheel/trackpad zoom works immediately without a click; touch pinch zoom is enabled, with quarter-level zoom increments.

Festival story (`#history`) adds 14 selected historical milestones/editions from 1979–2025, period filters, expandable reading connections, and four 2026 context cards linked to current programme details. All entries include official sources; editorial connections are identified. The new page supports both languages through public/history.js.

Artists to know (`#artists`) adds six editorial recommendations (seven artists, including the Namekawa/O’Lan duo), with sourced work context, programme windows, venue names and event-detail links. Gallery/concert filters and Chinese translation are supported. Concert recommendations link to the shared Big Concert Night booking context so they are not presented as three independent tickets.
