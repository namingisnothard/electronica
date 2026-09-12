export const todayZh={};
const c=(en,zh)=>(todayZh[en]=zh,en);
const copy={
 nav:c('Saturday route','周六路线'),eyebrow:c('YOUR DAY PASS / SATURDAY 12 SEPTEMBER 2026','你的单日票 / 2026年9月12日 周六'),
 title:c('Six hours. Four stops.','六个小时，四站精彩。'),
 intro:c('From Bosch in Deep Space to media art at Francisco Carolinum. A personal afternoon through the Danube Triangle and OK Quarter, with lunch and time to walk.','从 Deep Space 的博斯画作，到 Francisco Carolinum 的媒体艺术。穿过多瑙河三角区与 OK 街区，留出午餐和步行时间的专属下午路线。'),
 booked:c('✓ 13:00 Bosch · booking confirmed by you','✓ 13:00 博斯 · 你已确认预约'),hours:c('12:00–18:00 · Linz local time (CEST)','12:00–18:00 · 林茨当地时间（CEST）'),walk:c('About 35–45 min walking · estimate','步行约35–45分钟 · 估算'),
 directions:c('Open walking route ↗','打开步行路线 ↗'),calendar:c('Download day calendar ↓','下载当日日历 ↓'),
 mapTitle:c('Your afternoon, on the map','地图上的下午行程'),mapHint:c('Select a numbered pin to find its stop.','点击数字图钉查看对应行程。'),fit:c('Show whole route','显示完整路线'),
 mapNote:c('Dotted lines show visit order, not street directions. Use the walking links for navigation.','虚线表示参观顺序，并非实际街道路线。请使用步行链接导航。'),mapError:c('Map tiles could not load. The numbered stops and walking directions still work.','地图底图加载失败，数字站点与步行导航仍可使用。'),
 schedule:c('Your day, step by step','按时间出发'),note:c('Suggested visit times; Bosch is the fixed session. Exhibition opening hours are shown separately.','参观时间为建议安排；博斯为固定场次。展览开放时间另列。'),
 onMap:c('Locate on map','在地图上定位'),walkHere:c('Walk here ↗','步行到这里 ↗'),official:c('Official programme ↗','官方活动页面 ↗'),look:c('Start with these works','优先看这些作品'),
 window:c('Exhibition open','展览开放'),details:c('View this stop →','查看这一站 →'),
 access:c('Day pass covers these exhibitions. Collect your badge at the AEC infodesk if needed. No extra exhibition bookings are listed; your Bosch reservation is already confirmed.','单日票包含这些展览。如需换领胸牌，可在 AEC 服务台办理。所选展览未列出额外预约要求；博斯场次你已预约。'),
 sources:c('Admission & badge collection ↗','入场与胸牌领取 ↗'),
 district:c('OK Quarter is the festival district. Francisco Carolinum is at Museumstraße 14; OK Linz itself is a separate venue at OK Platz 1, beside your final stop.','OK Quarter 是艺术节街区。Francisco Carolinum 位于 Museumstraße 14；OK Linz 本身是另一处场馆，地址为 OK Platz 1，就在最后一站附近。'),
 queue:c('If an interactive work has a long queue, move to the next work in that venue. Keep the 13:00 booking and finish at 18:00.','如互动作品排队较长，可先看同馆的下一件作品。请确保13:00准时入场，并于18:00结束。'),
 checked:c('Route researched 12 September 2026. Exhibition links provide the latest programme; queues and walking times can vary.','路线核对日期：2026年9月12日。展览链接可查看最新活动安排；排队与步行时间可能变化。'),
};
export const dayStops=[
 {number:1,id:'aec',venue:'Ars Electronica Center',at:'12:00–13:30',lat:48.309619,lng:14.284447,address:'Ars-Electronica-Straße 1, 4040 Linz',hub:'DANUBE TRIANGLE',session:795,works:[2966,2941],
  title:'Hello Worlds! + Deep Space 8K',
  note:c('Collect your badge from 12:00–12:15, then explore Hello Worlds! on level −3 until 12:45. Start with the machines drawing and erasing bird tracks, and the mirror that responds to your smile.','12:00–12:15领取胸牌，再前往地下3层参观 Hello Worlds!，12:45离开。先看留下并抹去鸟足迹的机器，再体验回应微笑的镜子。'),
  transfer:c('13:30–14:10 · Lunch + cross the Nibelungen Bridge','13:30–14:10 · 午餐 + 穿过尼伯龙根桥'),transferNote:c('Allow about 10–15 minutes to walk to Lentos and 25–30 minutes for a quick lunch around Hauptplatz.','步行至 Lentos 约10–15分钟，另留25–30分钟在主广场附近简单用餐。')},
 {number:2,id:'lentos',venue:'Lentos Kunstmuseum',at:'14:10–15:30',lat:48.308628,lng:14.288836,address:'Ernst-Koref-Promenade 1, 4020 Linz',hub:'DANUBE TRIANGLE',session:765,works:[1180,1250,1285],title:'Negotiating Humanity',
  note:c('The prize winners are your anchor exhibition. Watch a complete cycle of Mechanical Kurds, explore CHIMERIA, then look for Office for Tree Migration. Ask staff which interactive elements are available.','获奖作品展是今天的重点。完整观看一轮 Mechanical Kurds，再看 CHIMERIA 与 Office for Tree Migration。可向工作人员询问哪些部分能现场体验。'),
  transfer:c('15:30–15:45 · Walk to Francisco Carolinum','15:30–15:45 · 步行至 Francisco Carolinum'),transferNote:c('Head east to Museumstraße 14. Allow 15 minutes for the walk and finding the entrance.','向东前往 Museumstraße 14，预留15分钟步行及寻找入口。')},
 {number:3,id:'francisco',venue:'Francisco Carolinum',at:'15:45–16:45',lat:48.306032,lng:14.293706,address:'Museumstraße 14, 4020 Linz',hub:'OK QUARTER',session:790,works:[1260,1215,1290],title:'Ars Electronica Features Exhibition',
  note:c('A full hour for international media art. Begin on level 0: a robotic dog reconnects a child with home in Open World; Operation Sunken Sea examines grand engineering fantasies; Counter-Cartographies of Resistance combines textiles and projected images.','用一小时看国际媒体艺术。从底层开始：Open World 的机器狗让孩子重新连接家乡；Operation Sunken Sea 审视宏大的工程幻想；Counter-Cartographies of Resistance 结合纺织与投影。'),
  transfer:c('16:45–17:00 · Walk towards OK Platz','16:45–17:00 · 步行前往 OK Platz'),transferNote:c('Continue south to Ursulinenhof, Landstraße 31. Allow time to find the attic exhibition.','向南前往 Landstraße 31 的 Ursulinenhof，留出寻找阁楼展厅的时间。')},
 {number:4,id:'ursulinenhof',venue:'Ursulinenhof · Attic',at:'17:00–18:00',lat:48.302259,lng:14.290737,address:'Landstraße 31, 4020 Linz',hub:'OK QUARTER',session:775,works:[1360,1040,925],title:'Negotiating Beyond Humanity',
  note:c('Finish with a shift in the senses: Olfactory Biome uses scent and movement, Parallel World reveals a garden through moth-like colour vision, and Entangled Landscape explores underground fungal networks. Finish beside OK Platz at 18:00.','以感官转换结束一天：Olfactory Biome 用气味与动作构建体验，Parallel World 通过类似飞蛾的色觉呈现花园，Entangled Landscape 探索地下真菌网络。18:00在 OK Platz 旁结束。')},
];
const bookingNote=c('12:45 · Head to level 0 for a 15-minute arrival buffer. Follow your confirmation if it asks you to arrive earlier.','12:45 · 前往底层，预留15分钟入场。若预约确认要求更早到达，请以确认信息为准。');
const bookingTitle=c('✓ 13:00–13:30 · Your booked Bosch session','✓ 13:00–13:30 · 已预约的博斯场次');
function directions(stop,previous){const u=new URL('https://www.google.com/maps/dir/');u.searchParams.set('api','1');u.searchParams.set('travelmode','walking');u.searchParams.set('destination',`${stop.lat},${stop.lng}`);if(previous)u.searchParams.set('origin',`${previous.lat},${previous.lng}`);return u.href;}
function fullDirections(){const u=new URL(directions(dayStops.at(-1),dayStops[0]));u.searchParams.set('waypoints',dayStops.slice(1,-1).map(s=>`${s.lat},${s.lng}`).join('|'));return u.href;}
export function todayHTML(events,esc){
 const pairs=new Map(events.flatMap(event=>event.sessions.map(session=>[session.id,{event,session}])));
 return `<div class="today-page"><section class="today-hero"><div class="eyebrow">${copy.eyebrow}</div><h1>${copy.title}</h1><p>${copy.intro}</p><div class="today-facts"><span>${copy.hours}</span><span>${copy.walk}</span><span class="today-confirmed">${copy.booked}</span></div><div class="today-actions"><a class="solid-button" href="${fullDirections()}" target="_blank" rel="noreferrer">${copy.directions}</a><a class="outline-button" href="downloads/saturday-route.ics" download>${copy.calendar}</a></div></section>
 <div class="today-layout"><aside class="today-map-card"><div class="today-map-heading"><div><h2>${copy.mapTitle}</h2><p>${copy.mapHint}</p></div><button class="small-button" data-today-fit>${copy.fit}</button></div><div id="today-map" aria-label="Saturday route map"></div><p class="today-map-note">${copy.mapNote}</p><p id="today-map-status" role="status"></p><div class="today-map-key">${dayStops.map(s=>`<button data-today-focus="${s.id}"><span class="today-number">${s.number}</span>${s.venue}</button>`).join('')}</div><p class="today-district">${copy.district}</p></aside>
 <section class="today-timeline" aria-label="Saturday itinerary"><div class="today-section-title"><h2>${copy.schedule}</h2><p>${copy.note}</p></div>${dayStops.map((s,i)=>{
 const p=pairs.get(s.session),img=p?.event.image;return `<article class="today-stop" id="today-stop-${s.id}"><div class="today-stop-top"><span class="today-number">${s.number}</span><span>${s.at}</span><span class="today-hub">${s.hub}</span></div>${img?`<img class="today-photo" src="${esc(img.startsWith('/')?'.'+img:img)}" alt="${esc(s.title)}" loading="lazy"><p class="today-credit">${esc(p.event.credit||'')}</p>`:''}<div class="today-stop-body"><h2>${s.venue}</h2><p class="today-address">${s.address}</p><button class="today-event-title" data-detail="${s.session}"><span>${s.title}</span> ↗</button><p>${s.note}</p>${i===0?`<div class="today-booking"><strong>${bookingTitle}</strong><p>${bookingNote}</p><button class="text-button" data-detail="396"><span>The Last Judgement Triptych by Hieronymus Bosch</span> ↗</button><small>Deep Space 8K · Level 0 · EN</small></div>`:''}<h3>${copy.look}</h3><div class="today-works">${s.works.map(id=>{const pair=pairs.get(id);return pair?`<button data-detail="${id}">${esc(pair.event.title)} <span>↗</span></button>`:''}).join('')}</div><p class="today-opening"><span>${copy.window}</span> · ${p?.session.start.slice(11,16)}–${p?.session.end.slice(11,16)}</p><div class="today-stop-actions"><button class="text-button" data-today-focus="${s.id}" data-today-map>${copy.onMap}</button><a href="${directions(s,dayStops[i-1])}" target="_blank" rel="noreferrer">${copy.walkHere}</a><a href="${esc(p?.event.source||'https://festivalplanner.ars.electronica.art/')}" target="_blank" rel="noreferrer">${copy.official}</a></div></div></article>${s.transfer?`<div class="today-transfer"><span aria-hidden="true">↓</span><div><strong>${s.transfer}</strong><p>${s.transferNote}</p></div></div>`:''}`;
 }).join('')}<div class="today-practical"><p>${copy.access}</p><a href="https://ars.electronica.art/negotiatinghumanity/en/tickets/" target="_blank" rel="noreferrer">${copy.sources}</a><p>${copy.queue}</p><small>${copy.checked}</small></div></section></div></div>`;
}
let routeMap,routeMarkers=new Map();
export function mountTodayMap(){
 const container=document.querySelector('#today-map');
 if(routeMap?.getContainer()!==container){routeMap?.remove();routeMap=null;routeMarkers.clear();}
 if(!routeMap){
  routeMap=L.map(container,{scrollWheelZoom:true,zoomSnap:.25});
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).on('tileerror',()=>{document.querySelector('#today-map-status').textContent=copy.mapError;}).addTo(routeMap);
  L.polyline(dayStops.map(s=>[s.lat,s.lng]),{color:'#e75c39',weight:3,dashArray:'5 9',opacity:.8}).addTo(routeMap);
  for(const s of dayStops){const marker=L.marker([s.lat,s.lng],{title:s.venue,icon:L.divIcon({className:'today-pin',html:`<span>${s.number}</span>`,iconSize:[36,36],iconAnchor:[18,18]})}).addTo(routeMap);marker.bindPopup(`<strong>${s.venue}</strong><br>${s.at}<br>${s.address}<br><button class="text-button" data-today-focus="${s.id}">${copy.details}</button>`);marker.on('click',()=>focusStop(s.id,false));routeMarkers.set(s.id,marker);}
  L.circleMarker([48.302876,14.29075],{radius:5,color:'#637c68',fillOpacity:1}).addTo(routeMap).bindTooltip('OK Linz · OK Platz 1').bindPopup('<strong>OK Linz · OK Platz 1</strong><br>OK QUARTER');
 }
 setTimeout(()=>{routeMap.invalidateSize();fitTodayMap();},0);
}
function fitTodayMap(){routeMap?.closePopup();routeMap?.fitBounds(dayStops.map(s=>[s.lat,s.lng]),{padding:[45,45]});}
function focusStop(id,mapOnly){document.querySelectorAll('.today-stop').forEach(el=>el.classList.toggle('today-selected',el.id==='today-stop-'+id));const marker=routeMarkers.get(id);if(marker){routeMap.setView(marker.getLatLng(),15);marker.openPopup();}if(mapOnly)document.querySelector('.today-map-card')?.scrollIntoView({behavior:'smooth',block:'nearest'});else document.querySelector('#today-stop-'+id)?.scrollIntoView({behavior:'smooth',block:'nearest'});}
if(typeof document!=='undefined')document.addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;if(button.hasAttribute('data-today-fit'))fitTodayMap();if(button.dataset.todayFocus)focusStop(button.dataset.todayFocus,button.hasAttribute('data-today-map'));});
