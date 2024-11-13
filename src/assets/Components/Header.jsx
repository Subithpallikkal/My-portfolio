import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Code from "../Icons/Code.png";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0   left-0 right-0 p-4 font-mplus flex justify-between items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
      style={{ zIndex: 2 }}
    >
      {/* Logo */}
      <img src={Code} alt="code" className={`${!isDarkMode ? 'invert ' : ''} w-10 sm:hidden md:block  `} />

      {/* Desktop Menu (Visible only on screens larger than 768px) */}
      <div className="hidden md:flex space-x-10 font-bold text-lg shadow-2xl px-8 py-3 rounded-full  transition-transform backdrop-blur-sm ">
        <a href="#about" className="hover:text-orange-400">About</a>
        <a href="#tech-stacks" className="hover:text-orange-400">Tech-Stacks</a>
        <a href="#projects" className="hover:text-orange-400">Projects</a>
        <a href="#contact" className="hover:text-orange-400">Contact</a>
      </div>

      {/* Mobile Menu Toggle (Visible only on screens smaller than 768px) */}
      <div className="md:hidden">
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          size="2x"
          onClick={handleMenuToggle}
          className={`${!isDarkMode ? 'invert' : 'invert'} w-10 cursor-pointer  `}
        />
      </div>

      {/* Theme Toggle */}
      <motion.div
        onClick={toggleTheme}
        whileHover={{ scale: 1.2 }}
        animate={{
          rotate: !isDarkMode ? 360 : 0,
          color: !isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer"
      >
        <FontAwesomeIcon icon={!isDarkMode ? faMoon : faSun} size="2x" />
      </motion.div>

      {/* Mobile Dropdown Menu (Visible only when menuOpen is true and screen size is smaller than 768px) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white text-center md:hidden">
          <a href="#about" className="block py-2 hover:bg-orange-400" onClick={handleMenuToggle}>About</a>
          <a href="#tech-stacks" className="block py-2 hover:bg-orange-400" onClick={handleMenuToggle}>Tech-Stacks</a>
          <a href="#projects" className="block py-2 hover:bg-orange-400" onClick={handleMenuToggle}>Projects</a>
          <a href="#contact" className="block py-2 hover:bg-orange-400" onClick={handleMenuToggle}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
