import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import './App.css';

// Componente para hacer scroll al top en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Número de WhatsApp de TOW OVERLAND (Chile)
  // Formato: código de país + número (sin +, sin espacios)
  // +56 9 8511 2929 = 56985112929
  const whatsappNumber = '56985112929';

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton 
          phoneNumber={whatsappNumber}
          message="Hola! Me gustaría hacer una reserva para un enganche americano"
        />
      </div>
    </Router>
  );
}

export default App;
