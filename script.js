/* Vanilla JS extracted from index.html (no React/Vue). */

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let currentTab = 'home';
let modalConfirmFn = null;

// Page state
const state = {
  voiceListening: false,
  voiceMuted: false,
  voiceTranscript: 'Ucapkan sesuatu untuk memulai...',
  imagePrompt: '',
  imageGenerating: false,
  imageStyle: 'Realistis',
  images: [
    { id:1, title:'Gradien Abstrak Halus', date:'Hari ini, 09:41', grad:'linear-gradient(135deg,#2563eb 0%,#7c3aed 40%,#ec4899 70%,#9333ea 100%)' },
    { id:2, title:'Langit Kota Neon', date:'Kemarin, 18:05', grad:'linear-gradient(135deg,#1d4ed8,#7c3aed)' },
    { id:3, title:'Nebula Kosmik', date:'19 Jan, 22:11', grad:'linear-gradient(135deg,#4c1d95,#ec4899,#f97316)' },
  ],
  videoNotified: false,
  profilePrefs: { dark:true, notif:true, save:false },
  settingsState: { dark:true, notif:true, save:false, sfx:true, haptics:true, autoplay:false, analytics:false, biometric:false, sync:true },
  favorites: [
    {id:1,title:'Gradien Abstrak Halus',type:'Image',date:'Hari ini', grad:'linear-gradient(135deg,#7c3aed,#ec4899)'},
    {id:2,title:'Langit Kota Neon',type:'Image',date:'20 Jan',grad:'linear-gradient(135deg,#1d4ed8,#7c3aed)'},
    {id:3,title:'Nebula Kosmik',type:'Image',date:'18 Jan',grad:'linear-gradient(135deg,#0f172a,#4c1d95,#ec4899)'},
    {id:4,title:'Sesi Suara #14',type:'Voice',date:'Kemarin',dur:'2 mnt'},
    {id:5,title:'Senja Samudra',type:'Image',date:'15 Jan',grad:'linear-gradient(135deg,#0369a1,#f59e0b)'},
    {id:6,title:'Sesi Suara #9',type:'Voice',date:'14 Jan',dur:'5 mnt'},
    {id:7,title:'Hutan Berkabut',type:'Image',date:'12 Jan',grad:'linear-gradient(135deg,#14532d,#0f172a)'},
  ],
  favFilter: 'Semua',
  history: [
    {id:1,title:'Gradien Abstrak Halus',type:'Image',date:'Hari ini, 09:41',grad:'linear-gradient(135deg,#7c3aed,#ec4899)'},
    {id:2,title:'Sesi Suara #14',type:'Voice',date:'Hari ini, 08:15',dur:'2 mnt'},
    {id:3,title:'Langit Kota Neon',type:'Image',date:'Kemarin, 18:05',grad:'linear-gradient(135deg,#1d4ed8,#7c3aed)'},
    {id:4,title:'Sesi Suara #13',type:'Voice',date:'Kemarin, 14:30',dur:'7 mnt'},
    {id:5,title:'Ledakan Nebula',type:'Image',date:'19 Jan, 22:11',grad:'linear-gradient(135deg,#4c1d95,#ec4899,#f97316)'},
    {id:6,title:'Energi 3D Minimal',type:'Image',date:'18 Jan, 16:44',grad:'linear-gradient(135deg,#0f172a,#0369a1,#7c3aed)'},
    {id:7,title:'Sesi Suara #12',type:'Voice',date:'17 Jan, 20:00',dur:'4 mnt'},
    {id:8,title:'Senja Samudra',type:'Image',date:'15 Jan, 11:20',grad:'linear-gradient(135deg,#0369a1,#f59e0b)'},
    {id:9,title:'Kota Cyberpunk',type:'Image',date:'13 Jan, 23:15',grad:'linear-gradient(135deg,#1e1b4b,#7c3aed,#ec4899)'},
    {id:10,title:'Sesi Suara #11',type:'Voice',date:'12 Jan, 09:00',dur:'3 mnt'},
  ],
  histFilter: 'Semua',
  histSearch: '',
  mygen: [
    {id:1,title:'Gradien Abstrak Halus',type:'Image',date:'Hari ini',grad:'linear-gradient(135deg,#7c3aed,#ec4899)'},
    {id:2,title:'Langit Kota Neon',type:'Image',date:'20 Jan',grad:'linear-gradient(135deg,#1d4ed8,#7c3aed)'},
    {id:3,title:'Ledakan Nebula',type:'Image',date:'19 Jan',grad:'linear-gradient(135deg,#4c1d95,#ec4899,#f97316)'},
    {id:4,title:'Energi 3D Minimal',type:'Image',date:'18 Jan',grad:'linear-gradient(135deg,#0f172a,#0369a1,#7c3aed)'},
    {id:5,title:'Senja Samudra',type:'Image',date:'15 Jan',grad:'linear-gradient(135deg,#0369a1,#f59e0b)'},
    {id:6,title:'Kota Cyberpunk',type:'Image',date:'13 Jan',grad:'linear-gradient(135deg,#1e1b4b,#7c3aed,#ec4899)'},
    {id:7,title:'Sesi Suara #14',type:'Voice',date:'Hari ini',dur:'2 mnt'},
    {id:8,title:'Sesi Suara #13',type:'Voice',date:'Kemarin',dur:'7 mnt'},
    {id:9,title:'Sesi Suara #12',type:'Voice',date:'17 Jan',dur:'4 mnt'},
  ],
  mygenFilter: 'Semua',
  mygenStarred: {1:true,2:true,8:true},
  helpSearch: '',
  openFaq: null,
};

// ═══════════════════════════════════════
// TOAST
// ═══════════════════════════════════════
function toast(msg, type='info', dur=2800) {
  const colors = {
    info:    { bg:'rgba(147,51,234,.9)',  b:'rgba(180,60,255,.5)',  icon:'ℹ️' },
    success: { bg:'rgba(34,197,94,.9)',   b:'rgba(34,197,94,.5)',   icon:'✓' },
    warn:    { bg:'rgba(234,179,8,.9)',   b:'rgba(234,179,8,.5)',   icon:'⚠️' },
    error:   { bg:'rgba(239,68,68,.9)',   b:'rgba(239,68,68,.5)',   icon:'✕' },
  };
  const c = colors[type] || colors.info;
  const el = document.createElement('div');
  el.className = 'toast-item';
  el.style.cssText = `background:${c.bg};border:1px solid ${c.b}`;
  el.innerHTML = `<span>${c.icon}</span><span>${msg}</span>`;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => el.remove(), dur);
}

// ═══════════════════════════════════════
// MODAL
// ═══════════════════════════════════════
function showModal(cfg) {
  document.getElementById('modal-icon').textContent = cfg.icon || '';
  document.getElementById('modal-title').textContent = cfg.title || '';
  document.getElementById('modal-body').textContent = cfg.body || '';
  document.getElementById('modal-confirm-btn').textContent = cfg.confirmText || 'OK';

  const cancelBtn = document.getElementById('modal-cancel-btn');
  cancelBtn.style.display = cfg.cancel === false ? 'none' : 'block';

  modalConfirmFn = cfg.onConfirm || null;
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  modalConfirmFn = null;
}
function modalConfirm() {
  if (modalConfirmFn) modalConfirmFn();
  closeModal();
}

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
const PAGE_NAMES = {
  home:'Beranda', voice:'Asisten Suara', image:'Buat Gambar', video:'Buat Video',
  profile:'Profil Saya', settings:'Pengaturan', favorites:'Favorit',
  history:'Riwayat', mygen:'Generasiku', help:'Bantuan',
};

function navigate(tab) {
  currentTab = tab;

  const title = document.getElementById('desk-page-title');
  if (title) title.textContent = PAGE_NAMES[tab] || 'Beranda';

  document.querySelectorAll('[data-desk-nav]').forEach(el => {
    el.classList.toggle('active', el.dataset.deskNav === tab);
  });
  document.querySelectorAll('[data-mob-nav]').forEach(el => {
    el.classList.toggle('active', el.dataset.mobNav === tab);
  });

  document.querySelectorAll('.bnav-btn').forEach(el => {
    const t = el.dataset.bnav;
    el.style.color = t === tab ? '#d166ff' : '#555';
  });

  const html = renderPage(tab);
  const mobileContent = document.getElementById('page-content-mobile');
  const desktopContent = document.getElementById('page-content-desktop');
  if (mobileContent) mobileContent.innerHTML = html;
  if (desktopContent) desktopContent.innerHTML = html;

  const sm = document.getElementById('scr-mobile');
  const sd = document.getElementById('scr-desk');
  if (sm) sm.scrollTop = 0;
  if (sd) sd.scrollTop = 0;

  attachPageEvents(tab);
}

function openMobileSidebar() {
  document.getElementById('mobile-sidebar-overlay').classList.add('open');
  document.getElementById('mobile-sidebar-panel').classList.add('open');
}
function closeMobileSidebar() {
  document.getElementById('mobile-sidebar-overlay').classList.remove('open');
  document.getElementById('mobile-sidebar-panel').classList.remove('open');
}

// ═══════════════════════════════════════
// SVG ICONS HELPERS
// ═══════════════════════════════════════
const svg = (d, s=20, c='currentColor', sw=2, fill='none') =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill}" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

const icons = {
  mic: (s=20,c='currentColor') => svg(`<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>`,s,c),
  img: (s=20,c='currentColor') => svg(`<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>`,s,c),
  vid: (s=20,c='currentColor') => svg(`<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>`,s,c),
  star: (s=20,c='currentColor',fill='none') => svg(`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,s,c,2,fill),
  dl: (s=18,c='#aaa') => svg(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,s,c),
  share: (s=18,c='#aaa') => svg(`<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>`,s,c),
  trash: (s=18,c='#f87171') => svg(`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>`,s,c),
  back: (s=16,c='currentColor') => svg(`<polyline points="15 18 9 12 15 6"/>`,s,c,2.5),
  arrowUR: (s=14,c='white') => svg(`<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>`,s,c,2.5),
  chevD: (s=14,c='#555',open=false) => svg(open?`<polyline points="18 15 12 9 6 15"/>`:`<polyline points="6 9 12 15 18 9"/>`,s,c),
  chevR: (s=14,c='#444') => svg(`<polyline points="9 18 15 12 9 6"/>`,s,c),
  edit: (s=16,c='#aaa') => svg(`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`,s,c),
  muteOff: (s=20,c='#aaa') => svg(`<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`,s,c),
  lock: (s=18,c='#aaa') => svg(`<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,s,c),
  bell: (s=20,c='#aaa') => svg(`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>`,s,c),
  moon: (s=18,c='#aaa') => svg(`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`,s,c),
  sun: (s=18,c='#aaa') => svg(`<circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M12 20v2M12 2v2"/>`,s,c),
  truck: (s=18,c='#aaa') => svg(`<rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>`,s,c),
  chat: (s=20,c='#aaa') => svg(`<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 0 2 2z"/>`,s,c),
  search: (s=15,c='#555') => svg(`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,s,c),
};

// ═══════════════════════════════════════
// HTML BUILDERS
// ═══════════════════════════════════════
function avatar(init='MN', size=84) {
  const fs = Math.round(size * 0.33);
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:linear-gradient(135deg,#9333ea,#ec4899,#3b82f6);padding:3px;flex-shrink:0">
    <div style="width:100%;height:100%;border-radius:50%;background:#1e1e2e;display:flex;align-items:center;justify-content:center;font-size:${fs}px;font-weight:700;color:#fff">${init}</div>
  </div>`;
}

function badge(text, c='#d166ff', bg='rgba(180,60,255,.15)', b='rgba(180,60,255,.3)') {
  return `<span style="padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;background:${bg};color:${c};border:1px solid ${b};white-space:nowrap">${text}</span>`;
}

function togHTML(id, on) {
  return `<button class="tog${on?' on':''}" onclick="toggleSetting('${id}')" id="tog-${id}"></button>`;
}

function waveBars() {
  const bars = [{h:16,d:'0s'},{h:28,d:'0.1s'},{h:20,d:'0.2s'},{h:36,d:'0.3s'},{h:24,d:'0.15s'},{h:14,d:'0.05s'},{h:30,d:'0.25s'}];
  return `<div style="display:flex;align-items:center;gap:3px;height:40px;margin:12px 0">
    ${bars.map(b=>`<div class="wave-bar" style="height:${b.h}px;animation:wv 1s ease-in-out ${b.d} infinite"></div>`).join('')}
  </div>`;
}

function orbHTML(size=180) {
  return `<div class="orb" style="width:${size}px;height:${size}px">
    <div style="position:absolute;inset:0;border-radius:50%" class="orbshim"></div>
  </div>`;
}

function backHeader(title, rightHTML='') {
  return `<div style="display:flex;align-items:center;justify-content:space-between;padding:16px 0 20px">
    <button onclick="navigate('home')" style="display:flex;align-items:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:8px 12px;color:#aaa">${icons.back()}</button>
    <span style="color:#fff;font-size:15px;font-weight:600">${title}</span>
    ${rightHTML || '<div style="width:40px"></div>'}
  </div>`;
}

function filterTabs(items, cur, onClickFn) {
  return `<div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
    ${items.map(f=>`<button class="filter-tab${cur===f?' active':''}" onclick="${onClickFn}('${f}')">${f}</button>`).join('')}
  </div>`;
}

function searchBar(id, ph='Cari...') {
  return `<div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:9px 14px;display:flex;align-items:center;gap:8px;margin-bottom:12px">
    ${icons.search()}<input id="${id}" placeholder="${ph}" style="flex:1;font-size:13px">
  </div>`;
}

function srow(icon, label, sub, rightHTML, last=false, onclick='') {
  return `<div class="srow${onclick?' srow-clickable':''}" ${onclick?`onclick="${onclick}"`:''}>
    <div style="display:flex;align-items:center;gap:10px">
      ${icon?`<span style="color:#666;display:flex">${icon}</span>`:''}
      <div>
        <div style="color:#ddd;font-size:13px;font-weight:500">${label}</div>
        ${sub?`<div style="color:#555;font-size:11px;margin-top:2px">${sub}</div>`:''}
      </div>
    </div>
    ${rightHTML}
  </div>`;
}

// ═══════════════════════════════════════
// PAGE RENDERS
// ═══════════════════════════════════════
function renderPage(tab) {
  switch(tab) {
    case 'home':      return renderHome();
    case 'voice':     return renderVoice();
    case 'image':     return renderImage();
    case 'video':     return renderVideo();
    case 'profile':   return renderProfile();
    case 'settings':  return renderSettings();
    case 'favorites': return renderFavorites();
    case 'history':   return renderHistory();
    case 'mygen':     return renderMyGen();
    case 'help':      return renderHelp();
    default:          return renderHome();
  }
}

// --- Renders ---
function renderHome(){/* content moved from index.html remains unchanged in functionality */
  return window.__O2N_RENDER_HOME__();
}
function renderVoice(){return window.__O2N_RENDER_VOICE__();}
function renderImage(){return window.__O2N_RENDER_IMAGE__();}
function renderVideo(){return window.__O2N_RENDER_VIDEO__();}
function renderProfile(){return window.__O2N_RENDER_PROFILE__();}
function renderSettings(){return window.__O2N_RENDER_SETTINGS__();}
function renderFavorites(){return window.__O2N_RENDER_FAVORITES__();}
function renderHistory(){return window.__O2N_RENDER_HISTORY__();}
function renderMyGen(){return window.__O2N_RENDER_MYGEN__();}
function renderHelp(){return window.__O2N_RENDER_HELP__();}

// ═══════════════════════════════════════
// EVENTS / ACTIONS (helpers that other inline onclick rely on)
// ═══════════════════════════════════════
function attachPageEvents(tab) {
  if (tab === 'image') {
    const inp = document.getElementById('image-prompt-input');
    if (inp) {
      inp.addEventListener('input', e => { state.imagePrompt = e.target.value; updateGenBtn(); });
      inp.addEventListener('keydown', e => {
        if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();generateImage();}
      });
    }
  }
  if (tab === 'history') {
    const inp = document.getElementById('hist-search');
    if (inp) {
      inp.value = state.histSearch;
      inp.addEventListener('input', e => { state.histSearch = e.target.value; navigate('history'); });
    }
  }
  if (tab === 'help') {
    const inp = document.getElementById('help-search');
    if (inp) {
      inp.value = state.helpSearch;
      inp.addEventListener('input', e => { state.helpSearch = e.target.value; navigate('help'); });
    }
  }
}

function updateGenBtn() {
  const btn = document.getElementById('gen-btn');
  if (!btn) return;
  const disabled = state.imageGenerating || !state.imagePrompt.trim();
  btn.style.opacity = disabled ? '0.4' : '1';
  btn.style.background = disabled ? 'rgba(255,255,255,.08)' : 'linear-gradient(135deg,#9333ea,#ec4899)';
}

function toggleVoiceMute() {
  state.voiceMuted = !state.voiceMuted;
  toast(state.voiceMuted?'Mikrofon dibisukan':'Mikrofon aktif', state.voiceMuted?'warn':'success');
  navigate('voice');
}
function tapVoiceMic() {
  if (state.voiceListening) return;
  if (state.voiceMuted) { toast('Mikrofon sedang dibisukan','warn'); return; }
  state.voiceListening = true;
  state.voiceTranscript = 'Mendengarkan suaramu...';
  navigate('voice');
  setTimeout(() => {
    state.voiceListening = false;
    state.voiceTranscript = 'Abstrak gradien halus dengan bentuk organik mengalir, memadukan ungu tua, violet, biru elektrik dan merah muda lembut...';
    navigate('voice');
  }, 3000);
}
function selectVoicePrompt(s) {
  state.voiceTranscript = s;
  toast('Prompt dipilih!','success');
  navigate('voice');
}

function setImageStyle(s) {
  state.imageStyle = s;
  toast(`Style: ${s}`,'info');
  navigate('image');
}
function generateImage() {
  if (!state.imagePrompt.trim() || state.imageGenerating) return;
  state.imageGenerating = true;
  navigate('image');
  setTimeout(() => {
    const h1 = Math.floor(Math.random()*360), h2 = (h1+120)%360;
    state.images.unshift({ id:Date.now(), title:state.imagePrompt.slice(0,28), date:'Baru saja', grad:`linear-gradient(135deg,hsl(${h1},70%,30%),hsl(${h2},80%,50%))` });
    toast('Gambar berhasil dibuat! ✨','success');
    state.imagePrompt = '';
    state.imageGenerating = false;
    navigate('image');
  }, 2000);
}

function toggleVideoNotify() {
  state.videoNotified = !state.videoNotified;
  if (state.videoNotified) toast('Notifikasi aktif! Kami akan memberitahu kamu.','success');
  navigate('video');
}

function toggleSetting(key) {
  if (key.startsWith('prof-')) {
    const k = key.replace('prof-','');
    state.profilePrefs[k] = !state.profilePrefs[k];
    const el = document.getElementById('tog-'+key);
    if (el) el.classList.toggle('on', state.profilePrefs[k]);
    return;
  }
  state.settingsState[key] = !state.settingsState[key];
  const el = document.getElementById('tog-'+key);
  if (el) el.classList.toggle('on', state.settingsState[key]);
}

function setFavFilter(f) { state.favFilter = f; navigate('favorites'); }
function removeFavorite(id) { state.favorites = state.favorites.filter(f=>f.id!==id); navigate('favorites'); }

function setHistFilter(f) { state.histFilter = f; navigate('history'); }
function deleteHistoryItem(id, title) {
  showModal({ icon:'🗑️', title:'Hapus item ini?', body:`"${title}" akan dihapus dari riwayat.`, confirmText:'Hapus',
    onConfirm:()=>{ state.history=state.history.filter(x=>x.id!==id); toast('Item dihapus','success'); navigate('history'); }
  });
}
function confirmDeleteAllHistory() {
  showModal({ icon:'🗑️', title:'Hapus Semua Riwayat?', body:'Semua riwayat akan dihapus permanen.', confirmText:'Hapus Semua',
    onConfirm:()=>{ state.history=[]; toast('Semua riwayat dihapus','success'); navigate('history'); }
  });
}

function setMygenFilter(f) { state.mygenFilter = f; navigate('mygen'); }
function toggleMygenStar(id) { state.mygenStarred[id] = !state.mygenStarred[id]; navigate('mygen'); }

function toggleFaq(i) { state.openFaq = state.openFaq === i ? null : i; navigate('help'); }

// Generic functions referenced by inline onclick handlers
function favFilter(f) { setFavFilter(f); }
function histFilter(f) { setHistFilter(f); }
function mygenFilter(f) { setMygenFilter(f); }

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
navigate('home');

