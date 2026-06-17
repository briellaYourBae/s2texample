/* ─────────────────────────────────
   StatusBar.jsx — Phone Status Bar
   ───────────────────────────────── */

window.StatusBar = () => (
  <div className="flex justify-between items-center px-6 pt-3 pb-1 text-white text-xs font-semibold relative z-10">
    <span>9:41</span>
    <span style={{ width: 120 }} />
    <span className="flex gap-1 items-center text-[11px]">
      {/* Signal bars */}
      <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
        <rect x="0" y="4" width="3" height="6" rx="1"/>
        <rect x="4" y="2" width="3" height="8" rx="1"/>
        <rect x="8" y="0" width="3" height="10" rx="1"/>
      </svg>
      {/* WiFi */}
      <svg width="14" height="10" viewBox="0 0 16 12" fill="white">
        <path d="M8 2C5.2 2 2.8 3.1 1 5l1.5 1.5C3.9 5.2 5.8 4 8 4s4.1 1.2 5.5 2.5L15 5c-1.8-1.9-4.2-3-7-3z"/>
        <path d="M8 6c-1.7 0-3.2.7-4.3 1.8L5 9.1C5.8 8.4 6.8 8 8 8s2.2.4 3 1.1l1.3-1.3C11.2 6.7 9.7 6 8 6z"/>
        <circle cx="8" cy="11" r="1.5"/>
      </svg>
      <span>100%</span>
    </span>
  </div>
);
