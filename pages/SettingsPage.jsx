/* ─────────────────────────────────────────────────
   SettingsPage.jsx — App Settings Screen
   ───────────────────────────────────────────────── */

window.SettingsPage = ({ onBack }) => {
  const { useState } = React;

  const [settings, setSettings] = useState({
    darkMode: true, notifications: true, autoSave: false,
    hdQuality: true, analytics: false, soundFx: true,
    haptics: true, autoPlay: false,
  });

  const toggle = (key) => setSettings(p => ({ ...p, [key]: !p[key] }));

  const Section = ({ title, children }) => (
    <div style={{ marginBottom: 20 }}>
      <div style={{ color: '#aaa', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 0 8px' }}>
        {title}
      </div>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '0 16px' }}>
        {children}
      </div>
    </div>
  );

  const Row = ({ label, sub, right, last = false }) => (
    <div className="flex items-center justify-between py-[13px]" style={{ borderBottom: last ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
      <div>
        <div style={{ color: '#ddd', fontSize: 13, fontWeight: 500 }}>{label}</div>
        {sub && <div style={{ color: '#555', fontSize: 11, marginTop: 2 }}>{sub}</div>}
      </div>
      {right}
    </div>
  );

  const Chevron = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );

  return (
    <div style={{ padding: '16px 20px 24px', background: 'radial-gradient(ellipse at 50% 0%, rgba(147,51,234,0.12) 0%, transparent 50%)' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]">
          <IconBack />
        </button>
        <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>Settings</span>
        <div style={{ width: 40 }} />
      </div>

      <Section title="Appearance">
        <Row label="Dark Mode"    sub="Always use dark theme"   right={<Toggle on={settings.darkMode}    onToggle={() => toggle('darkMode')}    />} />
        <Row label="Sound Effects" sub="UI interaction sounds"  right={<Toggle on={settings.soundFx}    onToggle={() => toggle('soundFx')}     />} />
        <Row label="Haptic Feedback" sub="Vibration on actions" right={<Toggle on={settings.haptics}    onToggle={() => toggle('haptics')}     />} last />
      </Section>

      <Section title="AI & Generation">
        <Row label="HD Quality"   sub="Pro feature — higher resolution"
          right={
            <span style={{ background: 'rgba(180,60,255,0.15)', color: '#d166ff', border: '1px solid rgba(180,60,255,0.3)', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 600 }}>Pro</span>
          }
        />
        <Row label="Auto-Save Results" sub="Save every generation" right={<Toggle on={settings.autoSave}  onToggle={() => toggle('autoSave')}  />} />
        <Row label="Auto-Play Voice"   sub="Start voice on open"   right={<Toggle on={settings.autoPlay}  onToggle={() => toggle('autoPlay')}  />} last />
      </Section>

      <Section title="Notifications">
        <Row label="Push Notifications" sub="Generation complete alerts" right={<Toggle on={settings.notifications} onToggle={() => toggle('notifications')} />} />
        <Row label="Usage Analytics"    sub="Help improve NeoAI"         right={<Toggle on={settings.analytics}    onToggle={() => toggle('analytics')}    />} last />
      </Section>

      <Section title="Account">
        <Row label="Change Password"   right={<Chevron />} />
        <Row label="Connected Apps"    right={<Chevron />} />
        <Row label="Privacy Policy"    right={<Chevron />} />
        <Row label="Terms of Service"  right={<Chevron />} last />
      </Section>

      {/* Danger zone */}
      <div style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.15)', borderRadius: 16, padding: '0 16px' }}>
        <Row label="Clear Cache"        right={<Chevron />} />
        <Row label="Delete All History" right={<Chevron />} />
        <Row label="Delete Account" last
          right={<span style={{ color: '#f87171', fontSize: 12, fontWeight: 500 }}>Danger</span>}
        />
      </div>

      {/* Version */}
      <div style={{ textAlign: 'center', marginTop: 24, color: '#333', fontSize: 12 }}>
        NeoAI v1.0.0 — Beta
      </div>
    </div>
  );
};
