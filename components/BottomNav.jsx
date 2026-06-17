/* ─────────────────────────────────────────
   BottomNav.jsx — Bottom Navigation Tabs
   ───────────────────────────────────────── */

window.BottomNav = ({ active, onNav }) => {
  const tabs = [
    { id: 'home',    label: 'Home',    icon: <IconHome  size={20} /> },
    { id: 'voice',   label: 'Voice',   icon: <IconMic   size={20} /> },
    { id: 'image',   label: 'Image',   icon: <IconImage size={20} /> },
    { id: 'profile', label: 'Profile', icon: <IconUser  size={20} /> },
  ];

  return (
    <div
      className="flex justify-center gap-2 p-3"
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onNav(t.id)}
          className={`flex-1 py-2 rounded-xl flex flex-col items-center gap-1 text-[11px] font-medium
            transition-all cursor-pointer border-none outline-none
            ${active === t.id
              ? 'text-[#d166ff] bg-[rgba(180,60,255,0.12)]'
              : 'text-[#888] bg-transparent hover:text-[#d166ff]'
            }`}
        >
          {t.icon}
          {t.label}
        </button>
      ))}
    </div>
  );
};
