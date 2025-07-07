import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="d-flex vh-100 text-center">
      <div className="container m-auto">
        <h1>Portfólio de Álvaro Argolo</h1>
        <TypeAnimation
          sequence={[
            'Engenheiro Eletricista',
            1000,
            'Projetos de Rede Comum',
            1000,
            'Projetos de SPDA',
            1000,
            'Projetos de CFTV',
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