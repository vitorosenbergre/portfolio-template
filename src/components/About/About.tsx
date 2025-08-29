import React from 'react';
import { Fade } from "react-awesome-reveal";
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 about-section">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title">Sobre Mim</h2>
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="about-text">
                <p>
                  Olá, sou Engenheiro Eletricista mestrando em sistemas de potência, com experiência em projetos elétricos, projetos de rede comum (tomada + iluminação), alimentação de PPCI, Sistemas de Proteção contra Descargas Atmosféricas (SPDA), eficiência energética, laudos técnicos, sistemas de CFTV e alarme. Também realizo a execução e documentação de projetos "As Built", garantindo a conformidade com as normas.
                </p>
                <br />
                <p>
                  Busco sempre a inovação e a otimização dos sistemas elétricos, com foco em soluções sustentáveis e no uso eficiente de recursos. Sou apaixonado por engenharia e tecnologia, sempre em busca de soluções criativas para atender às necessidades dos meus clientes.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img src={require('../../assets/images/logo/Engenheiro Álvaro .JPG')} alt="Engenheiro Álvaro" className="img-fluid rounded-circle about-image" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;