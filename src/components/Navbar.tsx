import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logotow.png" alt="TOW OVERLAND Logo" className="logo-image" />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/nosotros" className="navbar-link">
              Nosotros
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto" className="navbar-link">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
