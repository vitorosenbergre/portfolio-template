import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="d-flex vh-100 text-center">
      <div className="container m-auto">
        <img src={require('../../assets/images/logo/LOGO - Eng. Álvaro.JPG')} alt="Logo" className="home-logo" />
        <h1>Portfólio de Álvaro Argôlo</h1>
        <TypeAnimation
          sequence={[
            'Instalações Elétricas Rede Comum',
            1000,
            'Projetos Luminotécnicos',
            1000,
            'Projetos de Lógica',
            1000,
            'Alimentação do PPCI',
            1000,
            'Projetos de CFTV',
            1000,
            'Projeto Completo de SPDA',
            1000,
            'Energia Solar',
            1000,
            'Laudos Técnicos',
            1000,
          ]}
          wrapper="p"
          speed={50}
          className="lead"
          repeat={Infinity}
        />
      </div>
    </section>
  );
};

export default Home;