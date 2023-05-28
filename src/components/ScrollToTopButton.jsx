import React, { useState, useEffect } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import '../styles/scrollToTopButton.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}>
      <button onClick={scrollToTop}>
        <ArrowUpOutlined />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
