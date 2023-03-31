/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        body: "var(--text-body)",
        heading: "var(--text-heading)",
        line: "var(--line-color)",
      },
    },
  },
  plugins: [],
};
