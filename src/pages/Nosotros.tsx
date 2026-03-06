import { Helmet } from 'react-helmet-async';
import ImageCarousel from '../components/ImageCarousel';
import './Nosotros.css';

const Nosotros = () => {
  // Imágenes del carrusel - Ahora usa las fotos de la galería
  const enganchesImages = [
    '/imagenes/galeria/foto1.jpg',
    '/imagenes/galeria/foto2.jpg',
    '/imagenes/galeria/foto3.jpg',
    '/imagenes/galeria/foto4.jpg',
    '/imagenes/galeria/foto5.jpg',
    '/imagenes/galeria/foto6.jpg',
  ];

  return (
    <div className="nosotros">
      <Helmet>
        <title>Sobre Nosotros - TOW OVERLAND | Expertos en Enganches</title>
        <meta name="description" content="Conoce a TOW OVERLAND, especialistas en fabricación de enganches americanos personalizados. Experiencia, calidad y compromiso con cada cliente." />
        <meta name="keywords" content="tow overland, empresa enganches, fabricación enganches, enganches personalizados chile" />
        <link rel="canonical" href="https://towoverland.com/nosotros" />
      </Helmet>
      
      <section className="nosotros-hero">
        <h1>Sobre Nosotros</h1>
        <p>Expertos en Enganches Americanos a Medida</p>
      </section>

      <section className="nosotros-content">
        <div className="container">
          <div className="about-card">
            <h2>¿Quiénes Somos?</h2>
            <p>
              En <strong>TOW OVERLAND</strong> somos especialistas en la fabricación de enganches americanos 
              completamente personalizados. Cada enganche es diseñado y construido <strong>desde cero</strong>, 
              adaptándose perfectamente a las necesidades específicas de tu vehículo.
            </p>
            <p>
              Nuestros enganches son <strong>apernados directamente al chasis</strong>, garantizando la máxima 
              resistencia, durabilidad y seguridad. No trabajamos con soluciones genéricas, cada proyecto es único 
              y fabricado a medida para ofrecer el ajuste perfecto.
            </p>
          </div>

          <div className="about-card">
            <h2>Nuestra Misión</h2>
            <p>
              Proporcionar enganches americanos de <strong>la más alta calidad</strong>, fabricados con precisión 
              y dedicación. Nos comprometemos a entregar productos que superan los estándares de la industria, 
              combinando ingeniería avanzada con atención al detalle.
            </p>
            <p>
              Cada enganche que sale de nuestro taller es una pieza de confianza, diseñada para acompañarte en 
              tus aventuras más exigentes, ya sea para trabajo o recreación.
            </p>
          </div>

          <div className="about-card">
            <h2>¿Por Qué Elegirnos?</h2>
            <p>
              ✓ <strong>Fabricación 100% a medida</strong> - Diseñados específicamente para tu vehículo<br/>
              ✓ <strong>Apernados al chasis</strong> - Máxima resistencia y seguridad garantizada<br/>
              ✓ <strong>Calidad superior</strong> - Materiales de primera y mano de obra especializada<br/>
              ✓ <strong>Experiencia comprobada</strong> - Años de experiencia en enganches americanos<br/>
              ✓ <strong>Garantía de satisfacción</strong> - Respaldamos cada uno de nuestros trabajos
            </p>
          </div>

          <div className="enganches-section">
            <h2>Nuestros Enganches Americanos</h2>
            <p className="enganches-description">
              Especializados en enganches americanos de alta calidad. Mira algunos de nuestros trabajos:
            </p>
            <ImageCarousel images={enganchesImages} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
