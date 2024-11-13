import React from 'react';
import '../Animation/Skills.css'; // Import the CSS file with your styles
import Git from '../Icons/git.png';
import GitHub from "../Icons/github.png";
import Html from "../Icons/html.png";
import Css from "../Icons/css.png";
import Ts from "../Icons/typescript.png";
import Tailwind from "../Icons/tailwindcss.png";
import Bootstrap from "../Icons/bootstrap.png";
import C from "../Icons/c.png";
import Netlify from "../Icons/netlify.png";
import Vscode from "../Icons/vscode.png";
import Reactjs from "../Icons/logos_react.png";
import Postman from '../Icons/postman.png';
import { useTheme } from '../Context/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const textColor = !isDarkMode ? 'text-white' : 'text-black';

  const skills = [
    { name: 'React.js', icon: Reactjs },
    { name: 'HTML', icon: Html },
    { name: 'CSS', icon: Css },
    { name: 'TypeScript', icon: Ts },
    { name: 'C', icon: C },
    { name: 'Tailwind CSS', icon: Tailwind },
    { name: 'Bootstrap', icon: Bootstrap },
    { name: 'Git', icon: Git },
    { name: 'Postman', icon: Postman },
    { name: 'GitHub', icon: GitHub },
    { name: 'Netlify', icon: Netlify },
    { name: 'VSCode', icon: Vscode }
  ];

  return (
    <section
      className={`${textColor} lg:pl-12 sm:pr-6 lg:min-h-screen lg:w-full  font-mplus py-32 lg:py-8 flex justify-center`}
    >
      <div className="container lg:px-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold lg:pb-4">My Tech Stack</h1>
        <p className="text-sm lg:mb-8 mt-4">Technologies I've been working with recently</p>
        <div className="wrapper sm:pt-32">
          <div
            className="items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xs:gap-4  lg:gap-6 lg:p-6"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className=" item w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-cover bg-center"
                tabIndex="0"
                style={{
                  backgroundImage: `url(${skill.icon})`, // Use the skill's icon directly
                }}
              >
                <span className="sr-only">{skill.name}</span> {/* Screen reader text */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
