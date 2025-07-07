import React from 'react';
import { Fade } from "react-awesome-reveal";

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 about-section">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title">Sobre Mim</h2>
          <p>
            Sou um engenheiro eletricista apaixonado por inovação e tecnologia.
            Minhas habilidades incluem projeto de sistemas elétricos, automação
            industrial, eletrônica de potência e desenvolvimento de firmware.
            Busco soluções eficientes e sustentáveis para os desafios da engenharia.
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default About;