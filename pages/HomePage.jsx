/* ─────────────────────────────────────────────────
   HomePage.jsx — Main Dashboard / Landing Screen
   ───────────────────────────────────────────────── */

window.HomePage = ({ onNav, onSidebar }) => {
  const quickPrompts = [
    { icon: <IconMic size={14} color="#d166ff" />, text: 'Abstract smooth gradient backgro...' },
    { icon: <IconImage size={14} color="#f472b6" />, text: 'Create a minimal abstract 3D ener...' },
  ];

  return (
    <div
      style={{
        background: 'radial-gradient(ellipse at 70% -10%, rgba(180,60,255,0.2) 0%, transparent 60%)',
        padding: '16px 20px 24px',
      }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #9333ea, #ec4899)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 13, color: '#fff',
            }}
          >
            MW
          </div>
          <div>
            <div style={{ color: '#888', fontSize: 10 }}>Good Morning</div>
            <div style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Mike Wheeler</div>
          </div>
        </div>
        <button
          onClick={onSidebar}
          className="bg-white/[0.06] border border-white/10 rounded-[10px] p-2 cursor-pointer"
          aria-label="Open menu"
        >
          <IconMenu />
        </button>
      </div>

      {/* ── Hero Title ── */}
      <div className="mb-6">
        <h1 style={{ color: '#fff', fontSize: 30, fontWeight: 700, lineHeight: 1.15, margin: '0 0 4px' }}>
          <span className="grad-text">Intelligent</span> Voice<br />Assistance
        </h1>
      </div>

      {/* ── Feature Cards Grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>

        {/* Voice card — spans 2 rows */}
        <div
          onClick={() => onNav('voice')}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: 16,
            position: 'relative', overflow: 'hidden',
            cursor: 'pointer', gridRow: 'span 2',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between', minHeight: 160,
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(180,60,255,0.3)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
        >
          {/* Glow background */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at 50% 30%, rgba(180,60,255,0.25) 0%, transparent 70%)',
              borderRadius: 20,
            }}
          />
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'rgba(180,60,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 8,
              }}
            >
              <IconMic size={20} color="#d166ff" />
            </div>
            <WaveBars />
          </div>
          <div style={{ position: 'relative', color: '#ddd', fontSize: 13, fontWeight: 500 }}>
            Voice Assistant
          </div>
        </div>

        {/* Video card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: 16, cursor: 'not-allowed',
          }}
        >
          <div
            style={{
              width: 32, height: 32, borderRadius: 10,
              background: 'rgba(59,130,246,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 8,
            }}
          >
            <IconVideo size={16} color="#60a5fa" />
          </div>
          <div style={{ color: '#ddd', fontSize: 12, fontWeight: 500 }}>Video Generation</div>
          <span
            style={{
              display: 'inline-block', marginTop: 6,
              background: 'rgba(59,130,246,0.15)', color: '#60a5fa',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: 20, padding: '2px 8px', fontSize: 10, fontWeight: 600,
            }}
          >
            Soon
          </span>
        </div>

        {/* Image card */}
        <div
          onClick={() => onNav('image')}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: 16, cursor: 'pointer',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(180,60,255,0.3)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
        >
          <div
            style={{
              width: 32, height: 32, borderRadius: 10,
              background: 'rgba(236,72,153,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 8,
            }}
          >
            <IconImage size={16} color="#f472b6" />
          </div>
          <div style={{ color: '#ddd', fontSize: 12, fontWeight: 500 }}>Image Generation</div>
        </div>
      </div>

      {/* ── Quick Prompts ── */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Quick Prompts</span>
          <span style={{ color: '#9333ea', fontSize: 12, cursor: 'pointer' }}>See All</span>
        </div>
        <div className="flex flex-col gap-2">
          {quickPrompts.map((chip, i) => (
            <div
              key={i}
              className="flex items-center gap-2 cursor-pointer transition-all"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: '8px 14px',
                color: '#ccc', fontSize: 12,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(180,60,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(180,60,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {chip.icon}
              {chip.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
