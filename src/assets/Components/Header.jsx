import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Added icons for mobile menu
import Code from "../Icons/Code.png";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu open/close

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [isDarkMode]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 p-4 font-mplus flex justify-between items-center ${isDarkMode ? 'text-black' : 'text-white'}`} style={{ zIndex: 2 }}>
      <img src={Code} alt="code" className={`${isDarkMode ? 'invert' : ''} w-10`} />

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-10 font-bold text-xl sm:text-sm lg:text-md">
        <a href="#about" className="hover:text-orange-400">About</a>
        <a href="#tech-stacks" className="hover:text-orange-400">Tech-Stacks</a>
        <a href="#projects" className="hover:text-orange-400">Projects</a>
        <a href="#contact" className="hover:text-orange-400">Contact</a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden">
        <FontAwesomeIcon 
          icon={menuOpen ? faTimes : faBars} 
          size="2x" 
          onClick={handleMenuToggle} 
          className="cursor-pointer"
        />
      </div>

      {/* Theme Toggle */}
      <motion.div
        onClick={toggleTheme}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: isDarkMode ? 360 : 0,
          color: !isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer pr-8"
      >
        <FontAwesomeIcon 
          icon={isDarkMode ? faMoon : faSun} 
          size="2x" 
        />
      </motion.div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-center sm:hidden">
          <a href="#about" className="block py-2 text-white hover:bg-orange-400">About</a>
          <a href="#tech-stacks" className="block py-2 text-white hover:bg-orange-400">Tech-Stacks</a>
          <a href="#projects" className="block py-2 text-white hover:bg-orange-400">Projects</a>
          <a href="#contact" className="block py-2 text-white hover:bg-orange-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
