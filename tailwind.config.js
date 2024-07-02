/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F34213",
        brightpurple: "#5723e7",
        whitegray: "#E8F7EE",
        beaver:"#937666",
        applegreen:"#A1C349",
        richblack:"#0D0C1D",
        ultraviolet:"#474973",
        rust:"#BC3908",
        platinum:"#D9D9D9"
      },
      fontFamily: {
        'Roboto': ["Roboto", "sans-serif"],
        'Ubuntu' :['Ubuntu', "sans-serif"],
        'Monument': ['PPMonumentExtended', 'sans-serif']
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(to right, #00f260, #0575e6)',
        'gradient-purple': 'linear-gradient(to right, #7f00ff, #e100ff)',
        'gradient-blue': 'linear-gradient(to right, #00c6ff, #0072ff)',
      },
    },
  },
  plugins: [],
};
