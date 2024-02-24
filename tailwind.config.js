/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  darkMode: 'class', // Assuming 'class' is the preferred dark mode variant
  theme: {
    extend: {
      fontFamily: {
        h1:["Great Vibes"]
      }
    }, // You can extend the default theme here if needed
  },
  plugins: [
    require('flowbite/plugin'), // Assuming you are including a plugin called 'flowbite'
  ],
};


