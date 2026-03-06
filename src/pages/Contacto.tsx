import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import './Contacto.css';

const Contacto = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  });

  // Inicializar EmailJS con la Public Key
  useEffect(() => {
    emailjs.init('-9qMzKmGlecL09wkt');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: null, message: '' });

    try {
      // EmailJS configurado para TOW OVERLAND
      const result = await emailjs.sendForm(
        'service_tqmk6oe',           // Service ID correcto
        'template_ugmtskw',          // Template ID
        form.current!
      );

      console.log('Respuesta EmailJS:', result);

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: '¡Mensaje enviado exitosamente! Te contactaremos pronto.'
        });
        setFormData({ nombre: '', email: '', mensaje: '' });
      }
    } catch (error) {
      console.error('Error al enviar:', error);
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contacto">
      <Helmet>
        <title>Contacto - TOW OVERLAND | Solicita tu Cotización</title>
        <meta name="description" content="Contáctanos para solicitar tu enganche americano personalizado. Atención rápida y cotización sin compromiso. WhatsApp +56 9 8511 2929" />
        <meta name="keywords" content="contacto tow overland, cotización enganche, solicitar enganche, contacto enganches chile" />
        <link rel="canonical" href="https://towoverland.com/contacto" />
      </Helmet>
      
      <section className="contacto-hero">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte</p>
      </section>

      <section className="contacto-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <div className="info-item">
                <h3>📍 Dirección</h3>
                <p>Padre Faustino Gazziero 2434 Independencia Santiago, Chile</p>
              </div>
              <div className="info-item">
                <h3>📞 Teléfono</h3>
                <p>+56 9 8511 2929</p>
              </div>
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>towoverland@gmail.com</p>
              </div>
              <div className="info-item">
                <h3>🕒 Horario</h3>
                <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 09:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Envíanos un Mensaje</h2>
              
              {status.type && (
                <div className={`alert alert-${status.type}`}>
                  {status.message}
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Escribe tu mensaje aquí..."
                    disabled={sending}
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={sending}>
                  {sending ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
