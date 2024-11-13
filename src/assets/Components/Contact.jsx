import React, { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const {isDarkMode} = useTheme();
  const textColor = !isDarkMode ? 'text-white':'text-black';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic to handle form submission (API, email, etc.)
  };

  

  return (
    <section className={` ${textColor} min-h-screen flex justify-center font-mplus`} >
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center py-14 ">Get in Touch</h1>
        <form 
          onSubmit={handleSubmit} 
          className="p-10 w-full   shadow-lg border"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-gray-800 opacity-50   text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-800 opacity-50  text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 bg-gray-800 opacity-50  text-white h-32"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 py-2  text-white font-bold hover:bg-orange-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
