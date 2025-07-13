import React from 'react';
import './Modal.css';

interface ModalProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, type, onClose }) => {
  return (
    <div className={`modal-overlay ${type}`} onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}>
      <div className="modal-content">
        {type === 'success' ? (
          <i className="bi bi-check-circle-fill modal-icon success"></i>
        ) : (
          <i className="bi bi-x-circle-fill modal-icon error"></i>
        )}
        <p className="modal-message">{message}</p>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default Modal;
