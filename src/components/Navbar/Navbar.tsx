import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (target: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Delay scrolling until after navigation
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100);
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <button className="navbar-brand" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit' }}>Engenheiro Álvaro Argôlo</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavigation('about')} style={{ cursor: 'pointer' }}>Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavigation('projects')} style={{ cursor: 'pointer' }}>Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavigation('contact')} style={{ cursor: 'pointer' }}>Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;