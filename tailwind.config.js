/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        'primary': "#F5D19C",
        'secondary': "#01514A",
      },
      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif'],
      } 
    },
  },
  plugins: [],
}

