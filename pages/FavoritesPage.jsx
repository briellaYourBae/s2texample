/* ─────────────────────────────────────────────────
   FavoritesPage.jsx — Saved / Favorited Generations
   ───────────────────────────────────────────────── */

window.FavoritesPage = ({ onBack }) => {
  const { useState } = React;

  const allItems = [
    { id: 1, title: 'Abstract Gradient',    type: 'Image', date: 'Today',    grad: 'linear-gradient(135deg,#7c3aed,#ec4899)', starred: true  },
    { id: 2, title: 'Neon City Skyline',    type: 'Image', date: 'Jan 20',   grad: 'linear-gradient(135deg,#1d4ed8,#7c3aed)', starred: true  },
    { id: 3, title: 'Cosmic Nebula',        type: 'Image', date: 'Jan 18',   grad: 'linear-gradient(135deg,#0f172a,#4c1d95,#ec4899)', starred: true },
    { id: 4, title: 'Voice Session #14',    type: 'Voice', date: 'Yesterday', duration: '2 min', starred: true },
    { id: 5, title: 'Ocean Sunset',         type: 'Image', date: 'Jan 15',   grad: 'linear-gradient(135deg,#0369a1,#f59e0b)', starred: true  },
    { id: 6, title: 'Voice Session #9',     type: 'Voice', date: 'Jan 14',   duration: '5 min', starred: true },
  ];

  const [items, setItems] = useState(allItems);
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Image', 'Voice'];
  const visible = filter === 'All' ? items : items.filter(i => i.type === filter);

  const unstar = (id) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <div style={{ padding: '16px 20px 24px' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <button onClick={onBack} className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]">
          <IconBack />
        </button>
        <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>Favorites</span>
        <span style={{ color: '#9333ea', fontSize: 12, cursor: 'pointer', fontWeight: 500 }}>{items.length} saved</span>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
              border: filter === f ? '1px solid rgba(180,60,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
              background: filter === f ? 'rgba(180,60,255,0.15)' : 'rgba(255,255,255,0.04)',
              color: filter === f ? '#d166ff' : '#666',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Items */}
      {visible.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#444', fontSize: 13 }}>
          No favorites yet
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {visible.map(item => (
            <div
              key={item.id}
              style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16, overflow: 'hidden',
              }}
            >
              {item.grad && (
                <div style={{ width: '100%', height: 80, background: item.grad }} />
              )}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                    background: item.type === 'Voice' ? 'rgba(147,51,234,0.2)' : 'rgba(180,60,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.type === 'Voice' ? <IconMic size={14} color="#9333ea" /> : <IconImage size={14} color="#d166ff" />}
                  </div>
                  <div>
                    <div style={{ color: '#ddd', fontSize: 13, fontWeight: 500 }}>{item.title}</div>
                    <div style={{ color: '#555', fontSize: 11 }}>
                      {item.type} • {item.date}{item.duration ? ` • ${item.duration}` : ''}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => unstar(item.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                  aria-label="Remove from favorites"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ec4899" stroke="#ec4899" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
