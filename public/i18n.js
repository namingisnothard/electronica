import { programmeZh } from './zh-programme.js';
import { zh } from './zh.js';
let language='en';
try { language=localStorage.getItem('linz-weekender-language')==='zh'?'zh':'en'; } catch {}
const originals=new WeakMap(), attrs=new WeakMap();
const translatedAttributes=['placeholder','aria-label','title','alt'];
const days={Friday:'周五',Saturday:'周六',Sunday:'周日'};
export function searchTranslation(value){return programmeZh[value]||zh[value]||'';}
export function programmeText(value){return language==='zh'?(programmeZh[value]||t(value)):String(value??'');}
export function t(value){
 const source=String(value??'');if(language!=='zh')return source;
 const key=source.trim();if(!key)return source;let result=zh[key];
 if(result===undefined){
  if(/^“[\s\S]*”$/.test(key)&&zh[key.slice(1,-1)])return `“${zh[key.slice(1,-1)]}”`;

  result=key.replace(/^650 distinct projects and 1,658 occurrences[\s\S]*$/, '2026年9月10日从官方日程导入：9月11–13日共有650个独立项目、1,658条场次记录，包含单件作品、节目集合、重复场次与开放时段，并不代表1,658场独立演出。周五凌晨内容可能延续自周四夜间。“官方推荐”依官方标记；“精选推荐”为本指南选择。所有项目均提供中文标题与简介，原始标题同时保留以便对照；中文为本指南的阅读译文，并非官方译名。活动变更和实时名额请以官方链接为准。').replace(/^(Friday|Saturday|Sunday) (\d+) Sept$/,(m,day,n)=>`9月${n}日 ${days[day]}`)
   .replace(/^(FRIDAY|SATURDAY|SUNDAY) (\d+) SEPT$/,(m,day,n)=>`9月${n}日 ${days[day[0]+day.slice(1).toLowerCase()]}`)
   .replace(/^(\d+) projects?$/, '$1 个项目').replace(/: (\d+) projects?$/, ': $1 个项目')
   .replace(/^(\d+) sessions?$/, '$1 个场次')
   .replace(/\b(\d+) slots\b/g, '$1 个场次')
   .replace(/^Your saved weekend\s*\((\d+)\)$/, '已收藏的行程（$1）')
   .replace(/^Show more · (\d+) remaining ↓$/, '加载更多 · 还有 $1 项 ↓')
   .replace(/^Suggested visit: (\d+) minutes$/, '建议参观 $1 分钟')
   .replace(/^(\d+) min · fixed session$/, '$1 分钟 · 固定场次')
   .replace(/^Only (\d+) min to change venues; allow roughly (\d+) min on foot \(estimate\).$/, '换场仅有 $1 分钟；步行建议预留约 $2 分钟（估算）。')
   .replace(/^Overlaps (.+)\.$/, '与「$1」时间冲突。')
   .replace(/^(\d+) festival stops added\. Meals and transfers remain route reminders\.$/, '已添加 $1 个艺术节活动；餐饮和交通仍作为路线提示。')
   .replace(/^Registration closed \/ fully booked\. A saved plan does not reserve admission\.$/, '报名已截止／名额已满。收藏行程不代表获得入场资格。')
   .replace(/^(Save|Remove|Add|Visit start for|Visit duration in minutes for) (.+)$/,(m,verb,name)=>`${({Save:'收藏',Remove:'移除',Add:'添加','Visit start for':'参观开始时间：','Visit duration in minutes for':'参观时长（分钟）：'})[verb]} ${programmeZh[name]||zh[name]||name}`)
   .replace(/^Created or presented by (.+)\. /,'创作者／参与者：$1。')
   .replace(/The programme connects (.+)\. /,'相关主题：$1。')
   .replace('This entry is an individual work within the wider programme. Use the room and venue information to find it, and allow time to explore its surrounding exhibition.','这是艺术节中的单件作品。请根据场馆和房间信息找到它，也留些时间探索同一展区。')
   .replace(/This is a (.+) in the festival’s (.+)\. Use the official listing for the full programme context and contributor biographies\./,'活动类型：$1；展区：$2。完整背景与参与者介绍请见官方活动页面。');
  const tokens={'DROP IN':'开放时段','(+1 day)':'（次日）','SUGGESTED VISIT':'建议参观时间','OFFICIAL HIGHLIGHT':'官方重点推荐','Booking required':'需预约','Clear venue ×':'清除场馆 ×','Programme window':'节目时段','Scheduled start':'固定场次','Language not specified':'语言未注明','min visit':'分钟','matching projects':'个匹配项目','matching project':'个匹配项目'};
  for(const [en,cn]of Object.entries(tokens))result=result.replaceAll(en,cn);
  for(const en of ['EXHIBITION','PROJECT','COLLECTION','EXPERIENCE','CONCERT','PERFORMANCE','SCREENING','GUIDED TOUR','CONFERENCE','KEYNOTE','WORKSHOP','OPEN LAB','LECTURE & TALK','PANEL DISCUSSION','NETWORKING EVENT','MEET THE ARTIST','AWARD CEREMONY','DEEP DIVE','INTRO SESSION'])result=result.replaceAll(en,zh[en]||en);
 }
 result=result.replace(/(?<=^| · )(?:EN|DE|HU|nonverbal|other|sign language)(?:, (?:EN|DE|HU|nonverbal|other|sign language))*(?=$)/g,m=>m.split(', ').map(x=>({EN:'英语',DE:'德语',HU:'匈牙利语',nonverbal:'无语言',other:'其他语言','sign language':'手语'})[x]).join('、'));
 result=result.replace(/\bLevel (-?\d+)\b/g,'$1层').replace(/\b(\d+)(?:st|nd|rd|th) floor\b/g,'$1楼').replace(/\bRoom (\d+)\b/g,'房间$1').replace(/\bLecture Hall (\d+)\b/g,'讲堂$1').replace(/\b(Administration Building|Library Building|Teaching Building|Laboratory Building|West Building|East Building|Ground Floor|Top Floor|Third Floor|Meeting Point|Infodesk|Courtyard|Attic|Garden|Schoolyard|Foyer|Auditorium|Seminar Room)\b(?=,|$| \()/g,m=>({'Administration Building':'行政楼','Library Building':'图书馆楼','Teaching Building':'教学楼','Laboratory Building':'实验楼','West Building':'西楼','East Building':'东楼','Ground Floor':'底层','Top Floor':'顶层','Third Floor':'三楼','Meeting Point':'集合点','Infodesk':'服务台','Courtyard':'庭院','Attic':'阁楼','Garden':'花园','Schoolyard':'校园庭院','Foyer':'门厅','Auditorium':'礼堂','Seminar Room':'研讨室'})[m]);
 result=result.replace(/(\d{2}) Sep ·/g,'9月$1日 ·').replace(/(Friday|Saturday|Sunday) (\d+) Sept/g,(m,day,n)=>`9月${n}日 ${days[day]}`).replace(/Arrive (\d+) minutes early\./g,'请提前 $1 分钟到达。');
 return source.slice(0,source.length-source.trimStart().length)+result+source.slice(source.trimEnd().length);
}
let observer,scheduled=false;
function applyLanguage(){
 observer?.disconnect();
 document.documentElement.lang=language==='zh'?'zh-CN':'en';
 document.title=language==='zh'?'林茨周末指南 — Ars Electronica 2026':'Linz Weekender — Ars Electronica 2026';
 // Preserve implicit option values before changing their visible labels.
 document.querySelectorAll('option').forEach(o=>{if(!o.hasAttribute('value'))o.setAttribute('value',o.textContent)});
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let node;while((node=walker.nextNode())){
  if(!node.parentElement||node.parentElement.closest('script,style,textarea,[data-no-translate]'))continue;
  if(!originals.has(node))originals.set(node,node.nodeValue);
  const translate=node.parentElement.matches('.card-title,.calendar-title,#detail-title')?programmeText:t;
  const next=translate(originals.get(node));if(node.nodeValue!==next)node.nodeValue=next;
 }
 for(const el of document.querySelectorAll('[placeholder],[aria-label],[title],[alt]')){
  if(el.closest('[data-no-translate]'))continue;
  let base=attrs.get(el);if(!base){base={};attrs.set(el,base)}
  for(const attr of translatedAttributes)if(el.hasAttribute(attr)){
   const current=el.getAttribute(attr);
   if(!base[attr]||current!==base[attr].last)base[attr]={source:current};
   const next=attr==='alt'?programmeText(base[attr].source):t(base[attr].source);base[attr].last=next;if(current!==next)el.setAttribute(attr,next);
  }
 }
 const toggle=document.querySelector('#language-toggle');toggle.textContent=language==='zh'?'EN':'中文';toggle.setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');toggle.setAttribute('aria-pressed',language==='zh');
 observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:translatedAttributes});
}
export function setupLanguage(){
 observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;queueMicrotask(()=>{scheduled=false;applyLanguage()})}});
 document.querySelector('#language-toggle').addEventListener('click',()=>{language=language==='zh'?'en':'zh';try{localStorage.setItem('linz-weekender-language',language)}catch{}applyLanguage()});
 applyLanguage();
}
