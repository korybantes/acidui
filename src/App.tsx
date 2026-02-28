import { Routes, Route } from 'react-router-dom';
import { AcidNavbar } from './components/AcidNavbar';
import { Landing } from './pages/Landing';
import { Docs } from './pages/Docs';
import { Library } from './pages/Library';
import './App.css';

import { AcidToastProvider } from './components/AcidToast';

function App() {
  return (
    <AcidToastProvider>
      <div className="app-layout">
        <AcidNavbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </AcidToastProvider>
  );
}

export default App;
