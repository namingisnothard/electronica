import json, sys, re, datetime
from pathlib import Path

source = Path(sys.argv[1] if len(sys.argv)>1 else '/tmp')
events = json.load(open(source / 'ars-weekend.json'))
locations = json.load(open(source / 'ars-locations.json'))['data']
locs = {l['id']:l for l in locations}
curation = json.load(open('scripts/curation.json'))
by_project = {next(e['project_notion_id'] for e in events if e['id']==int(i)): dict(v, photo=int(i)) for i,v in curation.items()}

def building(e):
    l=locs.get(e['location_id'])
    if not l: return e['location_data'] or {}
    visited=set()
    while l.get('parent_id') in locs and l['id'] not in visited:
        visited.add(l['id']); parent=locs[l['parent_id']]
        if parent.get('type') in ['hub','area']: break
        l=parent
    return l

groups={}
for e in events:
    key=e['project_notion_id']
    if key not in groups:
        brief=e.get('short_description') or e.get('web_preview_text') or e.get('description') or ''
        words=brief.split()
        groups[key]={
            'id':key, 'title':re.sub(r'\s+',' ',e['title']).strip(),
            'excerpt':' '.join(words[:24])+('…' if len(words)>24 else ''),
            'category':e['category'], 'artists':e.get('artists'),
            'tags':[t.get('label',t['name']) for t in e.get('tags',[])],
            'highlight':bool(e['is_highlight']), 'source':e['web_link'],
            'image':('https://festivalplanner.ars.electronica.art'+e['image_url_desktop']) if e.get('image_url_desktop') else None,
            'credit':e.get('image_credits'), 'curation':by_project.get(key), 'sessions':[]
        }
        if key in by_project: groups[key]['image']='/images/'+str(by_project[key]['photo'])+'.webp'
    b=building(e); ld=e.get('location_data') or {}
    groups[key]['sessions'].append({
        'id':e['id'], 'start':e['start_time'].replace(' ','T')+'+02:00', 'end':e['end_time'].replace(' ','T')+'+02:00',
        'day':e['start_time'][:10], 'venue':b.get('name_en') or ld.get('building_name') or e['location'],
        'venueId':b.get('id') or e['location_id'], 'room':ld.get('detail') or e['location'],
        'lat':b.get('latitude') or ld.get('latitude'), 'lng':b.get('longitude') or ld.get('longitude'),
        'address':b.get('address') or ld.get('address'), 'hub':ld.get('main_location') or 'SATELLITE LOCATIONS',
        'flexible':e['schedule_type']=='opening_hours', 'language':e['language'],
        'registration':(bool(e['registration_required']) and e['id']!=100) or e['id']==239,
        'booking':e['registration_url'], 'arrival':e['recommended_arrival_minutes'],
        'cost':e['ticket_costs'], 'capacity':e['capacity']
    })
result={'updated':datetime.datetime.now(datetime.timezone.utc).isoformat(), 'source':'https://festivalplanner.ars.electronica.art/',
        'coverage':{'projects':len(groups),'occurrences':len(events),'dates':['2026-09-11','2026-09-12','2026-09-13']},
        'events':list(groups.values()),
        'venues':[{'id':l['id'],'name':l['name_en'],'lat':l['latitude'],'lng':l['longitude'],'address':l['address'],
                   'hub':l['main_location'],'hours':l['opening_hours_en'],'source':l['link_url']} for l in locations if l.get('latitude') and l.get('type')=='building']}
Path('public/data').mkdir(parents=True,exist_ok=True)
json.dump(result,open('public/data/programme.json','w'),ensure_ascii=False,separators=(',',':'))
print('Built',len(groups),'projects and',len(events),'weekend occurrences')
