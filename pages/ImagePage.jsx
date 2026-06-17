/* ─────────────────────────────────────────────────
   ImagePage.jsx — AI Image Generation Screen
   ───────────────────────────────────────────────── */

window.ImagePage = ({ onBack }) => {
  const generatedImages = [
    {
      id: 1,
      title: 'Abstract Smooth Gradient',
      date: 'Today | 21 Jan, 2026',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 40%, #ec4899 70%, #9333ea 100%)',
    },
  ];

  const promptText =
    'Abstract smooth gradient background with flowing organic shapes, blending deep purple, violet, electric blue, and soft pink hues. Soft grain texture, subtle noise overlay, dreamy and atmospheric lighting.';

  return (
    <div style={{ padding: '16px 20px 24px' }}>
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]"
          aria-label="Go back"
        >
          <IconBack />
        </button>
        <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>Create an Image</span>
        <button
          className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer"
          aria-label="More options"
        >
          <IconMore />
        </button>
      </div>

      {/* ── User Prompt Bubble ── */}
      <div
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px 20px 4px 20px',
          padding: '14px 16px', marginBottom: 20,
        }}
      >
        <p style={{ color: '#ddd', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
          {promptText}
        </p>
      </div>

      {/* ── Result Label ── */}
      <div className="mb-1">
        <span style={{ color: '#aaa', fontSize: 12, fontWeight: 500 }}>Image created</span>
      </div>

      {/* ── Generated Image Cards ── */}
      {generatedImages.map(img => (
        <div
          key={img.id}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, overflow: 'hidden', marginBottom: 12,
          }}
        >
          {/* Fake image preview */}
          <div style={{ width: '100%', height: 140, background: img.gradient }} />

          {/* Card footer */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'rgba(180,60,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconImage size={14} color="#d166ff" />
              </div>
              <div>
                <div style={{ color: '#fff', fontSize: 13, fontWeight: 500 }}>{img.title}</div>
                <div style={{ color: '#666', fontSize: 11 }}>{img.date}</div>
              </div>
            </div>
            <button
              style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg, #9333ea, #ec4899)',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              aria-label="Open image"
            >
              <IconArrowUpRight />
            </button>
          </div>
        </div>
      ))}

      {/* ── Input Bar ── */}
      <div
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 28, padding: '12px 18px',
          display: 'flex', alignItems: 'center', gap: 10,
        }}
      >
        <span style={{ flex: 1, color: '#555', fontSize: 14 }}>Ask anything</span>
        <button
          style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #9333ea, #ec4899)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}
          aria-label="Voice input"
        >
          <IconMic size={16} color="white" />
        </button>
      </div>
    </div>
  );
};
