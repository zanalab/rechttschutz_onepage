/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: '#3d3d3d',
          yellow: '#ffde59',
          orange: '#ffbd59',
        },
      },
      fontFamily: {
        primary: ['var(--font-montserrat)'],
        secondary: ['var(--font-openSans)'],
      },
    },
  },
  plugins: [require('tailgrids/plugin')],
};
