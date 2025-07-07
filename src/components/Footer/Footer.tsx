import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Portfólio de Álvaro Argolo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;