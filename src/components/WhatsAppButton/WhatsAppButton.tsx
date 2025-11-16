import React, { useState } from 'react';
import './WhatsAppButton.css';
import WhatsAppModal from '../WhatsAppModal/WhatsAppModal';

const WhatsAppButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "557588965492"; // Substitua pelo seu número de WhatsApp (ex: 5551999999999)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="whatsapp-button" onClick={handleOpenModal}>
        <i className="fab fa-whatsapp"></i>
      </button>
      {isModalOpen && (
        <WhatsAppModal
          onClose={handleCloseModal}
          whatsappNumber={whatsappNumber}
        />
      )}
    </>
  );
};

export default WhatsAppButton;