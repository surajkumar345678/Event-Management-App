/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "heading-color": "#1E2022",
        "subtitle-color": "#989090",
        "background-color": "#ffffff",
        "logo-color": "#CF2D2D",
        "border-color": "#B0BABF",
        "header-icon-color": "#b1babf",
      },
    },
  },
  plugins: [],
};
