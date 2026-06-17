/* ─────────────────────────────────────────────────
   HistoryPage.jsx — Generation History Screen
   ───────────────────────────────────────────────── */

window.HistoryPage = ({ onBack }) => {
  const { useState } = React;

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const history = [
    { id:1,  title:'Abstract Smooth Gradient',  type:'Image', date:'Today, 09:41',     grad:'linear-gradient(135deg,#7c3aed,#ec4899)' },
    { id:2,  title:'Voice Session #14',          type:'Voice', date:'Today, 08:15',     duration:'2 min' },
    { id:3,  title:'Neon City Skyline',           type:'Image', date:'Yesterday, 18:05', grad:'linear-gradient(135deg,#1d4ed8,#7c3aed)' },
    { id:4,  title:'Voice Session #13',          type:'Voice', date:'Yesterday, 14:30', duration:'7 min' },
    { id:5,  title:'Cosmic Nebula Burst',         type:'Image', date:'Jan 19, 22:11',    grad:'linear-gradient(135deg,#4c1d95,#ec4899,#f97316)' },
    { id:6,  title:'Minimal 3D Energy',           type:'Image', date:'Jan 18, 16:44',    grad:'linear-gradient(135deg,#0f172a,#0369a1,#7c3aed)' },
    { id:7,  title:'Voice Session #12',          type:'Voice', date:'Jan 17, 20:00',    duration:'4 min' },
    { id:8,  title:'Ocean Sunset Vibes',          type:'Image', date:'Jan 15, 11:20',    grad:'linear-gradient(135deg,#0369a1,#f59e0b)' },
  ];

  const filters = ['All', 'Image', 'Voice'];

  const visible = history.filter(h => {
    const matchFilter = filter === 'All' || h.type === filter;
    const matchSearch = h.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div style={{ padding: '16px 20px 24px' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={onBack} className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]">
          <IconBack />
        </button>
        <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>History</span>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f87171', fontSize: 12, fontWeight: 500 }}>
          Clear All
        </button>
      </div>

      {/* Search bar */}
      <div style={{
        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search history..."
          style={{
            background: 'none', border: 'none', outline: 'none',
            color: '#ddd', fontSize: 13, flex: 1,
          }}
        />
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
              cursor: 'pointer',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      {visible.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#444', fontSize: 13 }}>
          No results found
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {visible.map((item, i) => (
            <div
              key={item.id}
              className="flex items-center gap-3 py-[11px] cursor-pointer"
              style={{ borderBottom: i < visible.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
            >
              {/* Thumb or icon */}
              {item.grad ? (
                <div style={{ width: 42, height: 42, borderRadius: 10, background: item.grad, flexShrink: 0 }} />
              ) : (
                <div style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(147,51,234,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IconMic size={16} color="#9333ea" />
                </div>
              )}
              <div style={{ flex: 1 }}>
                <div style={{ color: '#ddd', fontSize: 13, fontWeight: 500 }}>{item.title}</div>
                <div style={{ color: '#555', fontSize: 11 }}>
                  {item.type} • {item.date}{item.duration ? ` • ${item.duration}` : ''}
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#444', padding: 4 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
