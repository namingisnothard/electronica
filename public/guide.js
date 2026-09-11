export const hotel = {name:'Courtyard by Marriott Linz', lat:48.298889, lng:14.303056, address:'Europaplatz 2, 4020 Linz'};
export const sources = {
  programme:'https://festivalplanner.ars.electronica.art/',
  highlights:'https://ars.electronica.art/negotiatinghumanity/en/highlights/',
  tickets:'https://ars.electronica.art/negotiatinghumanity/en/tickets/',
  faq:'https://ars.electronica.art/negotiatinghumanity/en/faq/',
  locations:'https://ars.electronica.art/negotiatinghumanity/en/time-locations/',
  airport:'https://www.linz-airport.com/en/Passengers-Visitors/To-and-from-Linz/Public-transport',
  taxi:'https://www.linz-airport.com/en/Passengers-Visitors/To-and-from-Linz/Taxi',
  fares:'https://www.linzag.at/media/dokumente/linien_1/vertragsbedingungen___tarifblaetter/Fahrpreise-Kernzone-Linz.pdf',
  transit:'https://www.linzag.at/efa',
  app:'https://www.linzag.at/portal/de/privatkunden/unterwegs/linzmobil/linz_mobil.html',
  hotel:'https://www.marriott.com/en-us/hotels/lnzcy-courtyard-linz/overview/',
  posthof:'https://www.posthof.at/service/anreise-naechtigung',
  friday:'https://ars.electronica.art/negotiatinghumanity/files/2026/08/dailyfri.pdf'
};
export const food = [
  {id:'krokodil',name:'Gelbes Krokodil',kind:'Restaurant',icon:'◒',lat:48.30238,lng:14.29105,address:'OK-Platz 1, 4020 Linz',area:'RIGHT AT OK QUARTER',summary:'The easy festival lunch or dinner: a long-running restaurant beside the cinema and the OK art centre. Ideal when you want to stay close to the exhibitions.',try:'Try: a seasonal dish from the current menu; check the vegetarian choices.',hours:'Fri & Sat kitchen 12:00–16:00 / 17:00–21:30. Sun 14:00–22:00.',note:'Special festival-week kitchen hours, September 9–13. Sunday lunch starts late.',source:'https://krokodil.at/',phone:'+43732784182',budget:'€€ · menu prices vary',days:[11,12,13]},
  {id:'klosterhof',name:'Stiegl-Klosterhof',kind:'Austrian restaurant',icon:'♧',lat:48.30163,lng:14.28907,address:'Landstraße 30, 4020 Linz',area:'NEAR OK QUARTER',summary:'A classic Austrian inn for a proper sit-down break. A convenient central choice when you want traditional cooking and a reliably open kitchen across the weekend.',try:'Try: an Austrian Wirtshaus classic with a Stiegl beer or an alcohol-free drink.',hours:'Fri–Sun 11:00–23:00. Kitchen until 21:30.',note:'Reserve for a relaxed dinner; the restaurant requests table reservations.',source:'https://www.klosterhof.at/der-klosterhof-1/offnungszeiten/',phone:'+43732773373',budget:'€€ · menu prices vary',days:[11,12,13]},
  {id:'friedlieb',name:'Friedlieb und Töchter',kind:'Coffee & cake',icon:'☕',lat:48.30509,lng:14.28352,address:'Altstadt 5, 4020 Linz',area:'OLD TOWN COFFEE BREAK',summary:'A small coffee-and-cake stop in the old town. Coffee comes from Graz roaster tribeka; cakes are baked in-house, with vegan and wheat-free options among the changing selection.',try:'Try: Friedi Cheesy, the house cheesecake, with a coffee.',hours:'Fri 10:00–19:00. Sat 10:00–18:00. Closed Sunday.',note:'No reservations on Saturdays. Save this one for Friday or Saturday.',source:'https://friedlieb.at/',phone:'+43732220522',budget:'€ · coffee & cake',days:[11,12]},
  {id:'meier',name:'Café Meier',kind:'Coffee house',icon:'☕',lat:48.30626,lng:14.28877,address:'Pfarrplatz 7, 4020 Linz',area:'NEAR LENTOS & HAUPTPLATZ',summary:'A relaxed Pfarrplatz coffee house with its own roasting operation. The long opening hours make it a useful meeting point or a Sunday fallback between riverfront venues.',try:'Try: coffee from the house roastery; ask which beans are being served.',hours:'Fri & Sat 08:00–24:00. Sun 09:00–24:00.',note:'Useful before the 10:00 exhibition openings and for a late pause.',source:'https://cafe-meier.at/',extraSource:'https://cafe-meier.at/?page_id=18',phone:'+43732778788',budget:'€ · coffee stop',days:[11,12,13]},
  {id:'jindrak',name:'Konditorei Jindrak',kind:'Linz’s cake stop',icon:'▱',lat:48.30153,lng:14.28658,address:'Herrenstraße 22–24, 4020 Linz',area:'BY THE CATHEDRAL',summary:'Make room for Linzer Torte at Jindrak’s main shop. This is the most locally specific sweet stop on the route, and a practical place to pick up something to take home.',try:'Try: a slice of Linzer Torte with a Melange.',hours:'Fri & Sat shop 08:30–18:00. Sun shop 09:00–18:00; café 10:00–17:00.',note:'Shop and café hours differ on Sunday. Check the branch before heading over.',source:'https://www.jindrak.at/magazin-videos-2/',phone:'+43732779258',budget:'€ · cake & coffee',days:[11,12,13]}
];
export const suggested = [
  {day:'2026-09-11',title:'Arrive. Get curious.',subtitle:'An easy start in the OK Quarter, then a big musical evening. Move or skip the afternoon if your flight arrives later.',stops:[
    {at:'13:00',title:'Drop bags & collect your badge',note:'Hotel first, then OK Platz. Allow about 20–25 minutes to walk from the hotel; this is a planning estimate.'},
    {at:'13:30',photo:769,duration:120,note:'A selection of the Festival Walk. Start at OK Platz and follow the art into the city.'},
    {at:'15:45',photo:774,duration:60,note:'Stay nearby for the Ursulinenhof attics.'},
    {at:'17:00',title:'Early dinner & travel to Posthof',note:'Gelbes Krokodil opens its evening kitchen at 17:00. Keep it quick or eat earlier; aim to reach Posthof by 18:00.'},
    {at:'18:30',photo:100,duration:240,note:'Your evening anchor. Festivalpass+ required.'}
  ]},
  {day:'2026-09-12',title:'Follow the river.',subtitle:'Prize-winning art, student experiments and Futurelab discoveries by day, followed by the free Klangwolke beside the Danube.',stops:[
    {at:'09:00',title:'Coffee at Café Meier',note:'Pfarrplatz, an easy starting point near Lentos.'},
    {at:'10:00',photo:764,duration:90,note:'The prize winners at Lentos. Look out for Mechanical Kurds and CHIMERIA.'},
    {at:'11:45',photo:784,duration:90,note:'Walk to the University of Arts buildings around Hauptplatz.'},
    {at:'13:15',title:'Lunch & an old-town wander',note:'Try Klosterhof for Austrian cooking; Friedlieb und Töchter for coffee and cake.'},
    {at:'15:00',photo:794,duration:75,note:'Cross Nibelungenbrücke to the Ars Electronica Center. Explore the exhibition, then take a break.'},
    {at:'20:30',photo:547,duration:60,note:'Free Klangwolke in Donaupark. Arrive early. Futurelab Night is currently fully booked; only choose it instead if you already have registration.'}
  ]},
  {day:'2026-09-13',title:'Leave room to discover.',subtitle:'A lighter day close to your hotel. Shorten this route once your return flight is known.',stops:[
    {at:'10:00',photo:779,duration:90,note:'The free LIT exhibition at MED CAMPUS. A short walk north of your hotel.'},
    {at:'11:30',title:'Choose one last experience',note:'Stay for create your world or check a medSPACE session. Alternatively, the water conference runs 11:00–15:00 in the OK Quarter.'},
    {at:'13:00',title:'Lunch or a slice of Linzer Torte',note:'Klosterhof serves lunch from 11:00; Jindrak’s Sunday café runs 10:00–17:00.'},
    {at:'Before departure',title:'Bags, airport, home',note:'Check the Sunday bus 601 connection or book a taxi. The ROXI station shuttle does not list Sunday service. Flight time still needed.'}
  ]}
];

export function guideHTML(escape, notes, coverage) {
 const link=(url,text)=>`<a href="${url}" target="_blank" rel="noreferrer">${text} ↗</a>`;
 return `<div class="page-wrap"><div class="page-heading"><div class="eyebrow"><span class="tiny-star">↗</span> THE USEFUL LITTLE DETAILS</div><h1>Less figuring out.<br>More being there<span class="orange">.</span></h1><p>FRA → LNZ. A home base at Courtyard by Marriott Linz, assumed from your message. Here’s how the airport, city transport and festival tickets fit together.</p></div>
 <div class="guide-grid">
 <section class="guide-card"><span class="num">01 / ARRIVAL & DEPARTURE</span><h2>From landing to Linz.</h2>
 <h3>Your route: Frankfurt → Linz Airport</h3><p>Flight numbers and times are still needed for a specific connection. Friday’s plan is a flexible suggestion; Sunday’s return airport is assumed to be LNZ.</p>
 <h3>Budget option: airport bus 601</h3><p>Connects LNZ and Linz Hauptbahnhof. The airport quotes about 22 minutes and €4.40 adult fare. Check the actual Friday or Sunday departure in the journey planner; buy the regional journey in LinzMobil/OÖVV before boarding. This airport trip extends beyond the city core zone.</p>
 <p><a href="https://www.google.com/maps/dir/?api=1&origin=Linz+Airport&destination=Europaplatz+2+Linz&travelmode=transit" target="_blank" rel="noreferrer">Airport → hotel transit directions ↗</a></p><h3>Then to your hotel</h3><p>At Hauptbahnhof, look up a bus to <b>Europaplatz</b>, beside the hotel. Marriott lists lines 12, 17, 19 and 25 at this stop; use the journey planner for the next suitable service and platform. A direct airport taxi avoids this transfer.</p>
 <h3>Sunday: favour the bus or a taxi</h3><p>The train alternative needs a last-mile connection from Hörsching station. The airport lists ROXI only Mon–Fri 07:00–18:00 and Sat 08:00–14:00—no Sunday service. Book a taxi if the bus does not suit your flight. Confirm the fare and pickup with the operator.</p>
 <p style="margin-top:14px">${link(sources.airport,'Airport bus & shuttle details')} · ${link(sources.taxi,'Airport taxis')} · ${link(sources.transit,'Find a connection')}</p>
 <label for="flight-notes">Your flight & transfer notes (saved on this browser)</label><textarea id="flight-notes" placeholder="FRA → LNZ · flight number · Friday arrival time\nReturn flight · Sunday departure time\nBooked transfer / baggage notes">${escape(notes)}</textarea><button class="outline-button" id="save-notes" style="margin-top:10px">Save travel notes</button>
 </section>
 <section class="guide-card"><span class="num">02 / CHOOSE YOUR FESTIVAL TICKET</span><h2>One pass. A whole weekend.</h2>
 <table class="price-table"><thead><tr><th>Full-price ticket</th><th>Price</th><th>Best for</th></tr></thead><tbody><tr class="recommended"><td>Festivalpass+</td><td>€230</td><td>Weekend + Big Concert Night</td></tr><tr><td>Festivalpass</td><td>€180</td><td>All three days, without concert</td></tr><tr><td>Day Pass × 3</td><td>€195</td><td>Less value than a full pass</td></tr><tr><td>Festival Walk</td><td>€14/day</td><td>Walk + Beyond Humanity only</td></tr></tbody></table>
 <p>Festivalpass+ is the only way into Big Concert Night; no standalone concert ticket. Festivalpass+, Festivalpass and Day Pass include LINZ AG city core-zone transport (Pöstlingbergbahn excluded). Airport travel is separate.</p>
 <h3>How to buy & enter</h3><ol><li>Buy on the official ticket page.</li><li>Exchange the confirmation for a badge at an infodesk; bring photo ID and any discount proof.</li><li>Book capacity-limited workshops and Deep Space sessions separately when required. Most WE GUIDE YOU tours cost €6 extra with an eligible pass; Hello Worlds! mini-tours list €3.</li></ol>
 <p><b>OK Platz infodesk:</b> Fri/Sat 09:30–19:00, Sun 09:30–18:00. A good first stop. MED CAMPUS is free to visit.</p>
 <a class="primary-button orange-button" href="${sources.tickets}" target="_blank" rel="noreferrer">Official tickets & availability ↗</a><p style="margin-top:12px">${link(sources.faq,'Badge collection details')}</p>
 </section>
 <section class="guide-card"><span class="num">03 / CITY TRANSPORT</span><h2>Get around like a local.</h2>
 <h3>First, check your festival badge</h3><p>If your valid pass covers LINZ AG core-zone travel, you don’t need another city ticket. Before collecting your badge, ask the infodesk whether your confirmation is valid for your first journey.</p>
 <h3>If you need a separate ticket</h3><p><b>MAXI 24-hour ticket: €6.40.</b> <b>MIDI single journey: €3.20.</b> The LinzMobil app also sells a €3.20 one-hour ticket. MAXI makes sense from your third ordinary single journey. These are adult city core-zone fares effective January 2026.</p>
 <ol><li>Use <b>LinzMobil</b> for route planning and live departures. Register only if buying tickets.</li><li>Buy and activate your ticket before boarding. Payment options include cards, PayPal, Apple Pay and Google Pay.</li><li>Alternatively, use a stop ticket machine. Machine tickets start immediately; pre-sale paper tickets need validation.</li><li>Keep your active ticket or valid badge ready for inspection.</li></ol>
 <p>${link(sources.fares,'Official 2026 fares')} · ${link('https://www.linzag.at/portal/de/privatkunden/unterwegs/linzmobil/linz_mobil.html','LinzMobil app')} · ${link(sources.transit,'Live journey planner')}</p>
 <h3>Useful stops to know</h3><p><b>Taubenmarkt / Mozartkreuzung:</b> central area and OK Quarter. <b>Hauptplatz:</b> University of Arts and a walk to Lentos. <b>Rudolfstraße:</b> by Ars Electronica Center. Tram lines 1–4 share the main central corridor; check the route and destination on the day.</p>
 </section>
 <section class="guide-card"><span class="num">04 / YOUR HOME BASE</span><h2>Out from Europaplatz.</h2>
 <p><b>Courtyard by Marriott Linz, Europaplatz 2.</b> Hotel identity still assumed. Published check-in is 14:00; checkout 12:00. Ask the front desk about storing bags around those times. No hotel airport shuttle is listed. ${link(sources.hotel,'Hotel details')}</p>
 <details open><summary>Hotel → festival hubs</summary><p>MED CAMPUS is the closest major hub, north of the hotel. Walking estimates: about 10 minutes to MED CAMPUS, 20–25 to OK Platz, and 30–35 to the riverfront. These are planning allowances, not live routing. Each event has a directions link for the actual journey.</p></details>
 <details><summary>Friday → Posthof & a late return</summary><p>Posthof recommends <b>bus 27 to Posthofstraße</b> or <b>46 to Hafenportal</b>, then a walk. The Friday overview also lists a city-centre festival shuttle from <b>Park Inn Hotel, Hessenplatz 16–18</b>. Ask the infodesk for departure times and eligibility; the PDF does not state them. ${link(sources.friday,'Friday overview')} For a late return, check <b>N83 from Hafenportal</b> and your onward connection, or use a taxi. Nightline can run until 04:00; check the last services before entering. ${link(sources.posthof,'Posthof transport details')}</p></details>
 <details><summary>Exhibition hours are not performance starts</summary><p>“Drop in” means an exhibition opening window; the suggested visit length is our estimate. A programme window can contain multiple performances. Specific tours and sessions have their own starts and capacity limits. The detail panel shows room names, languages and registration links when the official planner supplies them.</p></details>
 <details><summary>How this personal plan works</summary><p>Saving an event does not book it. Your plan and travel notes stay in this browser’s local storage. Export the plan as an .ics calendar file to keep a copy. The map uses venue coordinates from the festival; restaurant pins approximate their published addresses. Routes open in an external maps service.</p></details>
 </section></div>
 <section class="sources"><h2>Researched, with a way back to the source.</h2><p>${coverage.projects} distinct projects and ${coverage.occurrences.toLocaleString()} occurrences starting Friday–Sunday, September 11–13, 2026, imported from the public official planner on September 10. This includes individual artworks, programme collections, repeat sessions and opening hours—not ${coverage.occurrences.toLocaleString()} separate performances. Early-Friday listings can be continuations of Thursday night. The “Official highlights” flag follows the source; “Our picks” is our smaller editorial selection. Selected events have original background notes; other entries use short attributed official excerpts with artist and topic context. Programme changes and live availability must be checked on the linked official page.</p>
 <div class="source-links">${Object.entries({programme:'Official planner',highlights:'Festival highlights',locations:'Venues & hubs',friday:'Friday PDF',tickets:'Festival tickets',fares:'City transport fares',airport:'Linz Airport',posthof:'Posthof transport'}).map(([key,title])=>`<a href="${sources[key]}" target="_blank" rel="noreferrer">${title} ↗</a>`).join('')}</div></section></div>`;
}
