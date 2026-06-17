/* ───────────────────────────────────────────────
   Sidebar.jsx — Slide-in Navigation Sidebar
   ─────────────────────────────────────────────── */

window.Sidebar = ({ open, onClose, onNav }) => {
  const NavItem = ({ label, icon, tab, badge = null, active = false }) => (
    <div
      className={`flex items-center gap-3 px-5 py-3 cursor-pointer rounded-xl mx-3 my-[2px] text-sm font-medium transition-all
        ${active
          ? 'bg-[rgba(180,60,255,0.15)] text-[#d166ff]'
          : 'text-[#aaa] hover:bg-[rgba(180,60,255,0.1)] hover:text-[#d166ff]'
        }`}
      onClick={() => { if (tab) { onClose(); onNav(tab); } }}
    >
      {icon}
      <span>{label}</span>
      {badge && <span className="ml-auto">{badge}</span>}
    </div>
  );

  const SectionLabel = ({ text }) => (
    <div className="px-5 py-1 text-[10px] font-semibold text-[#444] uppercase tracking-widest mt-2">
      {text}
    </div>
  );

  const Divider = () => (
    <div className="h-px bg-white/[0.06] mx-5 my-3" />
  );

  return (
    <>
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-50 transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.6)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
        }}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div
        className="sidebar-panel absolute top-0 left-0 bottom-0 z-[60] flex flex-col pb-6 overflow-y-auto"
        style={{
          width: 280,
          background: '#16161f',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {/* Profile header */}
        <div className="px-5 pt-[52px] pb-4">
          <div className="flex items-center gap-3 mb-1">
            <AvatarRing initials="MW" size={48} />
            <div>
              <div className="text-white text-[15px] font-semibold">Mike Wheeler</div>
              <div className="text-[#666] text-xs">mike@neoai.app</div>
            </div>
          </div>
          <div className="mt-3">
            <span style={{
              background: 'linear-gradient(135deg, rgba(147,51,234,0.2), rgba(236,72,153,0.2))',
              border: '1px solid rgba(180,60,255,0.3)',
              borderRadius: 20, padding: '4px 12px',
              color: '#d166ff', fontSize: 11, fontWeight: 600,
            }}>
              ✦ Pro Plan
            </span>
          </div>
        </div>

        <Divider />

        <SectionLabel text="Main Menu" />
        <NavItem label="Home"             icon={<IconHome />}    tab="home"    active />
        <NavItem label="Voice Assistant"  icon={<IconMic />}     tab="voice"   />
        <NavItem label="Image Generation" icon={<IconImage />}   tab="image"   />
        <NavItem
          label="Video Generation"
          icon={<IconVideo />}
          badge={
            <span style={{
              background: 'rgba(59,130,246,0.15)', color: '#60a5fa',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 600,
            }}>Soon</span>
          }
        />

        <SectionLabel text="Tools" />
        <NavItem label="My Generations" icon={<IconDoc />}   />
        <NavItem label="Favorites"      icon={<IconStar />}  />
        <NavItem label="History"        icon={<IconClock />} />

        <Divider />

        <SectionLabel text="Account" />
        <NavItem label="Profile"       icon={<IconUser />}     tab="profile" />
        <NavItem label="Settings"      icon={<IconSettings />} />
        <NavItem label="Help & Support" icon={<IconHelp />}   />

        {/* Logout */}
        <div className="mt-auto px-3 pb-2">
          <div className="flex items-center gap-3 px-5 py-3 cursor-pointer rounded-xl text-[#f87171] bg-[rgba(248,113,113,0.08)] text-sm font-medium">
            <IconLogout />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
};
