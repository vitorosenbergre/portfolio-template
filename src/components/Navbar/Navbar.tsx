import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (target: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
    // Close the navbar after navigation on mobile
    if (window.innerWidth <= 768) { // Adjust breakpoint as needed
      const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
      if (navbarToggler && navbarToggler.classList.contains('collapsed')) {
        // Do nothing, it's already collapsed
      } else if (navbarToggler) {
        navbarToggler.click(); // Simulate click to close
      }
    }
  };

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
          navbarToggler.click(); // Simulate click to close
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <button className="navbar-brand" onClick={() => { console.log('Clicked: Home (Brand)'); handleNavigation('home'); }} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: '0', margin: '0', color: 'inherit', fontWeight: 'inherit' }}>Engenheiro Álvaro Argôlo</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => { console.log('Clicked: Home'); handleNavigation('home'); }} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: '0', margin: '0', color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => { console.log('Clicked: About'); handleNavigation('about'); }} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: '0', margin: '0', color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}>Sobre</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => { console.log('Clicked: Projects'); handleNavigation('projects'); }} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: '0', margin: '0', color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}>Projetos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => { console.log('Clicked: Contact'); handleNavigation('contact'); }} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: '0', margin: '0', color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}>Contato</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;