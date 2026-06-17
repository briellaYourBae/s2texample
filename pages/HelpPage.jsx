/* ─────────────────────────────────────────────────
   HelpPage.jsx — Help & Support Screen
   ───────────────────────────────────────────────── */

window.HelpPage = ({ onBack }) => {
  const { useState } = React;
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'How do I use Voice Assistant?',      a: 'Tap the microphone button on the Voice page. Speak your prompt clearly and NeoAI will process it in real time.' },
    { q: 'How many images can I generate?',    a: 'Free plan: 10/day. Pro plan: unlimited generations with HD quality and priority processing.' },
    { q: 'Can I download my generations?',     a: 'Yes! Tap the arrow button on any generated image or voice result to download or share it.' },
    { q: 'What is the Pro Plan?',              a: 'Pro gives you unlimited generations, HD quality, priority queue, advanced models, and 10GB storage.' },
    { q: 'How do I cancel my subscription?',   a: 'Go to Profile → Preferences → Manage Subscription. You can cancel anytime with no hidden fees.' },
    { q: 'Is my data private?',                a: 'Yes. Your prompts and generations are encrypted and never shared with third parties. See our Privacy Policy.' },
  ];

  const contacts = [
    { icon: '💬', label: 'Live Chat',    sub: 'Usually replies in 2 min',   color: '#d166ff' },
    { icon: '📧', label: 'Email Support',sub: 'support@neoai.app',          color: '#60a5fa' },
    { icon: '📖', label: 'Documentation',sub: 'docs.neoai.app',             color: '#4ade80' },
    { icon: '🐛', label: 'Report a Bug', sub: 'Help us improve NeoAI',      color: '#f97316' },
  ];

  return (
    <div style={{ padding: '16px 20px 24px' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <button onClick={onBack} className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]">
          <IconBack />
        </button>
        <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>Help & Support</span>
        <div style={{ width: 40 }} />
      </div>

      {/* Search */}
      <div style={{
        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          placeholder="Search for help..."
          style={{ background: 'none', border: 'none', outline: 'none', color: '#ddd', fontSize: 13, flex: 1 }}
        />
      </div>

      {/* Contact options */}
      <div style={{ color: '#aaa', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
        Contact Us
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
        {contacts.map((c, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14, padding: '14px 12px', cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = `${c.color}55`}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
          >
            <div style={{ fontSize: 22, marginBottom: 6 }}>{c.icon}</div>
            <div style={{ color: '#ddd', fontSize: 12, fontWeight: 600, marginBottom: 3 }}>{c.label}</div>
            <div style={{ color: '#555', fontSize: 10, lineHeight: 1.4 }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div style={{ color: '#aaa', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
        Frequently Asked Questions
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14, overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                width: '100%', background: 'none', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 14px', cursor: 'pointer', textAlign: 'left',
              }}
            >
              <span style={{ color: '#ddd', fontSize: 12, fontWeight: 500, flex: 1, paddingRight: 8 }}>{faq.q}</span>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"
                style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {openFaq === i && (
              <div style={{ padding: '0 14px 12px', color: '#666', fontSize: 12, lineHeight: 1.6 }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Version footer */}
      <div style={{ textAlign: 'center', marginTop: 24, color: '#333', fontSize: 12 }}>
        NeoAI v1.0.0 — Beta
      </div>
    </div>
  );
};
