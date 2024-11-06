import React, { useEffect, useState } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { useAnimation, motion } from 'framer-motion';
import "../Animation/Hero.css";

const Hero = () => {
    const { isDarkMode } = useTheme();
    const textColor = isDarkMode ? 'text-white' : 'text-black';
    const controls = useAnimation();
    const [currentPosition, setCurrentPosition] = useState(0);
    const [isTyping,setIsTyping] = useState(true)

    const positions = ["MERN Stack Developer", "React Developer", "UI/UX Developer"];

    useEffect(() => {
        // Handle scroll animation
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const elementHeight = document.querySelector('.hero-text')?.offsetTop || 0;

            if (scrollY > elementHeight - windowHeight / 8) {
                controls.start({ opacity: 0, y: -150 });
            } else {
                controls.start({ opacity: 1, y: 0 });
            }
        };

        const typeDuration = 2000;
        const pauseDuration = 1000;
        const reverseDuration  = 2000;

        const cycleEffect = ()=>{
            setIsTyping(true)
            const typingTimeout = setTimeout(()=>{
                setIsTyping(false)
            },typeDuration)

            const reverseTimout = setTimeout(()=>{
                setCurrentPosition((prev)=>(prev+1)% positions.length)
            },typeDuration+pauseDuration+reverseDuration)

            return () =>{
                clearTimeout(typingTimeout)
                clearTimeout(reverseTimout)
            }
        }

        const timeout = cycleEffect()


        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, currentPosition]);

    const handleMouseEnter = (e) => {
        e.target.style.opacity = 0.4;
    };

    const handleMouseLeave = (e) => {
        e.target.style.opacity = 0;
    };

    return (
        <>
            <div
                className="relative sm:w-screen lg:w-full h-screen sm:bg-cover lg:bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/me.png")',
                    zIndex: 0,
                }}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="overlay grid grid-cols-10 grid-rows-3">
                        {Array.from({ length: 60 }).map((_, index) => (
                            <span
                                key={index}
                                onMouseEnter={handleMouseLeave}
                                onMouseLeave={handleMouseEnter}
                                className="bg-black border border-gray-800 opacity-40 h-40"
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className={`absolute top-40 sm:top-56 font-mplus ${textColor} hero-text w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 text-center sm:text-left px-4 sm:px-8 md:px-16`}
            >
                <div className="sm:pl-0 md:pl-4 lg:pl-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Hi👋,</h1>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex justify-center sm:justify-start">
                        My Name Is <span className="text-yellow-500 pl-2 sm:pl-4">Subith</span>
                    </h1>
                    <p className="text-lg sm:text-2xl lg:text-4xl mt-2 ">
                        As a <p className={`text-lg sm:text-2xl lg:text-4xl mt-2 cssanimation typing ${isTyping ? 'typing':'reverseTyping'}`}>
                                {positions[currentPosition]}
                            </p>
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default Hero;
