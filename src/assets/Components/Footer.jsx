import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const Footer = () => {

    const {isDarkMode} = useTheme();
    const textColor = !isDarkMode ? 'text-white':'text-black';
  return (
    <div className={` ${textColor} text-center py-4`}>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Subith. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
