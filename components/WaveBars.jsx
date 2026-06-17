/* ──────────────────────────────────────────
   WaveBars.jsx — Animated Voice Wave Bars
   ────────────────────────────────────────── */

window.WaveBars = () => {
  const bars = [
    { h: 16, delay: '0s'    },
    { h: 28, delay: '0.1s'  },
    { h: 20, delay: '0.2s'  },
    { h: 36, delay: '0.3s'  },
    { h: 24, delay: '0.15s' },
    { h: 14, delay: '0.05s' },
    { h: 30, delay: '0.25s' },
  ];

  return (
    <div className="flex items-center gap-[3px] h-10 my-3">
      {bars.map((b, i) => (
        <div
          key={i}
          style={{
            width: 4, height: b.h, borderRadius: 4,
            background: 'linear-gradient(to top, #9333ea, #ec4899)',
            animation: `wave 1s ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
};
