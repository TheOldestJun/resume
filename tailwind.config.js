/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    container: {
      padding: "20px",
      center: true,
    },
    extend: {},
    plugins: [],
  },
};
