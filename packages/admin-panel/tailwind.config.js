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
      colors:{
        bgColor:"#FAFAFA",
        bgDark:"#F5F5F5",
        textColor:"#36382E",
        primary:"#FF6B6C",
        greyVariant:"#DADAD9",
        secondary:"#5B5F97"
      }
    },
  },
  plugins: [],
};
