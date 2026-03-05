import './WhatsAppButton.css';

interface WhatsAppButtonProps {
  phoneNumber: string; // Formato: 1234567890 (sin +, sin espacios)
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = 'Hola, me gustaría hacer una reserva' }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button className="whatsapp-float" onClick={handleClick} aria-label="Contactar por WhatsApp">
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.396 5.194 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.409 1.417-5.261-0.325-0.527c-1.331-2.201-2.035-4.707-2.035-7.26 0-7.444 6.056-13.5 13.5-13.5s13.5 6.056 13.5 13.5-6.056 13.801-13.233 13.801zM21.627 18.838c-0.397-0.198-2.348-1.158-2.713-1.29-0.366-0.132-0.632-0.198-0.898 0.198-0.265 0.397-1.029 1.29-1.262 1.556-0.232 0.265-0.464 0.298-0.861 0.1-0.397-0.198-1.675-0.617-3.191-1.968-1.18-1.051-1.977-2.349-2.21-2.746-0.232-0.397-0.025-0.612 0.174-0.81 0.179-0.178 0.397-0.464 0.595-0.696 0.198-0.232 0.265-0.397 0.397-0.662 0.132-0.265 0.066-0.497-0.033-0.696-0.1-0.198-0.898-2.166-1.231-2.967-0.324-0.779-0.653-0.673-0.898-0.686-0.232-0.012-0.497-0.015-0.762-0.015s-0.696 0.1-1.062 0.497c-0.366 0.397-1.395 1.363-1.395 3.327s1.428 3.858 1.626 4.123c0.198 0.265 2.795 4.267 6.775 5.984 0.947 0.409 1.687 0.653 2.263 0.836 0.954 0.303 1.821 0.26 2.507 0.158 0.765-0.114 2.348-0.96 2.681-1.888 0.332-0.927 0.332-1.723 0.232-1.888-0.1-0.165-0.365-0.265-0.762-0.464z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;
