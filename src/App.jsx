import React, { useState, useEffect } from 'react';
import About from './assets/Components/About';
import Skills from './assets/Components/Skills';
import Projects from './assets/Components/Projects';
import Contact from './assets/Components/Contact';
import Footer from './assets/Components/Footer';
import Hero from './assets/Components/Hero';
import { ThemeProvider } from './assets/Context/ThemeContext';
import Header from './assets/Components/Header'; // Regular navigation bar
import Sidebar from './assets/Components/Sidebar'; // Sidebar component
import BackToTop from './assets/Components/BackToTop'; // Import your BackToTop component
import "./App.css"
import GlowingCursor from './assets/Components/GlowingCursor';




const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleScroll = () => {

    if (window.innerWidth >= 768) {
      if (window.scrollY > 780) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    } else {
      // On smaller screens, ensure the sidebar is not shown
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <GlowingCursor />
      {showSidebar ? <Sidebar /> : <Header />}
      <div  className={`transition-all duration-300 ${showSidebar ? 'ml-0 ' : 'ml-0 '}`}>
        <div>
          <div className='sticky-image '>
        <Hero />
          </div>
          <div className='fa-sticky-image'>
        <About />
           </div>
        </div>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <BackToTop /> {/* Add BackToTop component here */}
    </ThemeProvider>
  );
};

export default App;
