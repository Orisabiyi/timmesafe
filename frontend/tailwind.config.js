/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mint-green": "#B5D8C0",
        "dark-mint-green": "#8FBF9E",
        "dark-gray": "#3B3B3B",
        "off-white": "#F8F9FA",
        "light-gray": "#F2F2F2",
      },

      fontSize: {
        13: "1.3rem",
        16: "1.6rem",
        18: "1.8rem",
        32: "3.2rem",
      },
    },
  },
  plugins: [],
};
