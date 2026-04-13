import { FaWhatsapp } from 'react-icons/fa';

const WhatsappFloat = () => {
    return(
        <a
        className="whatsapp-float"
        href="https://wa.me/918056477261?text=Hi%20Login360%2C%20I%20want%20to%20know%20about%20the%20Course%20details"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} color="#fff" />
      </a>
    )
}

export default WhatsappFloat;