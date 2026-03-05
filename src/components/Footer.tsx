import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>TOW OVERLAND</h3>
          <p>Enganches americanos a medida, calidad garantizada</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a 
              href="https://www.facebook.com/share/1Hmnrmze8x/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘 Facebook
            </a>
            <a 
              href="https://www.instagram.com/enganchestowoverland.cl" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 TOW OVERLAND. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
