/* ─────────────────────────────────────
   AvatarRing.jsx — Gradient Avatar Ring
   ───────────────────────────────────── */

window.AvatarRing = ({ initials = 'MW', size = 84 }) => (
  <div
    style={{
      width: size, height: size, borderRadius: '50%',
      background: 'linear-gradient(135deg, #9333ea, #ec4899, #3b82f6)',
      padding: 3, flexShrink: 0,
    }}
  >
    <div
      style={{
        width: '100%', height: '100%', borderRadius: '50%',
        background: '#1e1e2e',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.33, fontWeight: 700, color: '#fff',
      }}
    >
      {initials}
    </div>
  </div>
);
