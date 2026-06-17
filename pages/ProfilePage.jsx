/* ─────────────────────────────────────────────────
   ProfilePage.jsx — User Profile & Settings Screen
   ───────────────────────────────────────────────── */

window.ProfilePage = ({ onBack }) => {
  const { useState } = React;

  const [prefs, setPrefs] = useState({
    darkMode:      true,
    notifications: true,
    autoSave:      false,
  });

  const togglePref = (key) =>
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));

  /* Stats data */
  const stats = [
    { value: '248', label: 'Generations', color: '#d166ff' },
    { value: '36',  label: 'Favorites',   color: '#ec4899' },
    { value: '12',  label: 'Days Streak', color: '#60a5fa' },
  ];

  /* Activity feed */
  const activities = [
    {
      icon:    <IconImage size={16} color="#d166ff" />,
      iconBg:  'rgba(180,60,255,0.15)',
      title:   'Abstract Gradient',
      sub:     'Image • Today, 09:41',
      thumb:   'linear-gradient(135deg, #7c3aed, #ec4899)',
    },
    {
      icon:    <IconMic size={16} color="#9333ea" />,
      iconBg:  'rgba(147,51,234,0.15)',
      title:   'Voice Session #14',
      sub:     'Voice • Yesterday, 21:30',
      badge:   '2 min',
      badgeColor:  '#a78bfa',
      badgeBg:     'rgba(147,51,234,0.15)',
      badgeBorder: 'rgba(147,51,234,0.3)',
    },
    {
      icon:    <IconImage size={16} color="#60a5fa" />,
      iconBg:  'rgba(59,130,246,0.15)',
      title:   'Neon City Skyline',
      sub:     'Image • Jan 20, 18:05',
      thumb:   'linear-gradient(135deg, #1d4ed8, #7c3aed)',
    },
  ];

  /* Preference rows */
  const prefRows = [
    { key: 'darkMode',      label: 'Dark Mode',        icon: <IconCoffee /> },
    { key: 'notifications', label: 'Notifications',    icon: <IconBell />   },
    { key: 'autoSave',      label: 'Auto-Save Results', icon: <IconSun />   },
  ];

  return (
    <div style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(147,51,234,0.2) 0%, transparent 50%)' }}>

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <button
          onClick={onBack}
          className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]"
          aria-label="Go back"
        >
          <IconBack />
        </button>
        <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>My Profile</span>
        <button
          className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer"
          aria-label="Edit profile"
        >
          <IconEdit />
        </button>
      </div>

      {/* ── Avatar & Info ── */}
      <div className="flex flex-col items-center px-5 pt-5 pb-6">
        <div className="mb-4">
          <AvatarRing initials="MW" size={84} />
        </div>
        <div style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
          Mike Wheeler
        </div>
        <div style={{ color: '#888', fontSize: 13, marginBottom: 12 }}>
          mike@neoai.app
        </div>
        <span
          style={{
            background: 'linear-gradient(135deg, rgba(147,51,234,0.25), rgba(236,72,153,0.25))',
            border: '1px solid rgba(180,60,255,0.4)',
            borderRadius: 20, padding: '5px 16px',
            color: '#d166ff', fontSize: 12, fontWeight: 600,
          }}
        >
          ✦ Pro Plan — Active
        </span>
      </div>

      {/* ── Stats ── */}
      <div className="flex gap-2 px-5 pb-5">
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '14px 12px',
              textAlign: 'center', flex: 1,
            }}
          >
            <div style={{ color: s.color, fontSize: 22, fontWeight: 700 }}>{s.value}</div>
            <div style={{ color: '#666', fontSize: 11, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Recent Activity ── */}
      <div className="px-5 pb-4">
        <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, marginBottom: 12 }}>
          Recent Activity
        </div>
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-[10px] cursor-pointer"
            style={{ borderBottom: i < activities.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
          >
            <div
              style={{
                width: 36, height: 36, borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, background: item.iconBg,
              }}
            >
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#ddd', fontSize: 13, fontWeight: 500 }}>{item.title}</div>
              <div style={{ color: '#555', fontSize: 11 }}>{item.sub}</div>
            </div>
            {item.thumb && (
              <div
                style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: item.thumb, flexShrink: 0,
                }}
              />
            )}
            {item.badge && (
              <span
                style={{
                  padding: '3px 10px', borderRadius: 20,
                  fontSize: 11, fontWeight: 600,
                  background: item.badgeBg, color: item.badgeColor,
                  border: `1px solid ${item.badgeBorder}`,
                }}
              >
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* ── Preferences ── */}
      <div className="px-5 pb-2">
        <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
          Preferences
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 16, padding: '0 16px',
          }}
        >
          {prefRows.map((row, i) => (
            <div
              key={row.key}
              className="flex items-center justify-between py-[14px]"
              style={{ borderBottom: i < prefRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
            >
              <div className="flex items-center gap-2">
                {row.icon}
                <span style={{ color: '#ccc', fontSize: 13 }}>{row.label}</span>
              </div>
              <Toggle on={prefs[row.key]} onToggle={() => togglePref(row.key)} />
            </div>
          ))}

          {/* HD Quality — Pro only, no toggle */}
          <div className="flex items-center justify-between py-[14px]">
            <div className="flex items-center gap-2">
              <IconTruck />
              <span style={{ color: '#ccc', fontSize: 13 }}>HD Quality</span>
            </div>
            <span
              style={{
                padding: '3px 10px', borderRadius: 20,
                fontSize: 11, fontWeight: 600,
                background: 'rgba(180,60,255,0.15)', color: '#d166ff',
                border: '1px solid rgba(180,60,255,0.3)',
              }}
            >
              Pro
            </span>
          </div>
        </div>
      </div>

      {/* ── Storage Banner ── */}
      <div
        style={{
          margin: '16px 20px 24px',
          background: 'linear-gradient(135deg, rgba(147,51,234,0.2) 0%, rgba(236,72,153,0.2) 100%)',
          border: '1px solid rgba(180,60,255,0.3)',
          borderRadius: 16, padding: 16,
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
              Storage: 4.2 GB / 10 GB
            </div>
            <div style={{ color: '#888', fontSize: 11 }}>42% used</div>
          </div>
          <button
            style={{
              background: 'linear-gradient(135deg, #9333ea, #ec4899)',
              border: 'none', borderRadius: 12,
              padding: '8px 14px', color: '#fff',
              fontSize: 12, fontWeight: 600, cursor: 'pointer',
            }}
          >
            Upgrade
          </button>
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 6, height: 6, marginTop: 10, overflow: 'hidden',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(90deg, #9333ea, #ec4899)',
              height: '100%', width: '42%', borderRadius: 6,
            }}
          />
        </div>
      </div>

    </div>
  );
};
