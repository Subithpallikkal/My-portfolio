import React from 'react';
import '../Animation/Card.css'; // Ensure the CSS is imported

function Card({ projects }) {
  return (
    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 px-4 md:px-8 lg:px-16 gap-24">
      {projects.map((project, index) => (
        <div className="card relative group" key={index}>
          <div className="content sm:w-[250px] sm:h-[300px] md:w-[250px] md:h-[350px] lg:w-[350px] lg:h-[450px] bg-white shadow-lg transform transition-transform duration-300 group-hover:rotate-y-180 rounded-3xl ">
            {/* Front Side */}
            <div className="back w-full h-full relative overflow-hidden rounded-lg bg-gray-800 text-white p-4 flex flex-col justify-end items-center transform rotate-y-180">
              <img
                src={project.image}
                alt={project.name}
                className="absolute w-full h-full object-cover top-0 left-0 opacity-75"
              />
              <h2 className="relative z-10 text-lg md:text-xl lg:text-2xl font-semibold mb-4">
                {project.name}
              </h2>
            </div>
            
            {/* Back Side */}
            <div className="front w-full h-full absolute top-0 left-0 bg-white p-6 rounded-lg flex flex-col justify-center items-center ">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                More about {project.name}
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {project.details}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
