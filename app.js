/* ===================== LAWVERSE APP =====================
   Depends on (loaded first in index.html): vendor/react, vendor/react-dom, vendor/htm, content.js
   ========================================================= */
const ICON={"award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\" /> <circle cx=\"12\" cy=\"8\" r=\"6\" /> ", "book-open-text": "<path d=\"M12 7v14\" /> <path d=\"M16 12h2\" /> <path d=\"M16 8h2\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" /> <path d=\"M6 12h2\" /> <path d=\"M6 8h2\" /> ", "calendar-clock": "<path d=\"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5\" /> <path d=\"M16 2v4\" /> <path d=\"M8 2v4\" /> <path d=\"M3 10h5\" /> <path d=\"M17.5 17.5 16 16.3V14\" /> <circle cx=\"16\" cy=\"16\" r=\"6\" /> ", "chart-no-axes-column": "<line x1=\"18\" x2=\"18\" y1=\"20\" y2=\"10\" /> <line x1=\"12\" x2=\"12\" y1=\"20\" y2=\"4\" /> <line x1=\"6\" x2=\"6\" y1=\"20\" y2=\"14\" /> ", "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" /> ", "circle-help": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /> <path d=\"M12 17h.01\" /> ", "circle-x": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m15 9-6 6\" /> <path d=\"m9 9 6 6\" /> ", "clapperboard": "<path d=\"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z\" /> <path d=\"m6.2 5.3 3.1 3.9\" /> <path d=\"m12.4 3.4 3.1 4\" /> <path d=\"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z\" /> ", "flame": "<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\" /> ", "folder-search": "<path d=\"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1\" /> <path d=\"m21 21-1.9-1.9\" /> <circle cx=\"17\" cy=\"17\" r=\"3\" /> ", "gamepad-2": "<line x1=\"6\" x2=\"10\" y1=\"11\" y2=\"11\" /> <line x1=\"8\" x2=\"8\" y1=\"9\" y2=\"13\" /> <line x1=\"15\" x2=\"15.01\" y1=\"12\" y2=\"12\" /> <line x1=\"18\" x2=\"18.01\" y1=\"10\" y2=\"10\" /> <path d=\"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z\" /> ", "graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\" /> <path d=\"M22 10v6\" /> <path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\" /> ", "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" /> ", "lightbulb": "<path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\" /> <path d=\"M9 18h6\" /> <path d=\"M10 22h4\" /> ", "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" /> <path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" /> ", "list-music": "<path d=\"M21 15V6\" /> <path d=\"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z\" /> <path d=\"M12 12H3\" /> <path d=\"M16 6H3\" /> <path d=\"M12 18H3\" /> ", "list-ordered": "<path d=\"M10 12h11\" /> <path d=\"M10 18h11\" /> <path d=\"M10 6h11\" /> <path d=\"M4 10h2\" /> <path d=\"M4 6h1v4\" /> <path d=\"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1\" /> ", "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" /> ", "moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\" /> ", "moon-star": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9\" /> <path d=\"M20 3v4\" /> <path d=\"M22 5h-4\" /> ", "pen-line": "<path d=\"M12 20h9\" /> <path d=\"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z\" /> ", "play": "<polygon points=\"6 3 20 12 6 21 6 3\" /> ", "rotate-ccw": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /> <path d=\"M3 3v5h5\" /> ", "scale": "<path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"M7 21h10\" /> <path d=\"M12 3v18\" /> <path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\" /> ", "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" /> ", "shopping-bag": "<path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\" /> <path d=\"M3 6h18\" /> <path d=\"M16 10a4 4 0 0 1-8 0\" /> ", "smartphone": "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\" /> <path d=\"M12 18h.01\" /> ", "sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" /> <path d=\"M20 3v4\" /> <path d=\"M22 5h-4\" /> <path d=\"M4 17v2\" /> <path d=\"M5 18H3\" /> ", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /> <path d=\"M12 2v2\" /> <path d=\"M12 20v2\" /> <path d=\"m4.93 4.93 1.41 1.41\" /> <path d=\"m17.66 17.66 1.41 1.41\" /> <path d=\"M2 12h2\" /> <path d=\"M20 12h2\" /> <path d=\"m6.34 17.66-1.41 1.41\" /> <path d=\"m19.07 4.93-1.41 1.41\" /> ", "target": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <circle cx=\"12\" cy=\"12\" r=\"6\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" /> ", "timer": "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\" /> <line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\" /> <circle cx=\"12\" cy=\"14\" r=\"8\" /> ", "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /> <path d=\"M12 9v4\" /> <path d=\"M12 17h.01\" /> ", "trophy": "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\" /> <path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\" /> <path d=\"M4 22h16\" /> <path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\" /> <path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\" /> <path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\" /> ", "volleyball": "<path d=\"M11.1 7.1a16.55 16.55 0 0 1 10.9 4\" /> <path d=\"M12 12a12.6 12.6 0 0 1-8.7 5\" /> <path d=\"M16.8 13.6a16.55 16.55 0 0 1-9 7.5\" /> <path d=\"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10\" /> <path d=\"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5\" /> <circle cx=\"12\" cy=\"12\" r=\"10\" /> "};

const {useState, useEffect, useMemo, useRef, useCallback} = React;
const html = htm.bind(React.createElement);

/* ---------- helpers ---------- */
const DAY = 86400000;
const now = () => Date.now();
const today = () => new Date().toISOString().slice(0,10);
const shuffle = a => { const b=a.slice(); for(let i=b.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [b[i],b[j]]=[b[j],b[i]]; } return b; };
const norm = s => String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'');
const subById = id => SUBTOPICS.find(s=>s.id===id);
const topicById = id => TOPICS.find(t=>t.id===id);
const qById = id => Q.find(q=>q.id===id);
const caseById = id => CASES.find(c=>c.id===id);
const qsFor = sub => Q.filter(q=>q.sub===sub);
const LEVELS = ['','Recognise','Recall','Explain','Apply','Exam'];
const TYPE_LABEL = {mcq:'Choose', tf:'True or false', fill:'Fill the gap', recall:'Recall', order:'Put in order', match:'Match up'};
const MASTERY = ['Not Started','Learning','Practising','Almost There','Mastered'];

/* ---------- progress model ---------- */
const BLANK = () => ({v:1, ts:0, name:'', look:'auto', chill:false, xp:0, items:{}, eps:{}, epStep:{}, mysteries:{}, shop:{}, glow:{}, netball:{matches:0, goals:0, best:0}, badges:{}, srs:[1,3,7], days:{}, dailyDone:'', events:[]});
const LSKEY = 'lawverse-pil-v1';
function loadLocal(){ try{ const s=localStorage.getItem(LSKEY); if(s) return {...BLANK(), ...JSON.parse(s)}; }catch(e){} return BLANK(); }
function saveLocal(p){ try{ localStorage.setItem(LSKEY, JSON.stringify(p)); }catch(e){} }

function applyResult(p, q, correct, opts={}){
  const it = {...(p.items[q.id]||{n:0,c:0,w:0,streak:0,int:0,due:0,last:0,lastWrong:false})};
  it.n++; it.last = now();
  const srs = p.srs && p.srs.length ? p.srs : [1,3,7];
  if(correct){ it.c++; it.streak++; it.lastWrong=false;
    it.int = it.streak<=srs.length ? srs[it.streak-1] : Math.min(90, Math.round((it.int||srs[srs.length-1])*2));
  } else { it.w++; it.streak=0; it.lastWrong=true; it.int = srs[0]; }
  it.due = now() + it.int*DAY;
  if(opts.self) it.self = true;
  const gain = correct ? (opts.self ? 8 : 10) + (q.level>=4?4:0) : 3;
  const days = {...p.days, [today()]: true};
  return {...p, xp:p.xp+gain, items:{...p.items, [q.id]:it}, days};
}

function subStats(p, sub){ const qs=qsFor(sub); let n=0,c=0,seen=0; qs.forEach(q=>{ const it=p.items[q.id]; if(it){ seen++; n+=it.n; c+=it.c; } }); return {n,c,seen,total:qs.length,acc:n?c/n:0}; }
function masteryOf(p, sub){
  const qs=qsFor(sub); const st=subStats(p,sub);
  if(!st.seen && !p.eps[sub]) return 0;
  const ok = q => { const it=p.items[q.id]; return it && it.c>0 && !it.lastWrong; };
  const recallOk = qs.some(q=>q.level>=2 && q.level<=3 && ok(q));
  const applyOk = qs.some(q=>q.level>=4 && ok(q));
  if(recallOk && applyOk && st.acc>=0.75) return 4;
  if(recallOk) return 3;
  if(st.c>=3) return 2;
  return 1;
}
function topicMastery(p, tid){ const subs=SUBTOPICS.filter(s=>s.topicId===tid); return Math.min(...subs.map(s=>masteryOf(p,s.id))); }
function dueItems(p){ return Q.filter(q=>{ const it=p.items[q.id]; return it && it.due<=now(); }); }
function wrongItems(p){ return Q.filter(q=>p.items[q.id]?.lastWrong); }
function levelOf(xp){ const L=Math.floor(xp/150)+1; const names=['Fresh Intern','Junior Associate','Candidate Attorney','Advocate','Senior Counsel','International Jurist']; return {L, name:names[Math.min(names.length-1,L-1)], into:xp%150, need:150}; }
function streakDays(p){ let d=new Date(), s=0; for(;;){ const k=d.toISOString().slice(0,10); if(p.days[k]){ s++; d=new Date(d.getTime()-DAY); } else break; } return s; }

const curItems = p => Q.filter(q=>p.items[q.id]).map(q=>p.items[q.id]);
const epsDone = p => SUBTOPICS.filter(s=>p.eps[s.id]).length;
const BADGES = [
  {id:'first-ep', name:'First Episode', desc:'Finish your first episode', test:p=>epsDone(p)>=1},
  {id:'binge', name:'Binge Mode', desc:'Finish a whole season', test:p=>TOPICS.some(t=>SUBTOPICS.filter(s=>s.topicId===t.id).every(s=>p.eps[s.id]))},
  {id:'case', name:'Case Cracked', desc:'Solve a Case File mystery', test:p=>Object.values(p.mysteries).some(m=>m.done)},
  {id:'cart', name:'Perfect Cart', desc:'Checkout with no wrong items and nothing missing', test:p=>Object.values(p.shop).some(s=>s.perfect)},
  {id:'goal', name:'Centre to Circle', desc:'Score a netball goal', test:p=>p.netball.goals>=1},
  {id:'glow', name:'Full Glam', desc:'Finish a Legal Glow-Up', test:p=>Object.values(p.glow).some(g=>g.done)},
  {id:'daily', name:'Daily Five', desc:'Finish a Daily Five on Swipe Cards', test:p=>!!p.dailyDone},
  {id:'streak', name:'Three-Day Streak', desc:'Study on three days in a row', test:p=>streakDays(p)>=3},
  {id:'master', name:'Mastered It', desc:'Master a subtopic (recall + application)', test:p=>SUBTOPICS.some(s=>masteryOf(p,s.id)===4)},
  {id:'comeback', name:'Comeback Era', desc:'Get a question right after getting it wrong', test:p=>Object.values(p.items).some(i=>i.w>0 && i.c>0 && !i.lastWrong)},
];

/* ---------- persistence (Claude artifact db per person when available + local fallback) ---------- */
function useProgress(){
  const [p, setP] = useState(loadLocal);
  const [sync, setSync] = useState('local');
  const ref = useRef(null); const timer = useRef(0); const latest = useRef(p);
  useEffect(()=>{ let dead=false;
    (async()=>{ try{
      if(!window.claude || !window.claude.use) return;
      const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      if(!db || !user) return; const id = await user.id(); if(!id || dead) return;
      const doc = db.doc('data/users/'+id+'/progress'); ref.current = doc;
      const to = setTimeout(()=>{ if(!dead) setSync('local'); }, 10000);
      const snap = await doc.get(); clearTimeout(to);
      if(snap.exists){ const d = snap.data(); try{ const remote = JSON.parse(d.json); if((remote.ts||0) > (latest.current.ts||0)) { setP({...BLANK(), ...remote}); } }catch(e){} }
      setSync('cloud');
    }catch(e){ setSync('local'); } })();
    return ()=>{ dead=true; };
  },[]);
  const update = useCallback(fn => { setP(prev => { const next = {...(typeof fn==='function'?fn(prev):fn), ts:now()};
      const earned = BADGES.filter(b=>!next.badges[b.id] && b.test(next));
      if(earned.length){ next.badges = {...next.badges}; earned.forEach(b=>next.badges[b.id]=today()); next.events=[...(next.events||[]).slice(-20), ...earned.map(b=>({t:'badge', id:b.id, at:now()}))]; }
      latest.current = next; saveLocal(next);
      clearTimeout(timer.current); timer.current = setTimeout(()=>{ if(ref.current) ref.current.set({json:JSON.stringify(latest.current), ts:latest.current.ts}).catch(()=>{}); }, 1200);
      return next; }); }, []);
  return [p, update, sync];
}

/* ---------- small UI pieces ---------- */
const Ic = ({n, s}) => html`<svg class="ico" width=${s||20} height=${s||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" dangerouslySetInnerHTML=${{__html:ICON[n]||''}}></svg>`;
const TYPE_IC = {mcq:{I:'circle-help'}, tf:{I:'scale'}, fill:{I:'pen-line'}, recall:{I:'lightbulb'}, order:{I:'list-ordered'}, match:{I:'link'}};
const Pill = ({tone, children}) => html`<span class=${'pill '+(tone||'')}>${children}</span>`;
const MasteryPill = ({m}) => html`<span class=${'mpill m'+m}>${MASTERY[m]}</span>`;
const Btn = ({onClick, kind, children, disabled, big, type}) => html`<button type=${type||'button'} class=${'btn '+(kind||'')+(big?' big':'')} onClick=${onClick} disabled=${disabled}>${children}</button>`;
const Demo = () => COURSE_META.notesLoaded ? null : html`<span class="demo-tag" title="Illustrative content. Not the UWC prescribed curriculum.">Demo · not UWC material</span>`;
function Toast({msg}){ return msg? html`<div class="toast" role="status">${msg}</div>`: null; }
const Source = ({s}) => s? html`<div class="srcref"><b>Source</b> ${s}</div>`: null;

/* ---------- Question card ---------- */
const QuestionCard = props => html`<${QCInner} key=${props.q.id} ...${props}/>`;
function QCInner({q, chill, onResult, onNext, nextLabel, compact}){
  const [phase, setPhase] = useState('ask');
  const [pick, setPick] = useState(null);
  const [text, setText] = useState('');
  const [ticks, setTicks] = useState({});
  const [revealed, setRevealed] = useState(false);
  const [order, setOrder] = useState([]);
  const pool = useMemo(()=> q.type==='order' ? shuffle(q.items.map((t,i)=>({t,i}))) : null, [q.id]);
  const rights = useMemo(()=> q.type==='match' ? shuffle(q.pairs.map(p=>p[1])) : null, [q.id]);
  const [mm, setMm] = useState({});
  const [verdict, setVerdict] = useState(null);

  const finish = (correct, info={}) => { setVerdict({correct, ...info}); setPhase('done'); onResult && onResult(correct, info); };
  const chooseMcq = i => { if(phase!=='ask') return; setPick(i); finish(i===q.ans); };
  const chooseTf = v => { if(phase!=='ask') return; setPick(v); finish(v===q.ans); };
  const checkFill = () => { const ok = q.answers.some(a=>norm(a)===norm(text)); finish(ok); };
  const selfMark = () => { const n=Object.values(ticks).filter(Boolean).length; const need=Math.ceil(q.checklist.length*0.7); finish(n>=need, {self:true, score:n, of:q.checklist.length}); };
  const checkOrder = () => finish(order.every((o,k)=>o.i===k), {});
  const checkMatch = () => finish(q.pairs.every((p,i)=>mm[i]===p[1]), {});

  const chillRecall = chill && (q.type==='recall' || q.type==='fill');
  return html`<div class=${'qcard'+(compact?' compact':'')}>
    <div class="qmeta"><${Pill} tone="soft"><${Ic} n=${TYPE_IC[q.type].I} s=${15}/> ${TYPE_LABEL[q.type]}<//><${Pill}>Level ${q.level} · ${LEVELS[q.level]}<//>${subById(q.sub) && html`<span class="qsub">${subById(q.sub).name}</span>`}</div>
    <h3 class="qprompt">${q.prompt}</h3>

    ${q.type==='mcq' && html`<div class="opts">${q.opts.map((o,i)=>{ const st = phase==='done' ? (i===q.ans?'right':(i===pick?'wrong':'dim')) : '';
      return html`<button class=${'opt '+st} onClick=${()=>chooseMcq(i)} disabled=${phase!=='ask'}><span class="L">${'ABCD'[i]}</span><span>${o.t}</span></button>`; })}</div>`}

    ${q.type==='tf' && html`<div class="opts two">${[true,false].map(v=>{ const st = phase==='done' ? (v===q.ans?'right':(v===pick?'wrong':'dim')) : '';
      return html`<button class=${'opt '+st} onClick=${()=>chooseTf(v)} disabled=${phase!=='ask'}><span class="L">${v?'T':'F'}</span><span>${v?'True':'False'}</span></button>`; })}</div>`}

    ${q.type==='fill' && !chillRecall && html`<form class="fillrow" onSubmit=${e=>{e.preventDefault(); if(phase==='ask' && text.trim()) checkFill();}}>
      <input id=${'fill-'+q.id} aria-label="Your answer" value=${text} onInput=${e=>setText(e.target.value)} disabled=${phase!=='ask'} placeholder="Type the missing word" autocomplete="off"/>
      <${Btn} type="submit" kind="primary" disabled=${phase!=='ask'||!text.trim()}>Check<//></form>`}

    ${(q.type==='recall' || chillRecall) && html`<div class="recall">
      ${!revealed && (chill ? html`<p class="hint">Answer it in your head or say it out loud. No typing needed. Then reveal.</p>`
         : html`<textarea id=${'rc-'+q.id} aria-label="Your answer" rows="4" value=${text} onInput=${e=>setText(e.target.value)} placeholder="Write your answer from memory first…"></textarea>`)}
      ${!revealed && html`<${Btn} kind="primary" big=${chill} onClick=${()=>setRevealed(true)} disabled=${!chill && text.trim().length<3}>${chill?'I’ve answered: reveal':'Reveal model answer'}<//>`}
      ${revealed && html`<div class="model"><div class="lbl">Model answer</div><p>${q.type==='fill' ? q.prompt.replace('___', '['+q.answers[0]+']') : q.model}</p>
        ${!chill && text && html`<div class="mine"><div class="lbl">Your answer</div><p>${text}</p></div>`}
        ${phase==='ask' && html`<div class="lbl">Self-check: tick what your answer included</div>
          <div class="checks">${(q.checklist||['I recalled the missing word correctly']).map((c,i)=>html`<label class="chk"><input type="checkbox" id=${'ck-'+q.id+'-'+i} checked=${!!ticks[i]} onChange=${e=>setTicks({...ticks,[i]:e.target.checked})}/><span>${c}</span></label>`)}</div>
          <${Btn} kind="primary" big=${chill} onClick=${()=> q.checklist ? selfMark() : finish(!!ticks[0], {self:true})}>Submit self-check<//>
          <p class="fine">Self-marked: this is not automatically graded. Be honest with yourself; it decides when you see this again.</p>`}
      </div>`}
    </div>`}

    ${q.type==='order' && html`<div class="order">
      <div class="lbl">Tap in the right order</div>
      <div class="chips">${pool.filter(x=>!order.includes(x)).map(x=>html`<button class="chip" onClick=${()=>phase==='ask'&&setOrder([...order,x])} disabled=${phase!=='ask'}>${x.t}</button>`)}</div>
      <ol class="seq">${order.map((x,k)=>html`<li class=${phase==='done'?(x.i===k?'ok':'bad'):''}>${x.t}</li>`)}</ol>
      ${phase==='ask' && html`<div class="row"><${Btn} onClick=${()=>setOrder(order.slice(0,-1))} disabled=${!order.length}>Undo<//><${Btn} kind="primary" onClick=${checkOrder} disabled=${order.length!==pool.length}>Check order<//></div>`}
      ${phase==='done' && !verdict.correct && html`<div class="model"><div class="lbl">Correct order</div><ol>${q.items.map(t=>html`<li>${t}</li>`)}</ol></div>`}
    </div>`}

    ${q.type==='match' && html`<div class="match">${q.pairs.map((p,i)=>html`<div class="mrow">
        <span class="mleft">${p[0]}</span>
        <select id=${'m-'+q.id+'-'+i} aria-label=${'Match for '+p[0]} value=${mm[i]||''} onChange=${e=>setMm({...mm,[i]:e.target.value})} disabled=${phase!=='ask'} class=${phase==='done'?(mm[i]===p[1]?'ok':'bad'):''}>
          <option value="">Choose…</option>${rights.map(r=>html`<option value=${r}>${r}</option>`)}</select>
        ${phase==='done' && mm[i]!==p[1] && html`<span class="fix">→ ${p[1]}</span>`}</div>`)}
      ${phase==='ask' && html`<${Btn} kind="primary" onClick=${checkMatch} disabled=${Object.values(mm).filter(Boolean).length<q.pairs.length}>Check matches<//>`}</div>`}

    ${phase==='done' && html`<${Feedback} q=${q} v=${verdict} pick=${pick} chill=${chill}/>`}
    ${phase==='done' && onNext && html`<div class="row end"><${Btn} kind="primary" big=${chill} onClick=${()=>onNext(verdict.correct)}>${nextLabel||'Continue'}<//></div>`}
  </div>`;
}

function Feedback({q, v, pick, chill}){
  const wrongWhy = q.type==='mcq' && !v.correct && pick!=null ? q.opts[pick].w : null;
  const correctTxt = q.type==='mcq' ? q.opts[q.ans].t : q.type==='tf' ? (q.ans?'True':'False') : q.type==='fill' ? q.answers[0] : null;
  return html`<div class=${'fb '+(v.correct?'good':'bad')} role="status">
    <div class="fbhead"><${Ic} n=${v.correct?'circle-check':'circle-x'}/> ${v.correct ? (v.self?'Nice. Self-check passed.':'Correct.') : (v.self?'Not quite there yet.':'Not this time.')}
      ${v.self && html`<span class="fine"> ${v.score} of ${v.of} points ticked · self-marked</span>`}</div>
    ${wrongWhy && html`<p><b>Why that option is wrong:</b> ${wrongWhy}</p>`}
    ${!v.correct && correctTxt && html`<p><b>Correct answer:</b> ${correctTxt}</p>`}
    <p><b>The principle:</b> ${q.explain}</p>
    ${!v.correct && q.example && html`<p><b>New example:</b> ${q.example}</p>`}
    ${!v.correct && html`<p class="sched">Scheduled: this comes back later in the session and again tomorrow.</p>`}
    ${!chill && html`<${Source} s=${q.src}/>`}
  </div>`;
}

/* ---------- Generic session runner (playlists, review, Just 5) ---------- */
function Session({title, kicker, queue, p, update, chill, onExit, limit, player, cover}){
  const [list, setList] = useState(()=>queue.slice(0, limit||queue.length));
  const [i, setI] = useState(0);
  const [log, setLog] = useState([]);
  const requeued = useRef({});
  if(!list.length) return html`<div class="panel center"><h2>${title}</h2><p>Nothing in this list yet. Answer some questions first, then come back.</p><${Btn} onClick=${onExit}>Back<//></div>`;
  if(i>=list.length){ const c=log.filter(x=>x.c).length;
    const weak=[...new Set(log.filter(x=>!x.c).map(x=>subById(qById(x.id).sub)?.name))];
    return html`<div class="panel center summary"><div class="kicker">${kicker||'Session complete'}</div><h2>${title}: done</h2>
      <div class="bigscore">${c}<span>/${log.length}</span></div>
      <p>${c===log.length?'Clean run. Everything is scheduled further out.':'Everything you missed is scheduled for tomorrow.'}</p>
      ${weak.length>0 && html`<p><b>Revisit:</b> ${weak.join(', ')}</p>`}
      <div class="row center"><${Btn} kind="primary" onClick=${onExit}>Back home<//></div></div>`; }
  const q = qById(list[i]);
  const onResult = (ok, info) => { update(pp=>applyResult(pp,q,ok,info)); setLog(l=>[...l,{id:q.id,c:ok}]);
    if(!ok && !requeued.current[q.id] && list.length - i > 1){ requeued.current[q.id]=1; const at=Math.min(list.length, i+3); const nl=list.slice(); nl.splice(at,0,q.id); setList(nl); } };
  return html`<div class="session">
    ${player ? html`<${PlayerBar} title=${title} cover=${cover} i=${i} n=${list.length} q=${q}/>`
      : html`<div class="sesshead"><div><div class="kicker">${kicker}</div><h2>${title}</h2></div><div class="prog"><div style=${{width:(i/list.length*100)+'%'}}></div></div><span class="count">${i+1} / ${list.length}</span></div>`}
    <${QuestionCard} q=${q} chill=${chill} onResult=${onResult} onNext=${()=>setI(i+1)} nextLabel=${i+1>=list.length?'Finish':'Next'}/>
    <div class="row"><${Btn} kind="ghost" onClick=${onExit}>Pause and go home<//></div>
  </div>`;
}
function PlayerBar({title, cover, i, n, q}){
  return html`<div class="player"><div class=${'cover sm c-'+cover}></div><div class="ptxt"><div class="ptitle">${subById(q.sub)?.name}</div><div class="partist">${title} · track ${i+1} of ${n}</div>
    <div class="ptrack"><div style=${{width:((i)/n*100)+'%'}}></div></div></div><div class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div>`;
}

/* ---------- HOME ---------- */
function Home({p, go, update}){
  const lv = levelOf(p.xp); const due = dueItems(p).length;
  const nextEp = SUBTOPICS.find(s=>!p.eps[s.id]);
  const hour = new Date().getHours(); const greet = hour<12?'Good morning':hour<18?'Good afternoon':'Good evening';
  const modes = [
    {k:'lawflix', n:'Episodes', s:'Binge the units', d:'Each unit is a season, each section an episode with a cliffhanger.', ic:'clapperboard'},
    {k:'mystery', n:'Case Files', s:'Investigate real cases', d:'Rebuild a prescribed case clue by clue. Predict before each reveal.', ic:'folder-search'},
    {k:'shop', n:'Authority Cart', s:'Pick what the brief needs', d:'Add the sections, cases and facts a client needs. Checkout shows what you missed.', ic:'shopping-bag'},
    {k:'netball', n:'Quick-fire Match', s:'Pass, pass, score', d:'Define, identify, explain, apply. Four right answers score a goal.', ic:'volleyball'},
    {k:'glow', n:'Answer Builder', s:'Layer an exam answer', d:'Issue, rule, exceptions, analysis, authorities, conclusion.', ic:'sparkles'},
    {k:'lawtok', n:'Swipe Cards', s:'Study in short bursts', d:'One card, one challenge, 30–90 seconds.', ic:'smartphone'},
    {k:'playlist', n:'Revision Mixes', s:'Shuffle your knowledge', d:'Warm-ups, case law, exam level and your mistakes.', ic:'list-music'},
  ];
  return html`<div class="home">
    ${COURSE_META.notesLoaded ? html`<div class="notice"><b>Loaded from your UWC notes:</b> ${COURSE_META.loaded.join(' · ')}. Every answer links back to the slide it came from. <button class="linkish" onClick=${()=>go('course')}>What’s included</button></div>` : html`<div class="notice"><b>Course Notes Not Yet Loaded.</b> Demo content only. <button class="linkish" onClick=${()=>go('course')}>How updates work</button></div>`}
    <section class="hero">
      <div class="herotxt"><div class="kicker">${greet}${p.name?', '+p.name:''}</div>
        <h1>Study the law. <em>Play the game.</em> Win the case.</h1>
        <div class="lvl"><span class="lvlname">Level ${lv.L} · ${lv.name}</span><span class="xp">${p.xp} XP</span><div class="bar"><div style=${{width:(lv.into/lv.need*100)+'%'}}></div></div></div>
        <div class="row wrap">
          ${nextEp ? html`<${Btn} kind="primary" big onClick=${()=>go('episode',{sub:nextEp.id})}><${Ic} n="play"/> Continue · Season ${topicById(nextEp.topicId).season}, Ep ${nextEp.ep}<//>` : html`<${Btn} kind="primary" big onClick=${()=>go('lawflix')}>Rewatch a season<//>`}
          <${Btn} big kind="soft" onClick=${()=>go('just5')}><${Ic} n="timer"/> Just 5 minutes<//>
        </div></div>
      <div class="mission">
        <div class="kicker"><${Ic} n="target" s=${15}/> Current mission</div>
        ${due>0 ? html`<h3>${due} question${due>1?'s':''} due for revision</h3><p>Spaced repetition says now is the best moment to recall these.</p><${Btn} kind="primary" onClick=${()=>go('review')}>Start revision<//>`
          : nextEp ? html`<h3>Watch “${nextEp.name}”</h3><p>${topicById(nextEp.topicId).name} · Episode ${nextEp.ep}</p><${Btn} kind="primary" onClick=${()=>go('episode',{sub:nextEp.id})}>Play episode<//>`
          : html`<h3>Everything watched</h3><p>Try Exam Era in the Playlist.</p><${Btn} kind="primary" onClick=${()=>go('playlist')}>Open playlists<//>`}
        <div class="daily"><div><div class="kicker"><${Ic} n="flame" s=${15}/> Daily challenge</div><b>Daily Five · Swipe Cards</b><span class="fine">${p.dailyDone===today()?' · done today':' · 5 cards, about 4 minutes'}</span></div><${Btn} onClick=${()=>go('lawtok',{mode:'daily'})}>${p.dailyDone===today()?'Play again':'Play'}<//></div>
      </div>
    </section>

    <h2 class="sect"><${Ic} n="gamepad-2"/> Choose your game</h2>
    <div class="modes">${modes.map(m=>html`<button class=${'mode m-'+m.k} onClick=${()=>go(m.k)}><span class="mic" aria-hidden="true"><${Ic} n=${m.ic} s=${22}/></span><span class="ms">${m.s}</span><span class="mn">${m.n}</span><span class="md">${m.d}</span></button>`)}</div>

    <div class="split">
      <section><h2 class="sect"><${Ic} n="book-open-text"/> Course library <${Demo}/></h2>
        <div class="lib">${TOPICS.map(t=>{ const m=topicMastery(p,t.id); const subs=SUBTOPICS.filter(s=>s.topicId===t.id); const done=subs.filter(s=>p.eps[s.id]).length;
          return html`<button class=${'libcard l-'+t.look} onClick=${()=>go('season',{topic:t.id})}><span class="kicker">Season ${t.season} · ${done}/${subs.length} episodes</span><b>${t.name}</b><span class="fine">${t.vibe}</span><${MasteryPill} m=${m}/></button>`; })}
          <div class="libcard empty"><span class="kicker">Next units</span><b>More of your course</b><span class="fine">Upload the next unit’s notes and new seasons appear here.</span></div></div></section>
      <section><h2 class="sect"><${Ic} n="rotate-ccw"/> Revision snapshot</h2>
        <div class="snap">
          <div><${Ic} n="circle-help"/><span class="num">${curItems(p).length}</span><span>questions tried</span></div>
          <div><${Ic} n="calendar-clock"/><span class="num">${due}</span><span>due now</span></div>
          <div><${Ic} n="graduation-cap"/><span class="num">${SUBTOPICS.filter(s=>masteryOf(p,s.id)===4).length}</span><span>mastered</span></div>
          <div><${Ic} n="flame"/><span class="num">${streakDays(p)}</span><span>day streak</span></div>
        </div>
        <div class="row wrap"><${Btn} onClick=${()=>go('dashboard')}><${Ic} n="chart-no-axes-column"/> Dashboard<//><${Btn} onClick=${()=>go('cases')}><${Ic} n="scale"/> Cases<//><${Btn} onClick=${()=>go('exam')}><${Ic} n="pen-line"/> Exam practice<//></div>
      </section></div>
  </div>`;
}

/* ---------- LAWFLIX ---------- */
function Lawflix({p, go}){
  return html`<div class="page"><div class="pagehead"><div class="kicker">Episodes</div><h1>Unit 3, as a series</h1><p>Each part of Unit 3 is a season. Each key section of the notes is an episode. Pick one and press play.</p></div>
    ${TOPICS.map(t=>html`<section class="season"><div class="seasonhead"><h2>Season ${t.season}: ${t.name}</h2>${t.status==='demo'&&html`<${Demo}/>`}</div><p class="fine">${t.summary}</p>
      <div class="eprow">${SUBTOPICS.filter(s=>s.topicId===t.id).map(s=>html`<button class=${'epcard l-'+t.look} onClick=${()=>go('episode',{sub:s.id})}>
        <span class="epnum"><${Ic} n="play" s=${14}/> E${s.ep}</span><b>${s.name}</b><span class="fine">${s.episode.coldOpen.slice(0,90)}…</span>
        <span class="eptail">${p.eps[s.id]?html`<${Pill} tone="ok">Watched ${p.eps[s.id].rating?('· '+'★'.repeat(p.eps[s.id].rating)):''}<//>`:html`<${Pill}>New<//>`}<${MasteryPill} m=${masteryOf(p,s.id)}/></span></button>`)}</div></section>`)}
  </div>`;
}
function Season({p, go, topic}){ const t=topicById(topic);
  return html`<div class="page"><div class="pagehead"><div class="kicker">Season ${t.season} <${Demo}/></div><h1>${t.name}</h1><p>${t.summary}</p></div>
    <div class="eprow">${SUBTOPICS.filter(s=>s.topicId===t.id).map(s=>html`<div class=${'epcard static l-'+t.look}><span class="epnum">E${s.ep}</span><b>${s.name}</b>
      <ul class="outcomes">${s.outcomes.map(o=>html`<li>${o}</li>`)}</ul><span class="fine">Source: ${s.source.doc}, ${s.source.loc} · UWC lecture slides</span>
      <div class="row"><${Btn} kind="primary" onClick=${()=>go('episode',{sub:s.id})}>Play<//><${MasteryPill} m=${masteryOf(p,s.id)}/></div></div>`)}</div></div>`;
}

function Episode({p, update, go, sub, chill}){
  const s = subById(sub); const t=topicById(s.topicId);
  const [len, setLen] = useState(chill?'quick':null);
  const qs = qsFor(sub);
  const pickQ = (pred, avoid=[]) => qs.find(q=>pred(q) && !avoid.includes(q.id));
  const steps = useMemo(()=>{ if(!len) return [];
    const predict = pickQ(q=>q.level===1);
    const recall = pickQ(q=>q.level===2 && q.type!=='match' && (!chill || q.type!=='order')) || pickQ(q=>q.level===3);
    const explain = pickQ(q=>q.level===3, recall?[recall.id]:[]);
    const apply = pickQ(q=>q.level===4);
    const used=[predict,recall,explain,apply].filter(Boolean).map(q=>q.id);
    const extra = qs.filter(q=>!used.includes(q.id)).slice(0,2);
    const st=[{k:'cold'}];
    if(predict) st.push({k:'q', q:predict.id, label:'Predict before you learn'});
    if(len==='quick') st.push({k:'learn', cards:[s.episode.learn[0]]}); else st.push({k:'learn', cards:s.episode.learn});
    if(len==='deep') st.push({k:'deep'});
    if(recall) st.push({k:'q', q:recall.id, label:'Active recall'});
    if(len==='deep' && explain) st.push({k:'q', q:explain.id, label:'Explain it simply'});
    if(len!=='quick' && apply) st.push({k:'q', q:apply.id, label:'Final application'});
    if(len==='deep') extra.forEach(q=>st.push({k:'q', q:q.id, label:'Bonus scene'}));
    st.push({k:'end'}); return st; }, [len, sub]);
  const [i, setI] = useState(0); const [score, setScore] = useState({c:0,n:0}); const [rating, setRating] = useState(0);
  useEffect(()=>{ setI(0); setScore({c:0,n:0}); setRating(0); }, [sub, len]);
  const nextSub = SUBTOPICS[SUBTOPICS.findIndex(x=>x.id===sub)+1];

  if(!len) return html`<div class="page narrow"><div class="poster l-${t.look}"><div class="kicker">Season ${t.season} · Episode ${s.ep} <${Demo}/></div><h1>${s.name}</h1><p class="cold">${s.episode.coldOpen}</p></div>
    <h3>How long have you got?</h3><div class="lens">
      ${[['quick','Quick Episode','5 min','Cold open, predict, one key idea, one recall'],['normal','Normal Episode','10 min','Full explanation, recall and an application scene'],['deep','Deep Dive','20 min','Everything, plus misconceptions, cases and bonus scenes']].map(([k,n,m,d])=>html`<button class="lenbtn" onClick=${()=>setLen(k)}><b>${n}</b><span class="pill">${m}</span><span class="fine">${d}</span></button>`)}
    </div></div>`;

  const st = steps[i];
  const adv = () => setI(i+1);
  const bar = html`<div class="epbar"><span>S${t.season}:E${s.ep} · ${s.name}</span><div class="prog"><div style=${{width:(i/(steps.length-1)*100)+'%'}}></div></div></div>`;
  let body;
  if(st.k==='cold') body = html`<div class="scene cold"><div class="kicker">Previously on Lawverse… / cold open</div><p class="coldbig">${s.episode.coldOpen}</p><${Btn} kind="primary" big onClick=${adv}>Roll the episode<//></div>`;
  else if(st.k==='learn') body = html`<div class="scene"><div class="kicker">The law, explained</div>${st.cards.map((c,k)=>html`<div class="learncard"><h3><${Ic} n="lightbulb" s=${18}/> ${c.h}</h3><p>${c.b}</p></div>`)}
     ${len!=='quick' && html`<div class="learncard plain"><h3><${Ic} n="message-circle" s=${18}/> In plain English</h3><p>${s.plain}</p><div class="fine">Authority: ${s.authority}</div></div>`}
     <${Btn} kind="primary" big onClick=${adv}>Got it. Test me<//></div>`;
  else if(st.k==='deep') body = html`<div class="scene"><div class="kicker">Deep dive</div>
     <div class="learncard"><h3>Exact wording</h3><p>${s.definition}</p></div>
     <div class="learncard warn"><h3><${Ic} n="triangle-alert" s=${18}/> Common misconception</h3><p>${s.misconception}</p></div>
     <div class="learncard"><h3>Application example</h3><p>${s.application}</p></div>
     ${s.cases.map(id=>{const c=caseById(id); return html`<div class="learncard case"><h3>${c.short} (${c.court}, ${c.year})</h3><p>${c.ratio}</p><div class="fine">${c.src}</div></div>`;})}
     <${Btn} kind="primary" big onClick=${adv}>Continue<//></div>`;
  else if(st.k==='q') body = html`<div class="scene"><div class="kicker">${st.label}</div><${QuestionCard} q=${qById(st.q)} chill=${chill}
      onResult=${(ok,info)=>{ update(pp=>applyResult(pp,qById(st.q),ok,info)); setScore(sc=>({c:sc.c+(ok?1:0), n:sc.n+1})); }} onNext=${adv}/></div>`;
  else body = html`<div class="scene end"><div class="kicker">Episode complete</div><h2>${score.c}/${score.n} scenes nailed</h2>
     <p>Rate this episode: how clear did it feel?</p>
     <div class="stars">${[1,2,3,4,5].map(n=>html`<button aria-label=${n+' stars'} class=${n<=rating?'on':''} onClick=${()=>{ setRating(n); update(pp=>({...pp, eps:{...pp.eps,[sub]:{done:true, rating:n, at:now()}}, xp:pp.xp+(pp.eps[sub]?0:20)})); }}>★</button>`)}</div>
     ${rating===0 && html`<${Btn} kind="ghost" onClick=${()=>update(pp=>({...pp, eps:{...pp.eps,[sub]:{done:true, rating:0, at:now()}}, xp:pp.xp+(pp.eps[sub]?0:20)}))}>Skip rating, mark watched<//>`}
     <div class="teaser"><div class="kicker">Next time on Lawverse</div><p>${s.episode.teaser}</p></div>
     <div class="row wrap center">${nextSub && html`<${Btn} kind="primary" big onClick=${()=>{ if(!p.eps[sub]) update(pp=>({...pp, eps:{...pp.eps,[sub]:{done:true, rating, at:now()}}, xp:pp.xp+20})); go('episode',{sub:nextSub.id}); }}>Play next episode<//>`}<${Btn} onClick=${()=>{ if(!p.eps[sub]) update(pp=>({...pp, eps:{...pp.eps,[sub]:{done:true, rating, at:now()}}, xp:pp.xp+20})); go('home'); }}>Back home<//></div></div>`;
  return html`<div class="page narrow">${bar}${body}</div>`;
}

/* ---------- MYSTERY ---------- */
function Mystery({p, update, go, chill}){
  const [mid, setMid] = useState(null);
  if(!mid) return html`<div class="page dark-zone"><div class="pagehead"><div class="kicker">Case Files</div><h1>Investigate the prescribed cases</h1><p>Each file rebuilds a real case from the notes, one clue at a time. Answer before the next clue opens, then close the file with an issue–rule–application–conclusion analysis.</p></div>
    <div class="files">${MYSTERIES.map(m=>html`<button class="casefile" onClick=${()=>setMid(m.id)}><span class="kicker">${m.season} <${Demo}/></span><b>${m.title}</b><span class="fine">${m.clues.length} clues · ${p.mysteries[m.id]?.done?'Solved':'Unsolved'}</span></button>`)}
      <div class="casefile locked"><span class="kicker">Locked</span><b>UWC case files</b><span class="fine">Built from your lecture notes once they’re uploaded.</span></div></div></div>`;
  return html`<${MysteryRun} m=${MYSTERIES.find(x=>x.id===mid)} p=${p} update=${update} chill=${chill} onExit=${()=>setMid(null)}/>`;
}
function MysteryRun({m, p, update, chill, onExit}){
  const [ci, setCi] = useState(0); const [picked, setPicked] = useState(null); const [folder, setFolder] = useState([]); const [tries, setTries] = useState(0); const [stage, setStage] = useState('intro');
  const [concl, setConcl] = useState(null);
  const clue = m.clues[ci];
  const answer = i => { setPicked(i); setTries(t=>t+1); if(i===clue.q.ans){ setFolder(f=>[...f, clue.evidence]); update(pp=>({...pp, xp:pp.xp+(tries===0?12:6)})); } };
  const next = () => { setPicked(null); setTries(0); if(ci+1<m.clues.length) setCi(ci+1); else setStage('conclude'); };
  const conclOpts = m.conclusionQ.opts;
  return html`<div class="page dark-zone mystery">
    <div class="mysthead"><div><div class="kicker">${m.season} <${Demo}/></div><h1>${m.title}</h1></div><${Btn} kind="ghost" onClick=${onExit}>Close file<//></div>
    <div class="mystgrid">
      <div class="mystmain">
        ${stage==='intro' && html`<div class="clue"><p class="coldbig">${m.intro}</p><${Btn} kind="primary" big onClick=${()=>setStage('clues')}>Open the first clue<//></div>`}
        ${stage==='clues' && html`<div class="clue" key=${ci}><div class="kicker">${clue.title}</div><p class="cluetxt">${clue.text}</p>
          <h3>${clue.q.prompt}</h3><div class="opts">${clue.q.opts.map((o,i)=>{ const st = picked==null?'':(i===clue.q.ans && picked===i?'right':(i===picked?'wrong':''));
            return html`<button class=${'opt '+st} onClick=${()=>answer(i)} disabled=${picked===clue.q.ans}><span class="L">${'ABCD'[i]}</span><span>${o.t}</span></button>`; })}</div>
          ${picked!=null && picked!==clue.q.ans && html`<div class="fb bad"><div class="fbhead">That lead goes cold.</div><p>${clue.q.opts[picked].w}</p><p class="fine">Think again and pick another answer.</p></div>`}
          ${picked===clue.q.ans && html`<div class="fb good"><div class="fbhead">Evidence secured.</div><p>${clue.q.explain}</p><${Btn} kind="primary" big=${chill} onClick=${next}>${ci+1<m.clues.length?'Next clue':'Close the case'}<//></div>`}</div>`}
        ${stage==='conclude' && html`<div class="clue"><div class="kicker">Final deduction</div><h3>${m.conclusionQ.prompt}</h3>
          <div class="opts">${conclOpts.map((o,i)=>html`<button class=${'opt '+(concl==null?'':(i===m.conclusionQ.ans?'right':(i===concl?'wrong':'dim')))} onClick=${()=>{ if(concl==null){ setConcl(i); update(pp=>({...pp, xp:pp.xp+(i===m.conclusionQ.ans?20:5), mysteries:{...pp.mysteries,[m.id]:{done:true, at:now()}}})); } }} disabled=${concl!=null}><span class="L">${'ABCD'[i]}</span><span>${o}</span></button>`)}</div>
          ${concl!=null && html`<div class="analysis"><div class="kicker">Case closed · structured legal analysis</div>
            <h4>Issue</h4><p>${m.conclusion.issue}</p><h4>Rule</h4><p>${m.conclusion.rule}</p><h4>Application</h4><p>${m.conclusion.application}</p><h4>Conclusion</h4><p>${m.conclusion.conclusion}</p><p class="fine">${m.note}</p>
            <${Btn} kind="primary" onClick=${onExit}>Back to the files<//></div>`}</div>`}
      </div>
      <aside class="folder"><div class="kicker"><${Ic} n="folder-search" s=${15}/> Case folder</div>${folder.length?html`<ul>${folder.map(f=>html`<li>${f}</li>`)}</ul>`:html`<p class="fine">Evidence you secure appears here.</p>`}
        <div class="fine">Clue ${Math.min(ci+1,m.clues.length)} of ${m.clues.length}</div></aside>
    </div></div>`;
}

/* ---------- SHOP ---------- */
function Shop({p, update, go}){
  const [sid, setSid] = useState(null);
  if(!sid) return html`<div class="page"><div class="pagehead"><div class="kicker">Authority Cart</div><h1>Shop for your authorities</h1><p>Each brief is a client problem from Unit 3. Add exactly the sections, cases, principles and facts it needs. Distractors look tempting.</p></div>
    <div class="files">${SHOP.map(s=>html`<button class="shopcard" onClick=${()=>setSid(s.id)}><span class="kicker">Brief <${Demo}/></span><b>${s.title}</b><span class="fine">${s.items.length} items in store${p.shop[s.id]?' · best '+p.shop[s.id].best+' pts':''}</span></button>`)}</div></div>`;
  return html`<${ShopRun} s=${SHOP.find(x=>x.id===sid)} p=${p} update=${update} onExit=${()=>setSid(null)}/>`;
}
function ShopRun({s, p, update, onExit}){
  const [cart, setCart] = useState({}); const [stage, setStage] = useState('shop'); const [why, setWhy] = useState({}); const [cat, setCat] = useState('All');
  const items = useMemo(()=>shuffle(s.items), [s.id]);
  const cats = ['All', ...new Set(s.items.map(x=>x.cat))];
  const inCart = items.filter(x=>cart[x.id]);
  const reasonQs = useMemo(()=> stage==='why' ? shuffle(inCart.filter(x=>x.need)).slice(0,2).map(x=>({item:x, opts:shuffle([x.why, ...shuffle(s.items.filter(o=>o.id!==x.id && o.need)).slice(0,2).map(o=>o.why)])})) : [], [stage]);
  const toggle = id => setCart({...cart, [id]:!cart[id]});
  const calc = () => { const right = items.filter(x=>x.need && cart[x.id]), missing = items.filter(x=>x.need && !cart[x.id]), wrong = items.filter(x=>!x.need && !x.optional && cart[x.id]), opt = items.filter(x=>x.optional && cart[x.id]);
    const reasonPts = reasonQs.filter((r,k)=>r.opts[why[k]]===r.item.why).length; const pts = right.length*10 - wrong.length*5 + reasonPts*8; return {right, missing, wrong, opt, reasonPts, pts, perfect:!missing.length && !wrong.length}; };
  const finishShop = () => { const r=calc(); update(pp=>({...pp, xp:pp.xp+Math.max(0,r.pts), shop:{...pp.shop,[s.id]:{best:Math.max(r.pts, pp.shop[s.id]?.best||0), perfect:r.perfect||pp.shop[s.id]?.perfect}}})); setStage('result'); };
  const checkout = () => { if(inCart.some(x=>x.need)) setStage('why'); else finishShop(); };
  if(stage==='why'){ const done = reasonQs.every((r,k)=>why[k]!=null);
    return html`<div class="page narrow"><div class="kicker">Checkout · justify two items</div><h2>Why is it in your cart?</h2>
      ${reasonQs.length===0 ? html`<p>Nothing to justify. Let’s see the receipt.</p>` : reasonQs.map((r,k)=>html`<div class="qcard"><h3>${r.item.name}</h3><div class="opts">${r.opts.map((o,i)=>{ const st = why[k]==null?'':(o===r.item.why?'right':(why[k]===i?'wrong':'dim'));
        return html`<button class=${'opt '+st} disabled=${why[k]!=null} onClick=${()=>setWhy({...why,[k]:i})}><span class="L">${'ABC'[i]}</span><span>${o}</span></button>`; })}</div></div>`)}
      <${Btn} kind="primary" big disabled=${!done && reasonQs.length>0} onClick=${finishShop}>See my receipt<//></div>`; }
  if(stage==='result'){ const r=calc(); const {right, missing, wrong, opt, reasonPts, pts} = r;
    return html`<div class="page narrow"><div class="receipt"><div class="kicker">Receipt · ${s.title}</div><div class="bigscore">${pts}<span> pts</span></div>
      <p class="fine">${right.length*10} for correct items · −${wrong.length*5} for wrong items · ${reasonPts*8} for reasoning</p>
      <h4>✓ Correctly selected</h4>${right.length?right.map(x=>html`<div class="rline ok"><b>${x.name}</b><span>${x.why}</span></div>`):html`<p class="fine">None.</p>`}
      ${missing.length>0 && html`<h4>○ Missing from your cart</h4>${missing.map(x=>html`<div class="rline miss"><b>${x.name}</b><span>${x.why}</span></div>`)}`}
      ${wrong.length>0 && html`<h4>✕ Shouldn’t be in your cart</h4>${wrong.map(x=>html`<div class="rline bad"><b>${x.name}</b><span>${x.why}</span></div>`)}`}
      ${opt.length>0 && html`<h4>~ Optional extras</h4>${opt.map(x=>html`<div class="rline"><b>${x.name}</b><span>${x.why}</span></div>`)}`}
      <div class="row wrap"><${Btn} kind="primary" onClick=${()=>{ setCart({}); setWhy({}); setStage('shop'); }}>Shop again<//><${Btn} onClick=${onExit}>Other briefs<//></div></div></div>`;
  }
  return html`<div class="page shopgrid">
    <div class="shopmain"><div class="kicker">Brief <${Demo}/></div><h2>${s.title}</h2><p class="brief">${s.brief}</p>
      <div class="tabs">${cats.map(c=>html`<button class=${c===cat?'on':''} onClick=${()=>setCat(c)}>${c}</button>`)}</div>
      <div class="products">${items.filter(x=>cat==='All'||x.cat===cat).map(x=>html`<div class=${'product'+(cart[x.id]?' incart':'')}><span class="tag">${x.cat}</span><b>${x.name}</b><${Btn} kind=${cart[x.id]?'soft':'primary'} onClick=${()=>toggle(x.id)}>${cart[x.id]?'Remove':'Add to cart'}<//></div>`)}</div></div>
    <aside class="cart"><div class="kicker"><${Ic} n="shopping-bag" s=${15}/> Your cart · ${inCart.length}</div>${inCart.length?html`<ul>${inCart.map(x=>html`<li><span>${x.name}</span><button aria-label=${'Remove '+x.name} onClick=${()=>toggle(x.id)}>×</button></li>`)}</ul>`:html`<p class="fine">Empty. Browse the store.</p>`}
      <${Btn} kind="primary" big disabled=${!inCart.length} onClick=${checkout}>Checkout<//><${Btn} kind="ghost" onClick=${onExit}>Leave store<//></aside></div>`;
}

/* ---------- NETBALL ---------- */
const TEAMS = ['Lilac Lynx','Cape Moonlight','Blush Falcons','Velvet Voltage','Midnight Mavericks','Coral Comets'];
const PHASES = [
  {k:'cp', name:'Centre Pass', task:'Recall a definition', pick:q=>q.level<=2 && ['recall','fill','mcq','tf'].includes(q.type)},
  {k:'wa', name:'Wing Attack', task:'Identify the legal principle', pick:q=>q.level<=2 && ['mcq','tf','match'].includes(q.type)},
  {k:'ga', name:'Goal Attack', task:'Explain the rule', pick:q=>q.level>=2 && q.level<=3},
  {k:'gs', name:'Goal Shooter', task:'Apply the law to a scenario', pick:q=>q.level>=4},
];
function Netball({p, update, chill}){
  const [setup, setSetup] = useState({team:TEAMS[0], opp:TEAMS[1], len:5, timed:false});
  const [match, setMatch] = useState(null);
  if(!match) return html`<div class="page"><div class="pagehead"><div class="kicker">Quick-fire Match</div><h1>Pass, pass, score</h1><p>Move the ball through four passes: define, identify, explain, apply. Miss one and you get the explanation and a recovery ball. Mistakes never cost points.</p></div>
    <div class="court-setup">
      <label>Your team<select id="nb-team" value=${setup.team} onChange=${e=>setSetup({...setup, team:e.target.value})}>${TEAMS.map(t=>html`<option>${t}</option>`)}</select></label>
      <label>Opponent<select id="nb-opp" value=${setup.opp} onChange=${e=>setSetup({...setup, opp:e.target.value})}>${TEAMS.filter(t=>t!==setup.team).map(t=>html`<option>${t}</option>`)}</select></label>
      <div class="lens">${[[0,'Practice match','Untimed, play until you stop'],[5,'Five-question match','Quick game'],[10,'Ten-question championship','The full final']].map(([n,a,b])=>html`<button class=${'lenbtn'+(setup.len===n?' on':'')} onClick=${()=>setSetup({...setup,len:n})}><b>${a}</b><span class="fine">${b}</span></button>`)}</div>
      ${!chill && html`<label class="chk"><input type="checkbox" id="nb-timed" checked=${setup.timed} onChange=${e=>setSetup({...setup,timed:e.target.checked})}/><span>Shot clock (60 s per pass, no penalty if it runs out)</span></label>`}
      <${Btn} kind="primary" big onClick=${()=>setMatch({...setup, timed:setup.timed&&!chill})}>Start the match<//>
      <p class="fine">Season record: ${p.netball.matches} matches · ${p.netball.goals} goals</p></div></div>`;
  return html`<${NetballMatch} cfg=${match} p=${p} update=${update} chill=${chill} onExit=${()=>setMatch(null)}/>`;
}
function NetballMatch({cfg, p, update, chill, onExit}){
  const [phase, setPhase] = useState(0); const [goals, setGoals] = useState(0); const [asked, setAsked] = useState(0); const [recovery, setRecovery] = useState(null);
  const [log, setLog] = useState([]); const [msg, setMsg] = useState('Centre pass. Ball is live.'); const used = useRef(new Set());
  const [over, setOver] = useState(false); const [clock, setClock] = useState(60);
  const pickFor = (ph, easy) => { const pool = Q.filter(q=>(easy? q.level===1 : PHASES[ph].pick(q)) && (!chill || q.type!=='order')); let c = pool.filter(q=>!used.current.has(q.id)); if(!c.length) c=pool; const due=c.filter(q=>p.items[q.id]?.lastWrong); const q=(due.length?shuffle(due):shuffle(c))[0]; used.current.add(q.id); return q; };
  const [cur, setCur] = useState(()=>pickFor(0));
  useEffect(()=>{ if(!cfg.timed) return; setClock(60); const t=setInterval(()=>setClock(c=>c>0?c-1:0),1000); return ()=>clearInterval(t); }, [cur.id, cfg.timed]);
  const onResult = (ok, info) => { update(pp=>applyResult(pp,cur,ok,info)); setLog(l=>[...l,{id:cur.id, c:ok, ph:recovery?'Recovery':PHASES[phase].name}]); };
  const next = ok => {
    const n = asked + (recovery?0:1);
    if(recovery){ setRecovery(null); setMsg(ok?'Possession regained. Play on from where you were.':'Turnover. No points lost: restart with a centre pass.'); if(!ok) setPhase(0); }
    else if(ok){ if(phase===3){ setGoals(g=>g+1); setMsg('GOAL! Back to the centre.'); update(pp=>({...pp, xp:pp.xp+15, netball:{...pp.netball, goals:pp.netball.goals+1}})); setPhase(0); } else { setMsg(PHASES[phase+1].name+' has the ball.'); setPhase(phase+1); } }
    else { const rq = pickFor(0,true); setAsked(n); setRecovery(true); setMsg('Intercepted! Read the explanation, then win the ball back.'); setCur(rq); return; }
    setAsked(n);
    if(cfg.len && n>=cfg.len){ setOver(true); update(pp=>({...pp, netball:{...pp.netball, matches:pp.netball.matches+1, best:Math.max(pp.netball.best, goals)}})); return; }
    setCur(pickFor(recovery? phase : (ok&&phase<3? phase+1 : 0)));
  };
  if(over){ const bySub={}; log.forEach(x=>{ const sname=subById(qById(x.id).sub).name; bySub[sname]=bySub[sname]||{c:0,n:0}; bySub[sname].n++; if(x.c) bySub[sname].c++; });
    const strong=Object.entries(bySub).filter(([k,v])=>v.c===v.n), weak=Object.entries(bySub).filter(([k,v])=>v.c<v.n);
    return html`<div class="page narrow"><div class="receipt"><div class="kicker">Full time</div><h2>${cfg.team} ${goals} – 0 ${cfg.opp}</h2><p class="fine">The opponent never scores here: mistakes cost possession, not points.</p>
      <h4>Strengths</h4>${strong.length?strong.map(([k])=>html`<div class="rline ok"><b>${k}</b></div>`):html`<p class="fine">Keep playing to build some.</p>`}
      <h4>Work on</h4>${weak.length?weak.map(([k,v])=>html`<div class="rline miss"><b>${k}</b><span>${v.c}/${v.n} correct</span></div>`):html`<p class="fine">Nothing. Clean match.</p>`}
      <div class="row wrap"><${Btn} kind="primary" onClick=${onExit}>New match<//></div></div></div>`; }
  return html`<div class="page netball">
    <div class="scoreboard"><div><span class="team">${cfg.team}</span><span class="gs">${goals}</span></div><div class="vs">${cfg.len?('Pass '+Math.min(asked+1,cfg.len)+' / '+cfg.len):'Practice'}${cfg.timed?html` · <span class=${clock<10?'low':''}>${clock}s</span>`:''}</div><div><span class="gs">0</span><span class="team">${cfg.opp}</span></div></div>
    <div class="court" aria-label=${'Ball at '+(recovery?'recovery':PHASES[phase].name)}>${PHASES.map((ph,k)=>html`<div class=${'zone'+(k===phase?' here':'')+(k<phase?' passed':'')}><span>${ph.name}</span><small>${ph.task}</small>${k===phase&&html`<i class="ball" aria-hidden="true"></i>`}</div>`)}<div class="ring" aria-hidden="true"></div></div>
    <p class="commentary">${msg}</p>
    <div class="kicker">${recovery?'Recovery ball':PHASES[phase].name+' · '+PHASES[phase].task}</div>
    <${QuestionCard} q=${cur} chill=${chill} onResult=${onResult} onNext=${next} nextLabel=${recovery?'Play on':'Pass the ball'}/>
    <div class="row"><${Btn} kind="ghost" onClick=${()=>{ if(log.length) update(pp=>({...pp, netball:{...pp.netball, matches:pp.netball.matches+1}})); setOver(true); }}>End match<//></div></div>`;
}

/* ---------- GLOW-UP ---------- */
function Glow({p, update, chill}){
  const g = GLOWUP[0];
  const [st, setSt] = useState(0); const [sel, setSel] = useState({primer:null, foundation:{}, concealer:{}, highlight:{}, contour:[], final:''});
  const [checked, setChecked] = useState({}); const [submitted, setSubmitted] = useState({});
  const contourPool = useMemo(()=>shuffle(g.contour.items.map((t,i)=>({t,i}))),[]);
  const finishGlow = () => { update(pp=>({...pp, xp:pp.xp+(pp.glow[g.id]?.done?5:30), glow:{...pp.glow, [g.id]:{done:true, at:now()}}})); setSt(6); };
  const stages = ['Issue','Rule','Exceptions','Analysis','Authorities','Conclusion'];
  const legal = ['Layer 1','Layer 2','Layer 3','Layer 4','Layer 5','Layer 6'];
  const multi = (key, data) => html`<div class="opts">${data.opts.map((o,i)=>{ const on=sel[key][i]; const s=submitted[key]; const cls = s ? (o.ok? (on?'right':'miss') : (on?'wrong':'dim')) : (on?'sel':'');
     return html`<button class=${'opt '+cls} disabled=${s} onClick=${()=>setSel({...sel,[key]:{...sel[key],[i]:!on}})}><span class="L">${on?'✓':'+'}</span><span>${o.t}</span></button>`; })}</div>
     ${!submitted[key] ? html`<${Btn} kind="primary" onClick=${()=>setSubmitted({...submitted,[key]:true})} disabled=${!Object.values(sel[key]).some(Boolean)}>Apply<//>`
       : html`<div class="fb ${data.opts.every((o,i)=>!!sel[key][i]===o.ok)?'good':'bad'}"><p>${data.opts.every((o,i)=>!!sel[key][i]===o.ok)?'Flawless layer.':'Green = needed. Faded = not needed. Red = should not be there.'}</p></div><${Btn} kind="primary" onClick=${()=>setSt(st+1)}>Next layer<//>`}`;
  let body;
  if(st===0) body = html`<div><h3>${g.primer.prompt}</h3><div class="opts">${g.primer.opts.map((o,i)=>{ const s=sel.primer!=null; const cls = s?(i===g.primer.ans?'right':(i===sel.primer?'wrong':'dim')):'';
      return html`<button class=${'opt '+cls} disabled=${s} onClick=${()=>setSel({...sel, primer:i})}><span class="L">${'ABCD'[i]}</span><span>${o}</span></button>`; })}</div>
      ${sel.primer!=null && html`<div class=${'fb '+(sel.primer===g.primer.ans?'good':'bad')}><p>${sel.primer===g.primer.ans?g.primer.why:g.primer.whyWrong}</p></div><${Btn} kind="primary" onClick=${()=>setSt(1)}>Next layer<//>`}</div>`;
  else if(st===1) body = html`<div><h3>${g.foundation.prompt}</h3>${multi('foundation', g.foundation)}</div>`;
  else if(st===2) body = html`<div><h3>${g.concealer.prompt}</h3>${multi('concealer', g.concealer)}</div>`;
  else if(st===3){ const done=sel.contour.length===contourPool.length, s=submitted.contour;
    body = html`<div><h3>${g.contour.prompt}</h3><div class="chips">${contourPool.filter(x=>!sel.contour.includes(x)).map(x=>html`<button class="chip" disabled=${s} onClick=${()=>setSel({...sel, contour:[...sel.contour,x]})}>${x.t}</button>`)}</div>
      <ol class="seq">${sel.contour.map((x,k)=>html`<li class=${s?(x.i===k?'ok':'bad'):''}>${x.t}</li>`)}</ol>
      ${!s ? html`<div class="row"><${Btn} onClick=${()=>setSel({...sel, contour:sel.contour.slice(0,-1)})} disabled=${!sel.contour.length}>Undo<//><${Btn} kind="primary" disabled=${!done} onClick=${()=>setSubmitted({...submitted, contour:true})}>Blend<//></div>`
        : html`<div class="fb ${sel.contour.every((x,k)=>x.i===k)?'good':'bad'}"><p>${g.contour.why}</p></div><${Btn} kind="primary" onClick=${()=>setSt(4)}>Next layer<//>`}</div>`; }
  else if(st===4) body = html`<div><h3>${g.highlight.prompt}</h3>${multi('highlight', g.highlight)}</div>`;
  else if(st===5) body = html`<div><h3>Final Look: write your conclusion in one or two sentences.</h3>
     ${chill ? html`<p class="hint">Chill Mode: say your conclusion out loud, then tap below.</p><${Btn} kind="primary" big onClick=${()=>{ setSel({...sel, final:'(said out loud)'}); finishGlow(); }}>I’ve said it<//>`
       : html`<textarea id="glow-final" rows="3" value=${sel.final} onInput=${e=>setSel({...sel, final:e.target.value})} placeholder="Therefore…"></textarea><${Btn} kind="primary" disabled=${sel.final.trim().length<10} onClick=${finishGlow}>Finish the look<//>`}</div>`;
  else { const pick=(key,data)=>data.opts.filter((o,i)=>sel[key][i]).map(o=>o.t);
    const missing=[]; if(sel.primer!==g.primer.ans) missing.push('Restate the issue: '+g.primer.opts[g.primer.ans]);
    g.foundation.opts.forEach((o,i)=>{ if(o.ok && !sel.foundation[i]) missing.push('Rule missing: '+o.t); if(!o.ok && sel.foundation[i]) missing.push('Remove from rule: '+o.t); });
    g.highlight.opts.forEach((o,i)=>{ if(o.ok && !sel.highlight[i]) missing.push('Cite: '+o.t); if(!o.ok && sel.highlight[i]) missing.push('Irrelevant authority: '+o.t); });
    if(!sel.contour.every((x,k)=>x.i===k)) missing.push('Reorder the analysis so each step builds on the last.');
    const score=Object.values(checked).filter(Boolean).length;

    body = html`<div class="glowresult"><div class="two-col">
      <div class="answerdoc"><div class="kicker">Your assembled answer</div>
        <h4>Issue</h4><p>${g.primer.opts[sel.primer]}</p><h4>Rule</h4><ul>${pick('foundation',g.foundation).map(t=>html`<li>${t}</li>`)}</ul>
        <h4>Exceptions & weaknesses addressed</h4><ul>${pick('concealer',g.concealer).map(t=>html`<li>${t}</li>`)}</ul>
        <h4>Analysis (in your order)</h4><ol>${sel.contour.map(x=>html`<li>${x.t}</li>`)}</ol><h4>Authorities</h4><ul>${pick('highlight',g.highlight).map(t=>html`<li>${t}</li>`)}</ul>
        <h4>Conclusion</h4><p>${sel.final}</p></div>
      <div class="answerdoc model"><div class="kicker">Model answer <${Demo}/></div><div class="pre">${g.model}</div></div></div>
      ${missing.length>0 && html`<div class="fb bad"><div class="fbhead">Targeted advice</div><ul>${missing.map(m=>html`<li>${m}</li>`)}</ul></div>`}
      <div class="rubric"><div class="kicker">Marking rubric · self-mark against the model</div>${g.rubric.map((r,i)=>html`<label class="chk"><input type="checkbox" id=${'rub-'+i} checked=${!!checked[i]} onChange=${e=>setChecked({...checked,[i]:e.target.checked})}/><span>${r}</span></label>`)}
        <p><b>${score} / ${g.rubric.length}</b> rubric points (self-marked, not auto-graded).</p></div>
      <${Btn} kind="primary" onClick=${()=>{ setSt(0); setSel({primer:null, foundation:{}, concealer:{}, highlight:{}, contour:[], final:''}); setSubmitted({}); setChecked({}); }}>Do another look<//></div>`; }
  return html`<div class="page"><div class="pagehead"><div class="kicker">Answer Builder</div><h1>${g.title}</h1><p>Build an exam answer one layer at a time, then compare it with a model answer written from the notes (${g.source}).</p></div>
    <div class="problem"><b>Problem:</b> ${g.problem}</div>
    <div class="stages">${stages.map((n,k)=>html`<div class=${'stage'+(k===st?' on':'')+(k<st?' done':'')}><b>${n}</b><span>${legal[k]}</span></div>`)}</div>
    <div class="glowbody">${body}</div></div>`;
}

/* ---------- LAWTOK ---------- */
function LawTok({p, update, chill, mode:startMode}){
  const [mode, setMode] = useState(startMode||null); const [topic, setTopic] = useState(TOPICS[0].id);
  const [feed, setFeed] = useState(null); const [i, setI] = useState(0); const [log, setLog] = useState([]); const [answered, setAnswered] = useState(false);
  const build = (m) => { let qs;
    if(m==='daily') qs = shuffle(Q.filter(q=>q.type!=='order')).slice(0,5);
    else if(m==='mistakes') qs = shuffle(wrongItems(p)).slice(0,10);
    else if(m==='topic') qs = shuffle(Q.filter(q=>subById(q.sub).topicId===topic)).slice(0,8);
    else qs = shuffle(Q).slice(0,8);
    const cards=[]; const taught=new Set();
    qs.forEach(q=>{ if(m!=='daily' && m!=='mistakes' && !taught.has(q.sub) && Math.random()<0.5){ taught.add(q.sub); cards.push({teach:q.sub}); } cards.push({q:q.id}); });
    setFeed(cards); setI(0); setLog([]); setAnswered(false); setMode(m); };
  useEffect(()=>{ if(startMode) build(startMode); }, []);
  const touch = useRef(null);
  if(!feed) return html`<div class="page"><div class="pagehead"><div class="kicker">Swipe Cards</div><h1>Study in short bursts</h1><p>One card, one challenge. Answers stay hidden until you try. Every feed ends with a summary.</p></div>
    <div class="feedpick">
      <button class="lenbtn" onClick=${()=>build('daily')}><b>Daily Five</b><span class="fine">Five cards. ${p.dailyDone===today()?'Done today.':'Not done yet today.'}</span></button>
      <button class="lenbtn" onClick=${()=>build('mixed')}><b>Mixed revision</b><span class="fine">Shuffle across every topic</span></button>
      <button class="lenbtn" onClick=${()=>build('mistakes')} disabled=${!wrongItems(p).length}><b>Mistakes only</b><span class="fine">${wrongItems(p).length} card${wrongItems(p).length===1?'':'s'} waiting</span></button>
      <div class="lenbtn"><b>Topic feed</b><select id="tok-topic" value=${topic} onChange=${e=>setTopic(e.target.value)}>${TOPICS.map(t=>html`<option value=${t.id}>${t.name}</option>`)}</select><${Btn} kind="primary" onClick=${()=>build('topic')}>Start<//></div>
    </div></div>`;
  if(i>=feed.length){ const c=log.filter(x=>x.c).length;
    return html`<div class="page narrow"><div class="tokend"><div class="kicker">That’s the feed. Time for a break.</div><div class="bigscore">${c}<span>/${log.length}</span></div>
      <h3>What you practised</h3><ul>${[...new Set(log.map(x=>subById(qById(x.id).sub).name))].map(n=>html`<li>${n}</li>`)}</ul>
      ${log.some(x=>!x.c) && html`<p>Missed cards are in your Mistakes feed and come back tomorrow.</p>`}
      <div class="row wrap center"><${Btn} kind="primary" onClick=${()=>setFeed(null)}>Pick another feed<//></div></div></div>`; }
  const card = feed[i];
  const canNext = card.teach || answered;
  const goNext = () => { if(canNext){ if(i+1>=feed.length && mode==='daily' && p.dailyDone!==today()) update(pp=>({...pp, dailyDone:today(), xp:pp.xp+15})); setI(i+1); setAnswered(false); } };
  return html`<div class="page tokwrap">
    <div class="tokphone" onTouchStart=${e=>touch.current=e.touches[0].clientY} onTouchEnd=${e=>{ const d=touch.current-e.changedTouches[0].clientY; if(d>60) goNext(); }}>
      <div class="tokprog">${feed.map((_,k)=>html`<i class=${k<i?'done':k===i?'on':''}></i>`)}</div>
      <div class="tokcard" key=${i}>
        ${card.teach ? (()=>{ const s=subById(card.teach); return html`<div class="teach"><div class="kicker">Learn · 20 seconds</div><h2>${s.name}</h2><p class="big">${s.plain}</p><p class="fine">${s.authority}</p></div>`; })()
          : html`<${QuestionCard} q=${qById(card.q)} chill=${chill} compact onResult=${(ok,info)=>{ update(pp=>applyResult(pp,qById(card.q),ok,info)); setLog(l=>[...l,{id:card.q,c:ok}]); setAnswered(true); }}/>`}
      </div>
      <div class="tokfoot"><span class="fine">${i+1} / ${feed.length}</span><${Btn} kind="primary" big=${chill} disabled=${!canNext} onClick=${goNext}>${canNext?'Next ↑':'Answer to continue'}<//></div>
    </div>
    <div class="row center"><${Btn} kind="ghost" onClick=${()=>setFeed(null)}>Stop here<//></div></div>`;
}

/* ---------- PLAYLIST ---------- */
function Playlist({p, update, chill}){
  const [pl, setPl] = useState(null); const [play, setPlay] = useState(null); const [shuf, setShuf] = useState(true);
  const tracks = l => l.special==='seen' ? Q.filter(q=>p.items[q.id]) : l.special==='wrong' ? wrongItems(p) : Q.filter(l.filter);
  if(play) return html`<div class="page narrow"><${Session} key=${play.key} title=${play.l.name} kicker="Now playing" queue=${play.q} p=${p} update=${update} chill=${chill} player cover=${play.l.cover} onExit=${()=>setPlay(null)}/></div>`;
  if(pl){ const t=tracks(pl);
    return html`<div class="page narrow"><div class="plhead"><div class=${'cover c-'+pl.cover}></div><div><div class="kicker">Mix</div><h1>${pl.name}</h1><p>${pl.mood} · ${t.length} tracks</p>
      <div class="row wrap"><${Btn} kind="primary" big disabled=${!t.length} onClick=${()=>setPlay({l:pl, key:now(), q:(shuf?shuffle(t):t).map(q=>q.id).slice(0,12)})}>▶ Play<//>
      <label class="chk"><input type="checkbox" id="pl-shuffle" checked=${shuf} onChange=${e=>setShuf(e.target.checked)}/><span>Shuffle</span></label></div>
      <p class="fine">Missed tracks repeat later in the same session (repeat-missed is always on).</p></div></div>
      <ol class="tracks">${t.map((q,k)=>html`<li><span class="tn">${k+1}</span><span class="tt"><b>${subById(q.sub).name}</b><span class="fine">${TYPE_LABEL[q.type]} · ${LEVELS[q.level]}</span></span><span class="fine">${p.items[q.id]?(p.items[q.id].lastWrong?'missed':'played'):''}</span></li>`)}</ol>
      ${!t.length && html`<p>No tracks yet. ${pl.special==='wrong'?'Nothing answered wrong so far.':'Answer a few questions first.'}</p>`}
      <${Btn} kind="ghost" onClick=${()=>setPl(null)}>All playlists<//></div>`; }
  return html`<div class="page"><div class="pagehead"><div class="kicker">Revision Mixes</div><h1>Shuffle your knowledge</h1><p>Pick a mix. Each track is a question from Unit 3.</p></div>
    <div class="playlists">${PLAYLISTS.map(l=>html`<button class="plcard" onClick=${()=>setPl(l)}><div class=${'cover c-'+l.cover}><span>${l.name}</span></div><b>${l.name}</b><span class="fine">${l.mood} · ${tracks(l).length} tracks</span></button>`)}</div></div>`;
}

/* ---------- DASHBOARD ---------- */
function Dashboard({p, go}){
  const lv=levelOf(p.xp); const due=dueItems(p);
  const rows=SUBTOPICS.map(s=>({s, st:subStats(p,s.id), m:masteryOf(p,s.id)}));
  const weak=rows.filter(r=>r.st.n>=2 && r.st.acc<0.6), strong=rows.filter(r=>r.st.n>=3 && r.st.acc>=0.8);
  const upcoming = Q.filter(q=>p.items[q.id] && p.items[q.id].due>now()).sort((a,b)=>p.items[a.id].due-p.items[b.id].due).slice(0,5);
  const totalN=curItems(p).reduce((a,i)=>a+i.n,0), totalC=curItems(p).reduce((a,i)=>a+i.c,0);
  return html`<div class="page"><div class="pagehead"><div class="kicker">Your progress</div><h1>Dashboard</h1></div>
    <div class="kpis">
      <div><${Ic} n="trophy"/><span class="num">${lv.L}</span><span>Level · ${lv.name}</span></div><div><${Ic} n="award"/><span class="num">${p.xp}</span><span>XP</span></div>
      <div><${Ic} n="circle-help"/><span class="num">${totalN}</span><span>answers given</span></div><div><${Ic} n="target"/><span class="num">${totalN?Math.round(totalC/totalN*100):0}%</span><span>overall accuracy</span></div>
      <div><${Ic} n="clapperboard"/><span class="num">${epsDone(p)}/${SUBTOPICS.length}</span><span>episodes watched</span></div><div><${Ic} n="calendar-clock"/><span class="num">${due.length}</span><span>revision due</span></div>
    </div>
    <div class="split">
      <section><h2 class="sect">Mastery by topic <${Demo}/></h2>
        ${TOPICS.map(t=>html`<div class="mtopic"><div class="mth"><b>${t.name}</b><${MasteryPill} m=${topicMastery(p,t.id)}/></div>
          ${rows.filter(r=>r.s.topicId===t.id).map(r=>html`<div class="mrow2"><span>${r.s.name}</span><div class="accbar" title=${Math.round(r.st.acc*100)+'%'}><div style=${{width:(r.st.acc*100)+'%'}}></div></div><span class="fine tab">${r.st.n?Math.round(r.st.acc*100)+'%':'–'}</span><${MasteryPill} m=${r.m}/></div>`)}</div>`)}
        <p class="fine">Mastered requires a correct independent recall AND a correct application question, with at least 75% accuracy. Multiple choice alone never reaches Mastered.</p></section>
      <section><h2 class="sect">Revision</h2>
        <div class="card"><b>${due.length} due now</b><p class="fine">Schedule: ${p.srs.join(' → ')} days, then doubling. Wrong answers reset to ${p.srs[0]} day.</p><${Btn} kind="primary" disabled=${!due.length} onClick=${()=>go('review')}>Review due<//>
          ${upcoming.length>0 && html`<h4>Coming up</h4><ul class="plain">${upcoming.map(q=>html`<li>${subById(q.sub).name} <span class="fine">· ${new Date(p.items[q.id].due).toLocaleDateString()}</span></li>`)}</ul>`}</div>
        <div class="card"><b>Weak topics</b>${weak.length?html`<ul class="plain">${weak.map(r=>html`<li>${r.s.name} <span class="fine">${Math.round(r.st.acc*100)}%</span></li>`)}</ul>`:html`<p class="fine">None flagged yet.</p>`}
          <b>Strong topics</b>${strong.length?html`<ul class="plain">${strong.map(r=>html`<li>${r.s.name}</li>`)}</ul>`:html`<p class="fine">Answer 3+ questions in a subtopic at 80%.</p>`}</div>
        <div class="card"><b>Badges</b><div class="badges">${BADGES.map(b=>html`<div class=${'badge'+(p.badges[b.id]?' got':'')} title=${b.desc}><span>${p.badges[b.id]?'✦':'◇'}</span><b>${b.name}</b><small>${b.desc}</small></div>`)}</div></div>
      </section></div></div>`;
}

/* ---------- CASE DETECTIVE ---------- */
function Cases({p, update, chill}){
  const [open, setOpen] = useState(null); const [game, setGame] = useState(null);
  const withFacts = CASES.filter(x=>!/^Not set out/.test(x.facts));
  const startGame = () => { const c = shuffle(withFacts)[0]; setGame({c, opts:shuffle([c.short, ...shuffle(CASES.filter(x=>x.id!==c.id)).slice(0,3).map(x=>x.short)]), pick:null, reveal:false}); };
  return html`<div class="page"><div class="pagehead"><div class="kicker">Case Law Detective</div><h1>Prescribed cases · Unit 3</h1><p>Every case cited in the Unit 3 notes, with what the notes say about it. Where the notes don’t give the facts or ruling, that is stated rather than filled in.</p></div>
    <div class="card detective">${!game ? html`<b>Detective round</b><p class="fine">You get the facts. Name the case, then recall its principle before the reveal.</p><${Btn} kind="primary" onClick=${startGame}>Start a round<//>`
      : html`<div class="kicker">The facts</div><p>${game.c.facts}</p><h3>Which case is this?</h3><div class="opts">${game.opts.map((o,i)=>{ const st= game.pick==null?'':(o===game.c.short?'right':(i===game.pick?'wrong':'dim'));
          return html`<button class=${'opt '+st} disabled=${game.pick!=null} onClick=${()=>{ setGame({...game, pick:i}); update(pp=>({...pp, xp:pp.xp+(o===game.c.short?8:2)})); }}><span class="L">${'ABCD'[i]}</span><span>${o}</span></button>`; })}</div>
        ${game.pick!=null && !game.reveal && html`<p class="hint">Now, from memory: what principle is this case authority for? Think it, then reveal.</p><${Btn} kind="primary" onClick=${()=>setGame({...game, reveal:true})}>Reveal the principle<//>`}
        ${game.reveal && html`<div class="fb good"><p><b>${game.c.short}:</b> ${game.c.ratio}</p><p class="fine">${game.c.src}</p></div><${Btn} onClick=${startGame}>Next case<//>`}`}</div>
    <div class="caselist">${CASES.map(c=>html`<div class="casecard"><button class="casehead" onClick=${()=>setOpen(open===c.id?null:c.id)} aria-expanded=${open===c.id}><b>${c.short}</b><span class="fine">${c.court} · ${c.year}</span></button>
      ${open===c.id && html`<dl><dt>Full name</dt><dd>${c.name}</dd><dt>Key facts</dt><dd>${c.facts}</dd><dt>Issue</dt><dd>${c.issue}</dd><dt>Ruling</dt><dd>${c.ruling}</dd><dt>Principle</dt><dd>${c.ratio}</dd><dt>Relevance</dt><dd>${c.relevance}</dd><dt>Source</dt><dd class="fine">${c.src}</dd></dl>`}</div>`)}</div></div>`;
}

/* ---------- EXAM ---------- */
function Exam({p, update, chill}){
  const [cur, setCur] = useState(null); const [text, setText] = useState(''); const [rev, setRev] = useState(false); const [ticks, setTicks] = useState({});
  if(!cur) return html`<div class="page"><div class="pagehead"><div class="kicker">Exam practice</div><h1>Exam mode</h1><p>Practice questions written from the Unit 3 slides, each with a marking memo. They are not UWC past-paper questions, and the mark allocations are suggestions because no assessment information was included.</p></div>
    <div class="files">${EXAM.map(e=>html`<button class="shopcard" onClick=${()=>{ setCur(e); setText(''); setRev(false); setTicks({}); }}><span class="kicker">${e.kind} · ${e.marks} marks</span><b>${e.q}</b></button>`)}</div></div>`;
  const got=Object.values(ticks).filter(Boolean).length;
  return html`<div class="page narrow"><div class="kicker">${cur.kind} · ${cur.marks} marks <${Demo}/></div><h2>${cur.q}</h2>
    ${!rev ? html`${chill?html`<p class="hint">Chill Mode: plan your answer out loud, point by point, then reveal.</p>`:html`<textarea id="exam-ans" rows="10" value=${text} onInput=${e=>setText(e.target.value)} placeholder="Write your answer as you would in the exam…"></textarea>`}
      <${Btn} kind="primary" big disabled=${!chill && text.trim().length<20} onClick=${()=>setRev(true)}>Submit and see memo<//>`
     : html`<div class="model"><div class="lbl">Marking memorandum · tick the points your answer made (1 mark each)</div>${cur.memo.map((m,i)=>html`<label class="chk"><input type="checkbox" id=${'memo-'+i} checked=${!!ticks[i]} onChange=${e=>setTicks({...ticks,[i]:e.target.checked})}/><span>${m}</span></label>`)}
        <p><b>${Math.min(got,cur.marks)} / ${cur.marks}</b> (self-marked)</p>${text && html`<div class="mine"><div class="lbl">Your answer</div><p class="pre">${text}</p></div>`}</div>
       <div class="row wrap"><${Btn} kind="primary" onClick=${()=>{ update(pp=>({...pp, xp:pp.xp+got*3})); setCur(null); }}>Done<//></div>`}
    <${Btn} kind="ghost" onClick=${()=>setCur(null)}>All questions<//></div>`;
}

/* ---------- SETTINGS / COURSE ---------- */
function Settings({p, update, sync, toast}){
  const [name, setName] = useState(p.name); const [srs, setSrs] = useState(p.srs.join(', ')); const [imp, setImp] = useState(''); const [confirm, setConfirm] = useState(false); const [exp, setExp] = useState('');
  return html`<div class="page narrow"><div class="pagehead"><div class="kicker">Make it yours</div><h1>Settings</h1></div>
    <div class="card"><label class="field">Your name<input id="set-name" value=${name} onInput=${e=>setName(e.target.value)} placeholder="What should Lawverse call you?"/></label><${Btn} onClick=${()=>{ update(pp=>({...pp, name:name.trim()})); toast('Saved'); }}>Save name<//></div>
    <div class="card"><b>Theme</b><div class="row wrap">${[['auto','Match my device'],['light','Lilac (light)'],['dark','Upside (dark mystery)']].map(([k,l])=>html`<${Btn} kind=${p.look===k?'primary':''} onClick=${()=>update(pp=>({...pp, look:k}))}>${l}<//>`)}</div>
      <label class="chk"><input type="checkbox" id="set-chill" checked=${p.chill} onChange=${e=>update(pp=>({...pp, chill:e.target.checked}))}/><span>Chill Mode: big buttons, no typing, no timers, short sessions</span></label></div>
    <div class="card"><label class="field">Spaced-repetition steps (days)<input id="set-srs" value=${srs} onInput=${e=>setSrs(e.target.value)}/></label><p class="fine">After each correct recall the gap grows through these steps, then doubles. A wrong answer goes back to the first step.</p>
      <${Btn} onClick=${()=>{ const a=srs.split(/[ ,]+/).map(Number).filter(n=>n>0&&n<366); if(a.length){ update(pp=>({...pp, srs:a})); toast('Schedule updated'); } else toast('Use numbers like 1, 3, 7'); }}>Save schedule<//></div>
    <div class="card"><b>Progress backup</b><p class="fine">${sync==='cloud'?'Progress is saved to your Claude account for this page, plus this browser.':'Progress is saved in this browser only. Use export to keep a copy.'}</p>
      <div class="row wrap"><${Btn} onClick=${()=>setExp(JSON.stringify(p))}>Export progress<//>${exp && html`<${Btn} onClick=${()=>{ try{ navigator.clipboard.writeText(exp).then(()=>toast('Copied'),()=>toast('Select the text and copy it')); }catch(e){ toast('Select the text and copy it'); } }}>Copy<//>`}</div>
      ${exp && html`<textarea id="exp-box" rows="3" readonly value=${exp} onFocus=${e=>e.target.select()}></textarea>`}
      <label class="field">Import progress<textarea id="imp-box" rows="3" value=${imp} onInput=${e=>setImp(e.target.value)} placeholder="Paste exported progress here"></textarea></label>
      <${Btn} disabled=${!imp.trim()} onClick=${()=>{ try{ const d=JSON.parse(imp); if(!d.items) throw 0; update(()=>({...BLANK(), ...d})); setImp(''); toast('Progress imported'); }catch(e){ toast('That doesn’t look like Lawverse progress'); } }}>Import<//></div>
    <div class="card danger"><b>Reset</b><p class="fine">Deletes all XP, answers and badges.</p>${!confirm?html`<${Btn} onClick=${()=>setConfirm(true)}>Reset progress…<//>`:html`<div class="row wrap"><${Btn} kind="danger" onClick=${()=>{ update(pp=>({...BLANK(), name:pp.name, look:pp.look})); setConfirm(false); toast('Progress reset'); }}>Yes, reset everything<//><${Btn} onClick=${()=>setConfirm(false)}>Cancel<//></div>`}</div>
  </div>`;
}
function Course(){
  const nq = sub => Q.filter(q=>q.sub===sub).length;
  return html`<div class="page narrow"><div class="pagehead"><div class="kicker">Course content</div><h1>What’s in Lawverse</h1></div>
    <div class="card"><b>Loaded from your UWC notes</b><ul class="plain">${TOPICS.map(t=>html`<li><b>Season ${t.season}: ${t.name}</b> <span class="fine">${t.vibe}</span>
      <ul class="plain">${SUBTOPICS.filter(s=>s.topicId===t.id).map(s=>html`<li>Episode ${s.ep}: ${s.name} <span class="fine">· ${s.source.doc}, ${s.source.loc} · ${nq(s.id)} questions</span></li>`)}</ul></li>`)}</ul>
      <p class="fine">${Q.length} questions, ${CASES.length} cases, ${MYSTERIES.length} case files, ${SHOP.length} cart briefs, ${GLOWUP.length} answer builder and ${EXAM.length} exam questions. Every answer shows the slide it came from. Plain-English lines restate the slides and add no new law.</p></div>
    <div class="card"><b>Worth checking with your lecturer</b><p class="fine">Things in the notes that look unclear or inconsistent. The game shows them as written and avoids testing the unclear parts.</p>
      <ul class="plain">${REVIEW_FLAGS.map(f=>html`<li><b>${f.where}</b><br/><span class="fine">${f.note}</span></li>`)}</ul></div>
    <div class="card"><b>Adding more units</b><p>Upload the next unit’s notes in the Claude conversation and ask for Lawverse to be updated. New seasons are added alongside Unit 3, and progress is kept because it is stored per question.</p>
      <b>Update log</b><ul class="plain">${COURSE_META.log.map(l=>html`<li><span class="fine">${l.date}</span> ${l.note}</li>`)}</ul></div></div>`;
}

/* ---------- JUST 5 ---------- */
function Just5({p, update, go}){
  const queue = useMemo(()=>{ const due=shuffle(dueItems(p)); const fresh=shuffle(Q.filter(q=>!p.items[q.id] && ['mcq','tf','recall','fill','match'].includes(q.type))); return [...due, ...fresh, ...shuffle(Q)].map(q=>q.id).filter((v,i,a)=>a.indexOf(v)===i).slice(0,5); }, []);
  return html`<div class="page narrow chillzone"><${Session} title="Just 5 Minutes" kicker="Chill session · no timers" queue=${queue} p=${p} update=${update} chill=${true} onExit=${()=>go('home')}/></div>`;
}

/* ---------- APP SHELL ---------- */
class Boundary extends React.Component{ constructor(p){ super(p); this.state={err:null}; }
  static getDerivedStateFromError(err){ return {err}; }
  render(){ if(this.state.err) return html`<div class="panel center"><h2>That scene glitched.</h2><p class="fine">Your progress is saved. Go back home and carry on.</p><button class="btn primary" onClick=${()=>{ this.setState({err:null}); this.props.onHome(); }}>Back home</button></div>`; return this.props.children; } }
const NAV = [{k:'home', l:'Home', ic:'house'},{k:'lawflix', l:'Episodes', ic:'clapperboard'},{k:'dashboard', l:'Progress', ic:'chart-no-axes-column'},{k:'cases', l:'Cases', ic:'scale'},{k:'settings', l:'Settings', ic:'settings'}];
function App(){
  const [p, update, sync] = useProgress();
  const [route, setRoute] = useState({v:'home', a:{}});
  const [toastMsg, setToast] = useState(''); const tt=useRef(0);
  const toast = m => { setToast(m); clearTimeout(tt.current); tt.current=setTimeout(()=>setToast(''),2200); };
  const go = (v, a={}) => { setRoute({v, a, k:now()}); try{ window.scrollTo({top:0, behavior:'smooth'}); }catch(e){} };
  const lastBadges = useRef(Object.keys(p.badges).length);
  useEffect(()=>{ const n=Object.keys(p.badges).length; if(n>lastBadges.current){ const e=(p.events||[]).filter(x=>x.t==='badge').slice(-1)[0]; const b=e&&BADGES.find(x=>x.id===e.id); if(b) toast('Badge unlocked: '+b.name); } lastBadges.current=n; }, [p.badges]);
  useEffect(()=>{ const r=document.documentElement; r.classList.toggle('look-light', p.look==='light'); r.classList.toggle('look-dark', p.look==='dark'); r.classList.toggle('chill', !!p.chill); }, [p.look, p.chill]);
  const chill = !!p.chill; const {v, a} = route;
  const views = {
    home: ()=>html`<${Home} p=${p} go=${go} update=${update}/>`,
    lawflix: ()=>html`<${Lawflix} p=${p} go=${go}/>`,
    season: ()=>html`<${Season} p=${p} go=${go} topic=${a.topic}/>`,
    episode: ()=>html`<${Episode} key=${a.sub} p=${p} update=${update} go=${go} sub=${a.sub} chill=${chill}/>`,
    mystery: ()=>html`<${Mystery} p=${p} update=${update} go=${go} chill=${chill}/>`,
    shop: ()=>html`<${Shop} p=${p} update=${update} go=${go}/>`,
    netball: ()=>html`<${Netball} p=${p} update=${update} chill=${chill}/>`,
    glow: ()=>html`<${Glow} p=${p} update=${update} chill=${chill}/>`,
    lawtok: ()=>html`<${LawTok} key=${route.k} p=${p} update=${update} chill=${chill} mode=${a.mode}/>`,
    playlist: ()=>html`<${Playlist} p=${p} update=${update} chill=${chill}/>`,
    dashboard: ()=>html`<${Dashboard} p=${p} go=${go}/>`,
    cases: ()=>html`<${Cases} p=${p} update=${update} chill=${chill}/>`,
    exam: ()=>html`<${Exam} p=${p} update=${update} chill=${chill}/>`,
    settings: ()=>html`<${Settings} p=${p} update=${update} sync=${sync} toast=${toast}/>`,
    course: ()=>html`<${Course}/>`,
    review: ()=>html`<div class="page narrow"><${Session} key=${route.k} title="Spaced revision" kicker="Due today" queue=${shuffle(dueItems(p)).map(q=>q.id)} p=${p} update=${update} chill=${chill} onExit=${()=>go('home')}/></div>`,
    just5: ()=>html`<${Just5} key=${route.k} p=${p} update=${update} go=${go}/>`,
  };
  return html`<div class="app">
    <header class="top"><button class="brand" onClick=${()=>go('home')} aria-label="Lawverse home"><span class="logo" aria-hidden="true">L</span><span><b>LAWVERSE</b><small>The PIL Diaries</small></span></button>
      <nav class="nav">${NAV.map(({k,l,ic})=>html`<button class=${v===k?'on':''} onClick=${()=>go(k)}><${Ic} n=${ic} s=${17}/>${l}</button>`)}</nav>
      <div class="tools"><button class=${'chillbtn'+(chill?' on':'')} onClick=${()=>{ update(pp=>({...pp, chill:!pp.chill})); toast(chill?'Chill Mode off':'Chill Mode on: no timers, no typing'); }} aria-pressed=${chill}><${Ic} n="moon" s=${16}/> ${chill?'Chill on':'Chill'}</button>
        <button class="lookbtn" onClick=${()=>update(pp=>({...pp, look: pp.look==='dark'?'light':'dark'}))} aria-label="Toggle light or dark theme"><${Ic} n=${p.look==='dark'?'sun':'moon-star'} s=${17}/></button>
        <span class="xpchip"><${Ic} n="award" s=${15}/> ${p.xp} XP</span></div></header>
    <main><${Boundary} key=${route.k||v} onHome=${()=>go('home')}>${(views[v]||views.home)()}<//></main>
    <nav class="bottomnav">${NAV.map(({k,l,ic})=>html`<button class=${v===k?'on':''} onClick=${()=>go(k)}><${Ic} n=${ic}/><span>${l}</span></button>`)}</nav>
    <${Toast} msg=${toastMsg}/>
  </div>`;
}

ReactDOM.createRoot(document.getElementById('root')).render(html`<${App}/>`);
