import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import img from "../Icons/bootstrap.png"


const About = () => {
    const { isDarkMode } = useTheme();
    const textColor = !isDarkMode ? 'text-white' : 'text-black';

    return (
        <section
            className={`${textColor} relative lg:min-h-screen sm:w-full lg:w-screen flex flex-col lg:flex-row items-center`}
            style={{
                backgroundImage: !isDarkMode
                    ? "repeating-linear-gradient(45deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(22.5deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(157.5deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, rgba(250,250,250, 0.02) 0px, rgba(250,250,250, 0.02) 1px,transparent 1px, transparent 12px),linear-gradient(90deg, rgb(0,6,30),rgb(30,0,0))"
                    : "repeating-linear-gradient(45deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(22.5deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(157.5deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.02) 1px,transparent 1px, transparent 12px),linear-gradient(90deg, rgb(225,225,225),rgb(153,153,153))",
                zIndex: 0,
            }}
        >
            
            <div className="relative flex items-center sm:hiddden md:block justify-center w-full lg:w-1/2 h-full px-4 lg:px-40 mb-10 lg:mb-0 ">
                {/* <div className="slider-thumb "></div> */}
                <img src={img} alt=""  className='relative slider-thumb sm:w-40 lg:w-full rounded-full mt-8'/>
            </div>
            <div className="container mx-auto px-8 lg:px-20 flex flex-col items-center lg:items-start font-mplus text-wrap ">
                <h1 className="text-4xl font-bold mb-4">Who Am I</h1>
                <p className="lg:text-lg mb-6 leading-relaxed sm:text-sm text-balance ">
                    Hi, I'm <span className="text-yellow-500 font-bold">Subith</span>, a MERN stack and UX/UI developer skilled in building modern, responsive web applications. I specialize in React for dynamic UIs and utilize MongoDB, Express, and Node.js to create scalable backend services. With a solid full-stack foundation and experience in Figma, Photoshop, and Adobe XD, I’m committed to delivering seamless, user-focused solutions that meet client goals. Let’s collaborate to bring your vision to life!
                </p>
            </div>
        </section>
    );
};

export default About;
