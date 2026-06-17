/* ─────────────────────────────────────
   Toggle.jsx — Toggle Switch Component
   ───────────────────────────────────── */

window.Toggle = ({ on, onToggle }) => (
  <div
    className={`toggle${on ? ' on' : ''}`}
    onClick={onToggle}
    role="switch"
    aria-checked={on}
  />
);
