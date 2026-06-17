/* ─────────────────────────────────────────────────
   VideoPage.jsx — Video Generation (Coming Soon)
   ───────────────────────────────────────────────── */

window.VideoPage = ({ onBack }) => {
  const features = [
    { icon: '🎬', title: 'Text to Video',     desc: 'Generate videos from text prompts' },
    { icon: '🖼️', title: 'Image to Video',    desc: 'Animate your static images' },
    { icon: '✂️', title: 'Video Editing',     desc: 'AI-powered cut & effects' },
    { icon: '🎵', title: 'Sound Sync',        desc: 'Auto-match audio to visuals' },
  ];

  return (
    <div style={{ padding: '16px 20px 24px', background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]">
          <IconBack />
        </button>
        <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>Video Generation</span>
        <div style={{ width: 40 }} />
      </div>

      {/* Coming Soon Hero */}
      <div style={{ textAlign: 'center', padding: '32px 0 28px' }}>
        <div style={{
          width: 88, height: 88, borderRadius: 28,
          background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.25))',
          border: '1px solid rgba(99,102,241,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: 36,
        }}>🎬</div>
        <div style={{ color: '#fff', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Coming Soon</div>
        <div style={{ color: '#666', fontSize: 13, lineHeight: 1.6, maxWidth: 260, margin: '0 auto' }}>
          AI-powered video generation is under development. Be the first to know when it launches.
        </div>

        {/* Notify button */}
        <button
          style={{
            marginTop: 24,
            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
            border: 'none', borderRadius: 16,
            padding: '12px 28px', color: '#fff',
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
            boxShadow: '0 0 20px rgba(99,102,241,0.3)',
          }}
        >
          Notify Me
        </button>
      </div>

      {/* Planned Features */}
      <div style={{ marginTop: 8 }}>
        <div style={{ color: '#aaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          Planned Features
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16, padding: '14px 12px',
            }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{f.icon}</div>
              <div style={{ color: '#ddd', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{f.title}</div>
              <div style={{ color: '#555', fontSize: 11, lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: 24, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 16 }}>
        <div className="flex justify-between items-center mb-2">
          <span style={{ color: '#ddd', fontSize: 13, fontWeight: 500 }}>Development Progress</span>
          <span style={{ color: '#60a5fa', fontSize: 13, fontWeight: 700 }}>67%</span>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 6, height: 8, overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(90deg, #3b82f6, #6366f1)', height: '100%', width: '67%', borderRadius: 6 }} />
        </div>
        <div style={{ color: '#555', fontSize: 11, marginTop: 8 }}>Expected launch: Q2 2026</div>
      </div>
    </div>
  );
};
