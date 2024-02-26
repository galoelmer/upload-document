/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1C3D6F",
        orange: "#F88900",
        green: "#1DA849",
      },
    },
  },
  plugins: [],
};
