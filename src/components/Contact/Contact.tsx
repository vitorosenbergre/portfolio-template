import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'' | 'success' | 'error' | 'sending' | 'idle' >('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = 'service_6qvwhsf'; // Substitua pelo seu Service ID do EmailJS
    const templateId = 'template_u6fmerm'; // Substitua pelo seu Template ID do EmailJS
    const publicKey = 'jkGRwQpLlY3hBc1Zr'; // Substitua pela sua Public Key do EmailJS

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'vicorintias3@gmail.com' // O email do destinatário
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              {status === 'success' && <p className="text-success mt-2">Mensagem enviada com sucesso!</p>}
              {status === 'error' && <p className="text-danger mt-2">Erro ao enviar mensagem. Tente novamente.</p>}
            </form>
          </div>
          <div className="col-md-5">
            <div className="contact-info">
              <h3>Informações de Contato</h3>
              <p className="d-flex align-items-center"><i className="bi bi-envelope"></i> Email: vicorintias3@gmail.com</p>
              <p className="d-flex align-items-center"><i className="bi bi-phone"></i> Telefone: +55 (XX) XXXX-XXXX</p>
              <div className="social-links mt-3">
                <a href="https://www.linkedin.com/in/alvaroargolo/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/alvaroargolo" target="_blank" rel="noopener noreferrer" className="social-icon github"><i className="bi bi-github"></i></a>
                <a href="https://wa.me/5571999999999" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><i className="bi bi-whatsapp"></i></a>
                <a href="https://www.instagram.com/alvaroargolo/" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;