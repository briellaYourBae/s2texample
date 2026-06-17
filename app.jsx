/* ─────────────────────────────────────────────────────────
   app.jsx — Root Application Entry Point
   Manages global state: active tab, sidebar open/close
   ───────────────────────────────────────────────────────── */

const { useState } = React;

const App = () => {
  const [tab, setTab]               = useState('home');
  const [sidebarOpen, setSidebar]   = useState(false);

  /** Navigate to a tab and scroll screen back to top */
  const navigate = (name) => {
    setTab(name);
    const el = document.getElementById('screens-scroll');
    if (el) el.scrollTop = 0;
  };

  /** Render the active page component */
  const renderPage = () => {
    switch (tab) {
      case 'home':    return <HomePage    onNav={navigate} onSidebar={() => setSidebar(true)} />;
      case 'voice':   return <VoicePage   onBack={() => navigate('home')} />;
      case 'image':   return <ImagePage   onBack={() => navigate('home')} />;
      case 'profile': return <ProfilePage onBack={() => navigate('home')} />;
      default:        return <HomePage    onNav={navigate} onSidebar={() => setSidebar(true)} />;
    }
  };

  return (
    <div
      style={{
        width: 360,
        minHeight: 720,
        background: '#111118',
        borderRadius: 44,
        border: '2px solid #2a2a3a',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 0 60px rgba(180,80,255,0.12), 0 32px 64px rgba(0,0,0,0.6)',
      }}
    >
      {/* Phone notch */}
      <div
        style={{
          width: 120, height: 30,
          background: '#000',
          borderRadius: '0 0 20px 20px',
          position: 'absolute', top: 0,
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 20,
        }}
      />

      {/* Sidebar (overlays content) */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebar(false)}
        onNav={navigate}
      />

      {/* Phone shell: status bar + scrollable content + bottom nav */}
      <div className="flex flex-col" style={{ height: 720 }}>
        <StatusBar />

        <div
          id="screens-scroll"
          className="flex-1 overflow-y-auto overflow-x-hidden"
        >
          {renderPage()}
        </div>

        <BottomNav active={tab} onNav={navigate} />
      </div>
    </div>
  );
};

/* Mount React app */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
