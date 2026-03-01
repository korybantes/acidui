import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AcidNavbar } from './components/AcidNavbar';
import { AcidDynamicNavbar } from './components/AcidDynamicNavbar';
import { Landing } from './pages/Landing';
import { Docs } from './pages/Docs';
import { Library } from './pages/Library';
import { Studio } from './pages/Studio';
import './App.css';

import { AcidToastProvider } from './components/AcidToast';

function App() {
  const [navbarType, setNavbarType] = useState<'default' | 'dynamic'>('default');

  useEffect(() => {
    const handleSwitch = (e: any) => {
      setNavbarType(e.detail);
    };
    window.addEventListener('ac-switch-navbar', handleSwitch);
    return () => window.removeEventListener('ac-switch-navbar', handleSwitch);
  }, []);

  return (
    <AcidToastProvider>
      <Routes>
        {/* Studio is full-screen, no global navbar */}
        <Route path="/studio" element={<Studio />} />

        {/* All other pages use the shared navbar */}
        <Route path="*" element={
          <div className="app-layout">
            {navbarType === 'default' ? <AcidNavbar /> : <AcidDynamicNavbar />}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </div>
        } />
      </Routes>
    </AcidToastProvider>
  );
}

export default App;
