import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollHandler from './components/ScrollHandler/ScrollHandler';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollHandler />
      <div className="main-content-padding">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Element name="home">
                <Home />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="projects">
                <Projects />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;