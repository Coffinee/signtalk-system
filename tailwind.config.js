/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    // "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },

  },

  plugins: [
    // require('flowbite/plugin')

  ],
}
