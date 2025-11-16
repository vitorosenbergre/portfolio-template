import React, { useState } from 'react';
import './WhatsAppModal.css';

interface WhatsAppModalProps {
  onClose: () => void;
  whatsappNumber: string;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ onClose, whatsappNumber }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
    }
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="whatsapp-modal-overlay">
        <div className="whatsapp-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="whatsapp-modal-header">
            <img src={require('../../assets/images/logo/Engenheiro Álvaro .JPG')} alt="Profile" className="profile-pic" />
            <div className="profile-info">
              <h4>Álvaro Argôlo</h4>
              <p>Online</p>
            </div>
            <button className="whatsapp-modal-close-button" onClick={onClose}>&times;</button>
          </div>
          <div className="whatsapp-modal-body">
            <div className="chat-message received">
              <p>Olá! Como posso ajudar?</p>
            </div>
          </div>
          <div className="whatsapp-modal-footer">
            <input
              type="text"
              className="whatsapp-modal-input"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="whatsapp-modal-send-button" onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppModal;
