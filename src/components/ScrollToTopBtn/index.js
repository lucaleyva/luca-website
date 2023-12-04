import React from 'react';
import './styles.css';

const ScrollToTopBtn = () => {
  return (
    <button id="scrollToTopBtn" onClick={() => window.scrollTo(0, 0)}>
      Scroll to Top
    </button>
  );
};

export default ScrollToTopBtn;

