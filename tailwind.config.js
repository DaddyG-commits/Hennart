/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        henna: {
          50: "#faf6f1",
          100: "#f3e8d8",
          700: "#8b3a1a",
          800: "#6f2d14",
          900: "#4a1e0d",
        },
      },
    },
  },
  plugins: [],
};
