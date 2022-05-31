module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media', // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        primary: "#ff7700",
        "acent-1": "#440405"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'] 
      },
      screens: {
        'sm': '600px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}