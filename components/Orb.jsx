/* ────────────────────────────────────
   Orb.jsx — Animated AI Orb Component
   ──────────────────────────────────── */

window.Orb = () => (
  <div
    style={{
      width: 180, height: 180, borderRadius: '50%',
      background: 'radial-gradient(circle at 40% 35%, #ec4899 0%, #9333ea 40%, #4c1d95 80%, transparent 100%)',
      boxShadow: '0 0 60px rgba(180,80,255,0.4), 0 0 120px rgba(236,72,153,0.2)',
      position: 'relative',
      animation: 'pulse-orb 3s ease-in-out infinite',
    }}
  >
    {/* Shimmer overlay */}
    <div className="absolute inset-0 rounded-full orb-shimmer" />
  </div>
);
