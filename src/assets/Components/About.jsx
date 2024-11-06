import React from 'react';
import Img from '../Icons/github.png';
import { useTheme } from '../Context/ThemeContext';
import "../Animation/About.css";


const About = () => {
    const { isDarkMode } = useTheme();
    const textColor = !isDarkMode ? 'text-white' : 'text-black';

    return (
        <section
            className={`${textColor} relative lg:min-h-screen sm:w-full lg:w-screen flex flex-col lg:flex-row items-center`}
            style={{
                backgroundImage: !isDarkMode
                    ? "repeating-linear-gradient(0deg, rgb(32,32,32) 0px, rgb(32,32,32) 1px, transparent 1px, transparent 21px), " +
                      "repeating-linear-gradient(90deg, rgb(32,32,32) 0px, rgb(32,32,32) 1px, transparent 1px, transparent 21px), " +
                      "linear-gradient(90deg, hsl(87,0%,9%), hsl(87,0%,9%))"
                    : "repeating-linear-gradient(0deg, rgb(221,221,221) 0px, rgb(221,221,221) 1px, transparent 1px, transparent 21px), " +
                      "repeating-linear-gradient(90deg, rgb(221,221,221) 0px, rgb(221,221,221) 1px, transparent 1px, transparent 21px), " +
                      "linear-gradient(90deg, rgb(211,210,210), rgb(211,210,210))",
                zIndex: 1,
            }}
        >
            
            <div className="flex items-center justify-center w-full lg:w-1/2 h-full px-4 lg:px-40 mb-10 lg:mb-0">
                {/* <div className="slider-thumb"></div> */}
            </div>
            <div className="container mx-auto px-8 lg:px-20 flex flex-col items-center lg:items-start font-mplus text-wrap">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-6 leading-relaxed">
                    Hi, I'm <span className="text-yellow-500 font-bold">Subith</span>, a passionate and dedicated MERN stack developer with expertise in creating modern web applications. My focus is on developing scalable, high-performing, and responsive applications using the latest technologies in the web development ecosystem.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                    I specialize in working with React for building intuitive and dynamic user interfaces, while leveraging the power of MongoDB, Express, and Node.js for backend services. With a strong foundation in full-stack development, I aim to deliver end-to-end solutions that meet both client and user needs.
                </p>
                <p className="text-lg leading-relaxed">
                    Whether you're looking for someone to build a new web app from scratch or improve an existing project, I'm here to help! Let's build something great together.
                </p>
            </div>
        </section>
    );
};

export default About;
