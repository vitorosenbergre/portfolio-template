import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Modal from '../Modal/Modal'; // Import the new Modal component

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'' | 'success' | 'error' | 'sending' | 'idle' >('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = 'service_ba2r7o9'; // Substitua pelo seu Service ID do EmailJS
    const templateId = 'template_1zczedb'; // Substitua pelo seu Template ID do EmailJS
    const publicKey = '-L0k3UXLSBf_6gX14'; // Substitua pela sua Public Key do EmailJS

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'alvaroargolo@gmail.com' // O email do destinatário
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        // The timeout will now close the modal
        setTimeout(() => {
          setStatus('idle');
        }, 2000); // Mensagem de sucesso desaparece após 2 segundos
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
        // The timeout will now close the modal
        setTimeout(() => {
          setStatus('idle');
        }, 2000); // Mensagem de erro desaparece após 2 segundos
      });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="row justify-content-center">
          <div className="col-12 mb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-field-wrapper">
                <label htmlFor="name" className="form-label">Nome</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="from_name" // Adicionado para EmailJS
                  placeholder="Seu nome" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 form-field-wrapper">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="from_email" // Adicionado para EmailJS
                  placeholder="seu@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 form-field-wrapper">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message" // Adicionado para EmailJS
                  rows={5} 
                  placeholder="Sua mensagem" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-field-wrapper mt-4">
                <button type="submit" className="btn btn-primary" disabled={status === 'sending' || !name || !email || !message}>
                  {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 mt-5">
            <h4 className="text-center mb-4 section-title-social">Redes sociais</h4>
            <div className="social-links mt-3">
              <a href="https://wa.me/557588156455" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><i className="bi bi-whatsapp"></i></a>
              <a href="https://www.instagram.com/eng.alvaroargolo" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/alvaroargolo/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      {status === 'success' && (
        <Modal
          message="Mensagem enviada com sucesso!"
          type="success"
          onClose={() => setStatus('idle')}
        />
      )}
      {status === 'error' && (
        <Modal
          message="Erro ao enviar mensagem. Tente novamente."
          type="error"
          onClose={() => setStatus('idle')}
        />
      )}
    </section>
  );
};

export default Contact;