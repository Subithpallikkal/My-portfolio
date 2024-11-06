// BackToTop.js
import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-8 bottom-8 z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 invisible'}`}
      onClick={scrollToTop}
    >
      <div className="w-11 h-11  rounded-full border-4 border-orange-500 bg-transparent cursor-pointer flex items-center justify-center">
        <i className="text-2xl text-orange-500">&#8593;</i> {/* Replace with your icon */}
      </div>
    </div>
  );
};

export default BackToTop;
