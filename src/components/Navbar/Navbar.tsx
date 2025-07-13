import React from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickBrand = () => {
    if (location.pathname !== '/') {
      navigate('/');
      // Give a small delay to allow navigation to complete before scrolling
      setTimeout(() => {
        scroller.scrollTo('home', {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100);
    } else {
      scroller.scrollTo('home', {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" onClick={handleClickBrand} style={{ cursor: 'pointer' }}>Engenheiro Álvaro Argôlo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>Sobre</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projetos</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contato</ScrollLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;