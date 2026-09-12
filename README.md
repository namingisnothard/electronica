# Linz Weekender

A personal Ars Electronica planner for Friday 11 to Sunday 13 September 2026, built from the public official programme. Includes a venue map, 650 projects / 1,658 occurrences, 18 editorial picks, event background, saved visits, overlap and transfer warnings, calendar export, five local food stops, and an airport / public transport / ticket guide.

## Run

```sh
npm run dev
```

Open http://localhost:3086. No package installation is needed. Node 20+ is sufficient; the app uses native browser modules and a locally included Leaflet 1.9.4 distribution. `public/` can also be hosted by any static HTTP server.

## GitHub Pages

In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The included `.github/workflows/pages.yml` publishes the contents of `public/` when you push to `main`; you can also run it manually from the Actions tab. If your default branch has another name, update the workflow's branch filter. After the deployment succeeds, open the URL shown by the deployment (usually `https://<owner>.github.io/<repository>/`).

Branch-based publishing from the repository root is also supported: the root `index.html` redirects to `public/`, preserving query parameters and the selected section. The `.nojekyll` file makes GitHub Pages serve the static files directly. Do not select `/docs`, because this project has no `docs/` site.

If the site still does not appear, check the latest Pages workflow run for an error and confirm that Pages is enabled with the matching publishing source. GitHub Pages serves static files; it does not run `server.mjs` or `npm start`.

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
- A phone can use the deployed GitHub Pages URL or network access to the machine running the local server; `localhost` on a phone points to the phone itself.
- Programme updates and live seat availability are not automatically tracked. Use the linked official listing before travelling or booking.

## Browser QA

Checked in Chrome: desktop layout, street tiles, event detail view, saving and reload persistence, suggested route addition, filtering, mobile layout, food map links, and travel guide. Calendar and conflict handling also have programme data checks; see the implementation for export formatting and transfer estimates.

Photographs and programme content remain credited to Ars Electronica and the respective contributors. Leaflet is distributed under its BSD-2-Clause licence.

Language: the header 中文 / EN switch translates navigation, curated event context, food, routes and transport guidance, and remembers the choice locally. All 650 catalogue projects have Chinese reading translations for titles and descriptions; original titles and artist names remain available for identification. These are guide translations, not official Chinese titles. Translation dictionaries live in public/zh.js, public/zh-content.js, public/zh-catalogue-ui.js and public/zh-programme.js. Catalogue translations are keyed by project ID in scripts/programme-zh.json; run `npm run build:translations` after updating them. The build rejects changed source text until its translation is reviewed. Map wheel/trackpad zoom works immediately without a click; touch pinch zoom is enabled, with quarter-level zoom increments.

Festival story (`#history`) adds 14 selected historical milestones/editions from 1979–2025, period filters, expandable reading connections, and four 2026 context cards linked to current programme details. All entries include official sources; editorial connections are identified. The new page supports both languages through public/history.js.

Artists to know (`#artists`) adds six editorial recommendations (seven artists, including the Namekawa/O’Lan duo), with sourced work context, programme windows, venue names and event-detail links. Gallery/concert filters and Chinese translation are supported. Concert recommendations link to the shared Big Concert Night booking context so they are not presented as three independent tickets.

## Calendar view

Choose **Calendar** above the programme, then select Friday, Saturday or Sunday. Search and the existing recommendation, category and venue filters apply to both views. Filter by a time range or session type; the calendar includes every overlapping occurrence, including events continuing from the previous night. Fixed sessions are grouped into half-hour start slots with exact times shown on each card. Flexible opening windows appear in a separate expandable group. All times use Linz local time (CEST). Open a card for details or save it to your weekend.

## Personal Saturday route

Open `#today` or choose **Saturday route** in the navigation. The 12:00–18:00 itinerary follows AEC (including the confirmed 13:00 Bosch booking), Lentos, Francisco Carolinum, and Ursulinenhof. Numbered Leaflet markers connect to venue cards and individual event details. Dotted lines show stop order, with external walking directions for street navigation. The page supports English/Chinese and mobile layouts. `public/downloads/saturday-route.ics` contains the matching visits, lunch, and walking breaks; downloading it does not change bookings or saved weekend selections.
