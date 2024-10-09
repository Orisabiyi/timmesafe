/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mint-green": "#B5D8C0",
      },

      fontSize: {
        13: "1.3rem",
        16: "1.6rem",
      },
    },
  },
  plugins: [],
};
