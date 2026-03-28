import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MecanicaPage from './pages/MecanicaPage';
import BarbeariaPage from './pages/BarbeariaPage';
import DentistaPage from './pages/DentistaPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo/mecanica" element={<MecanicaPage />} />
        <Route path="/demo/barbearia" element={<BarbeariaPage />} />
        <Route path="/demo/dentista" element={<DentistaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
