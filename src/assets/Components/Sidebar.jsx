import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../Context/ThemeContext';

const Sidebar = () => {
    const {isDarkMode} = useTheme();
    const textColor = !isDarkMode ? 'text-white' : 'text-black';

  return (
    <motion.div 
      initial={{ x: 250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`fixed top-0 left-0 h-full w-20  ${textColor} sm:hidden md:block pt-32  flex flex-col justify-center items-center font-mplus`} style={{zIndex:1}}
    >
      <div className="mt-8 flex flex-col items-center space-y-24  font-bold text-xl">
        <a href="#contact" className="block hover:text-gray-400 transform -rotate-90">Contact</a>
        <a href="#projects" className="block hover:text-gray-400 transform -rotate-90">Projects</a>
        <a href="#projects" className="block hover:text-gray-400 transform -rotate-90">Tech Stacks</a>
        <a href="#about" className="block hover:text-gray-400 transform -rotate-90">About</a>
      </div>
    </motion.div>
  );
};

export default Sidebar;
