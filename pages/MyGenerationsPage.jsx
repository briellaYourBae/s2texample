/* ─────────────────────────────────────────────────
   MyGenerationsPage.jsx — All Generated Content
   ───────────────────────────────────────────────── */

window.MyGenerationsPage = ({ onBack }) => {
  const { useState } = React;
  const [filter, setFilter] = useState('All');

  const generations = [
    { id:1, title:'Abstract Smooth Gradient',  type:'Image', date:'Today',    grad:'linear-gradient(135deg,#7c3aed,#ec4899)',       starred:true  },
    { id:2, title:'Neon City Skyline',          type:'Image', date:'Jan 20',   grad:'linear-gradient(135deg,#1d4ed8,#7c3aed)',       starred:true  },
    { id:3, title:'Cosmic Nebula Burst',        type:'Image', date:'Jan 19',   grad:'linear-gradient(135deg,#4c1d95,#ec4899,#f97316)', starred:false },
    { id:4, title:'Minimal 3D Energy',          type:'Image', date:'Jan 18',   grad:'linear-gradient(135deg,#0f172a,#0369a1,#7c3aed)', starred:false },
    { id:5, title:'Ocean Sunset Vibes',         type:'Image', date:'Jan 15',   grad:'linear-gradient(135deg,#0369a1,#f59e0b)',       starred:true  },
    { id:6, title:'Forest Mist Morning',        type:'Image', date:'Jan 13',   grad:'linear-gradient(135deg,#14532d,#0f172a,#1e3a5f)', starred:false },
    { id:7, title:'Voice Session #14',          type:'Voice', date:'Today',    duration:'2 min', starred:false },
    { id:8, title:'Voice Session #13',          type:'Voice', date:'Yesterday',duration:'7 min', starred:true  },
  ];

  const filters = ['All', 'Image', 'Voice'];
  const [starred, setStarred] = useState(
    Object.fromEntries(generations.map(g => [g.id, g.starred]))
  );

  const visible = filter === 'All' ? generations : generations.filter(g => g.type === filter);
  const toggleStar = (id) => setStarred(p => ({ ...p, [id]: !p[id] }));

  return (
    <div style={{ padding: '16px 20px 24px' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={onBack} className="flex items-center bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 cursor-pointer text-[#aaa]">
          <IconBack />
        </button>
        <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>My Generations</span>
        <span style={{ color: '#9333ea', fontSize: 12, fontWeight: 500 }}>{generations.length} total</span>
      </div>

      {/* Stats row */}
      <div className="flex gap-2 mb-4">
        {[
          { label: 'Images', val: generations.filter(g=>g.type==='Image').length, color: '#d166ff' },
          { label: 'Voice',  val: generations.filter(g=>g.type==='Voice').length, color: '#9333ea' },
          { label: 'Starred',val: Object.values(starred).filter(Boolean).length,  color: '#ec4899' },
        ].map((s,i) => (
          <div key={i} style={{
            flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12, padding: '10px 8px', textAlign: 'center',
          }}>
            <div style={{ color: s.color, fontSize: 18, fontWeight: 700 }}>{s.val}</div>
            <div style={{ color: '#555', fontSize: 10, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            border: filter===f ? '1px solid rgba(180,60,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
            background: filter===f ? 'rgba(180,60,255,0.15)' : 'rgba(255,255,255,0.04)',
            color: filter===f ? '#d166ff' : '#666', cursor: 'pointer',
          }}>{f}</button>
        ))}
      </div>

      {/* Grid for images, list for voice */}
      {filter !== 'Voice' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
          {visible.filter(g => g.type === 'Image').map(item => (
            <div key={item.id} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ width: '100%', height: 80, background: item.grad, position: 'relative' }}>
                <button
                  onClick={() => toggleStar(item.id)}
                  style={{ position: 'absolute', top: 6, right: 6, background: 'rgba(0,0,0,0.4)', border: 'none', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill={starred[item.id] ? '#ec4899' : 'none'} stroke={starred[item.id] ? '#ec4899' : '#aaa'} strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </button>
              </div>
              <div style={{ padding: '8px 10px' }}>
                <div style={{ color: '#ddd', fontSize: 11, fontWeight: 500 }}>{item.title}</div>
                <div style={{ color: '#555', fontSize: 10, marginTop: 2 }}>{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filter !== 'Image' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {visible.filter(g => g.type === 'Voice').map((item, i, arr) => (
            <div key={item.id} className="flex items-center gap-3 py-3" style={{ borderBottom: i < arr.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(147,51,234,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <IconMic size={16} color="#9333ea" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#ddd', fontSize: 13, fontWeight: 500 }}>{item.title}</div>
                <div style={{ color: '#555', fontSize: 11 }}>{item.date} • {item.duration}</div>
              </div>
              <button onClick={() => toggleStar(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill={starred[item.id] ? '#ec4899' : 'none'} stroke={starred[item.id] ? '#ec4899' : '#444'} strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
