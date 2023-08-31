import React from 'react';
import { useLocation } from 'react-router-dom';
// import { durationScrollTo } from 'utils/helper';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
    // durationScrollTo(0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;