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
      colors:{
        bgColor:"#F5FCFF",
        // bgColor:"#FAFAFA",
        bgDark: "#D9EBFF",
        bgDarker: "#C2D9FF",
        textColor:"#273e5c",
        lightText:"#4d6c82",
        primary:"#305d8c",
        greyVariant:"#AEBFD6",
        secondary:"#5B5F97"
      }
    },
  },
  plugins: [],
};
