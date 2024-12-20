/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(67,66,106)',
        'custom-pink': 'rgb(151,64,99)',
      },
      backgroundImage: {
        'arrow-bg': "url('./src/assets/arraow.png')",
      },

    },
  },
  plugins: [require('flowbite/plugin')],
}