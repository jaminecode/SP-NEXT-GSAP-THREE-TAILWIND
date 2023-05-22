/** @type {import('tailwindcss').Config} */

//prettier-ignore
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      saol: ["saol", "sans-serif"],     
    },
    screen: {  
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",   
    },
    extend: {
      screens: {
        xs: "480px",
        bl: "1440px",
        ml: "2000px",
      },
      colors: {
        main: "#E6B697",
    
      },
      height: {
        'screen': '100svh',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
  variants: {
    
  },
};
