/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   fetchingButtonLoader: "fetchingButtonLoader 0.5s infinite linear",
      // },
      // keyframes: {
      //   fetchingButtonLoader: {
      //     "100%": { backgroundPosition: "0 0" },
      //   },
      // },
    },
  },
  plugins: [],
};
