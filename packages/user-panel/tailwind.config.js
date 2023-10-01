const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      // colors:{
      //   bgColor:"#2C394B",
      //   // bgColor:"#FAFAFA",
      //   bgDark:"#082032",
      //   bgDarker:"#EBEBEB",
      //   textColor:"#F0F0F0",
      //   lightText:"#B0B0B0",
      //   primary:"#FF6B6C",
      //   greyVariant:"#DADAD9",
      //   secondary:"#5B5F97"
      // },
      // colors:{
      //   bgColor:"#F5FCFF",
      //   // bgColor:"#FAFAFA",
      //   bgDark: "#D9EBFF",
      //   bgDarker: "#C2D9FF",
      //   textColor:"#273e5c",
      //   lightText:"#4d6c82",
      //   primary:"#305d8c",
      //   greyVariant:"#AEBFD6",
      //   secondary:"#5B5F97"
      // },
      colors: {
        // Background Colors
        bgColor: "#1E1E1E",       // Dark background color
        bgDark: "#333333",        // Slightly darker background color
        bgDarker: "#000000",      // Darkest background color
      
        // Text Colors
        textColor: "#FFFFFF",     // White text on dark background
        lightText: "#AEBFD6",     // Lighter text color for secondary information
      
        // Accent Colors
        primary: "#305d8c",       // Primary accent color
        greyVariant: "#767676",   // Grey variant for secondary elements
        secondary: "#5B5F97",     // Secondary accent color
      }
    },
  },
  plugins: [],
};
