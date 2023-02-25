/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        body: "var(--color-bg-body)",
        card: "var(--color-bg-card)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
      },
    },
  },
  plugins: [],
};
