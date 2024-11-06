module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust these paths based on your project structure
  ],
  darkMode:'class',
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      six: "600px"
    },
    extend: {
      fontFamily:{
        'mplus': ['"M PLUS 1 Code"', 'monospace'],
        'racing': ['"Racing Sans One"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
