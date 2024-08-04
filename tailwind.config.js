/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: { xd: "0 4px 20px" },
      backgroundColor: { blue: "#041e55" },
    },
  },
  plugins: [],
};
