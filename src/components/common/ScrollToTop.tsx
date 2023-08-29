import React from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }, [pathname]);

  return null;
};

export default ScrollToTop;