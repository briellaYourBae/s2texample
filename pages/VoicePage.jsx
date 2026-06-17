/* ─────────────────────────────────────────────────
   VoicePage.jsx — AI Voice Assistant Screen
   ───────────────────────────────────────────────── */

const { useState, useCallback } = React;

window.VoicePage = ({ onBack }) => {
  const [listening, setListening] = useState(false);

  const handleMicToggle = useCallback(() => {
    if (listening) return; // prevent double-tap during processing
    setListening(true);
    setTimeout(() => setListening(false), 3000);
  }, [listening]);

  return (
    <div
      style={{
        background: 'radial-gradient(ellipse at 50% 20%, rgba(180,60,255,0.18) 0%, transparent 60%)',
        padding: '16px 20px 24px',
      }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]"
          aria-label="Go back"
        >
          <IconBack />
        </button>

        <div className="flex items-center gap-2">
          <span
            style={{
              background: 'rgba(180,60,255,0.2)',
              border: '1px solid rgba(180,60,255,0.4)',
              borderRadius: 20, padding: '4px 12px',
              color: '#d166ff', fontSize: 12, fontWeight: 500,
            }}
          >
            NeoAI 1.0
          </span>
          <span
            style={{
              background: 'rgba(34,197,94,0.15)',
              border: '1px solid rgba(34,197,94,0.3)',
              borderRadius: 20, padding: '4px 10px',
              color: '#4ade80', fontSize: 11, fontWeight: 500,
            }}
          >
            Beta
          </span>
        </div>

        <button
          className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer"
          aria-label="Refresh session"
        >
          <IconRefresh />
        </button>
      </div>

      {/* ── Orb ── */}
      <div className="flex justify-center items-center" style={{ height: 220 }}>
        <Orb />
      </div>

      {/* ── Transcript / Placeholder ── */}
      <div style={{ textAlign: 'center', padding: '20px 12px' }}>
        <p
          style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: 15, lineHeight: 1.6,
            fontStyle: 'italic', margin: 0,
          }}
        >
          {listening
            ? 'Listening to your voice...'
            : 'Abstract smooth gradient background with flowing organic shapes, blending deep purple, violet, electric blue, and soft pink hues...'}
        </p>
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-center gap-6 mt-2">
        {/* Mute button */}
        <button
          className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 cursor-pointer flex items-center justify-center"
          aria-label="Mute"
        >
          <IconMute />
        </button>

        {/* Main mic button */}
        <button
          onClick={handleMicToggle}
          aria-label={listening ? 'Processing' : 'Start listening'}
          style={{
            width: 64, height: 64, borderRadius: '50%',
            background: listening
              ? 'linear-gradient(135deg, #ec4899, #f97316)'
              : 'linear-gradient(135deg, #9333ea, #ec4899)',
            border: 'none', cursor: listening ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 24px rgba(180,80,255,0.5)',
            animation: 'pulse-btn 2s ease-in-out infinite',
            transition: 'background 0.3s',
          }}
        >
          <IconMic size={26} color="white" />
        </button>

        {/* Chat button */}
        <button
          className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 cursor-pointer flex items-center justify-center"
          aria-label="Open chat"
        >
          <IconChat />
        </button>
      </div>

      {/* ── Status Label ── */}
      <div style={{ textAlign: 'center', marginTop: 14 }}>
        <span
          style={{
            color: listening ? '#f97316' : '#d166ff',
            fontSize: 13, fontWeight: 500,
            transition: 'color 0.3s',
          }}
        >
          {listening ? 'Processing...' : "I'm Listening"}
        </span>
      </div>
    </div>
  );
};
