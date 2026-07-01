import React, { useState, useEffect, useRef } from 'react';
import './WhatsAppModal.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'received';
  showButton?: boolean;
}

interface WhatsAppModalProps {
  onClose: () => void;
  whatsappNumber: string;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ onClose, whatsappNumber }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Olá! Como posso ajudar?', sender: 'received' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const chatBodyRef = useRef<HTMLDivElement>(null);
  const autoPromptTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractedRef = useRef<boolean>(false);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Setup the 5-second automatic reply timer on mount
  useEffect(() => {
    autoPromptTimerRef.current = setTimeout(() => {
      if (userInteractedRef.current) return;
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        // Double check again before adding message
        if (userInteractedRef.current) return;

        setMessages((prev) => {
          // Prevent duplicate if any message already has a redirect button
          if (prev.some(m => m.showButton)) return prev;

          return [
            ...prev,
            {
              id: 'auto-reply',
              text: 'Fale comigo pelo Whatsapp!',
              sender: 'received',
              showButton: true
            }
          ];
        });
      }, 1200);
    }, 5000);

    return () => {
      if (autoPromptTimerRef.current) {
        clearTimeout(autoPromptTimerRef.current);
      }
    };
  }, []);

  const handleSendMessage = () => {
    const userMessageText = message.trim();
    if (!userMessageText) return;

    // User interacted, cancel any pending auto-prompt
    userInteractedRef.current = true;
    if (autoPromptTimerRef.current) {
      clearTimeout(autoPromptTimerRef.current);
    }
    // Force typing state to false in case the auto-prompt triggered typing right before
    setIsTyping(false);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      sender: 'user'
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // After a delay, add the response and the button
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Fale comigo diretamente via whatsapp...',
        sender: 'received',
        showButton: true
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    // If the user types anything, cancel the auto-prompt
    if (e.target.value.trim()) {
      userInteractedRef.current = true;
      if (autoPromptTimerRef.current) {
        clearTimeout(autoPromptTimerRef.current);
      }
    }
  };

  const handleRedirect = () => {
    const text = 'Ola, gostaria de saber mais sobre seus serviços';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
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

          <div className="whatsapp-modal-body" ref={chatBodyRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
                {msg.showButton && (
                  <button className="whatsapp-redirect-button" onClick={handleRedirect}>
                    <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                    Iniciar Conversa
                  </button>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="chat-message received">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="whatsapp-modal-footer">
            <input
              type="text"
              className="whatsapp-modal-input"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={handleInputChange}
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
