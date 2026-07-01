import React, { useState } from 'react';
import './WhatsAppButton.css';
import WhatsAppModal from '../WhatsAppModal/WhatsAppModal';

const WhatsAppButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "5575988156455";

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