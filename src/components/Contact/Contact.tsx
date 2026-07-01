import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const whatsappNumber = "5575988156455";
  const whatsappMessage = "Ola, gostaria de saber mais sobre seus serviços";

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="contact-subtitle">
          Estou disponível para novos projetos, consultorias e parcerias. Siga-me ou envie uma mensagem nas redes sociais!
        </p>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="social-links">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon whatsapp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a 
                href="https://www.instagram.com/eng.alvaroargolo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/alvaroargolo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;