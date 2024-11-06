import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const Projects = () => {
    const { isDarkMode } = useTheme();
    const textColor = !isDarkMode ? 'text-white' : 'text-black';
    const cardBgColor = !isDarkMode ? 'bg-gray-800' : 'bg-white';
    const cardTextColor = !isDarkMode ? 'text-white' : 'text-gray-800';

    const projects = [
        {
            name: "Al Mango - Food Menu Web App",
            details:
                "The Al-Mango web app transformed the dining experience for a cozy café in Oman by showcasing Omani flavors and fresh mango-inspired dishes.",
            image: "https://dummyimage.com/400x200/000/fff&text=Al+Mango", 
        },
        {
            name: "Walksus",
            details:
                "An E-commerce web application for shoes with product listing, wishlist, cart, and secure checkout. It includes user profiles, order tracking, size charts, and comprehensive admin tools for managing users, categories, products, and inventory.",
            image: "https://dummyimage.com/400x200/000/fff&text=Walksus",
        },
        {
            name: "Al Mango - Food Menu Web App",
            details:
                "The Al-Mango web app transformed the dining experience for a cozy café in Oman by showcasing Omani flavors and fresh mango-inspired dishes.",
            image: "https://dummyimage.com/400x200/000/fff&text=Al+Mango",
        },
        {
            name: "Walksus",
            details:
                "An E-commerce web application for shoes with product listing, wishlist, cart, and secure checkout. It includes user profiles, order tracking, size charts, and comprehensive admin tools for managing users, categories, products, and inventory.",
            image: "https://dummyimage.com/400x200/000/fff&text=Walksus",
        },
    ];

    return (
        <section className={`${textColor} py-10 min-h-screen w-full font-mplus flex flex-col justify-center items-center`}>
            <h1 className="text-center text-4xl font-bold mb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 lg:px-16">
                {projects.map((project, index) => (
                    <div
                        className={`rounded-lg ${cardBgColor} shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105`}
                        key={index}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 lg:h-60 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h2 className={`text-2xl font-semibold ${cardTextColor} mb-4`}>{project.name}</h2>
                            <p className={`${cardTextColor} text-sm leading-relaxed`}>{project.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
