import './Home.css';

const Home = () => {
  // Imágenes de la galería - Ahora usa las fotos del carrusel
  const galleryImages = [
    '/imagenes/carrusel/enganche1.jpeg',
    '/imagenes/carrusel/enganche2.jpeg',
    '/imagenes/carrusel/enganche3.jpeg',
    '/imagenes/carrusel/enganche4.jpeg',
    '/imagenes/carrusel/enganche5.jpeg',
    '/imagenes/carrusel/enganche6.jpeg'
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido a Tow Overland</h1>
        <p className="hero-subtitle">Enganches Americanos de Calidad Superior</p>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Expertos en Enganches Americanos a Medida</h2>
          <p>
            En <strong>Tow Overland</strong> transformamos tus necesidades de remolque en soluciones de ingeniería 
            de precisión. Cada enganche americano que fabricamos es diseñado y construido completamente 
            <strong> desde cero</strong>, garantizando un ajuste perfecto para tu vehículo.
          </p>
          <p>
            Nuestro proceso de fabricación incluye el <strong>apernado directo al chasis</strong>, asegurando 
            la máxima resistencia estructural y durabilidad. No utilizamos soluciones genéricas ni prefabricadas: 
            cada proyecto es único y personalizado según las especificaciones de tu vehículo y tus necesidades 
            de carga.
          </p>
          <p>
            Con años de experiencia en el sector, nos especializamos en ofrecer enganches de 
            <strong> la más alta calidad</strong>, utilizando materiales premium y técnicas de fabricación 
            avanzadas. Tu seguridad y satisfacción son nuestra prioridad.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>Nuestros Trabajos</h2>
          <div className="gallery">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Trabajo TOW OVERLAND ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
