import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 500);
    }
  }, [location.pathname, location.state]);

  return null;
};

export default ScrollHandler;