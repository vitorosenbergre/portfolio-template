import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };

    handleScroll();

    return () => {
      // Cleanup if needed
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;