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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}