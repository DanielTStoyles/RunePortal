/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "runeportal-grey": "#1F1F1F",
        "runeportal-darkpurple": "#0A0A0A",
        "runeportal-buttonpurple": "#53358D",
        "runeportal-background-dark": "#0A090B",
        "runeportal-cardBackground": "#28272A",
        "gray-700": "#272323",
        "gray-600": "#5d5e1f",
      },
      gridTemplateColumns: {
        profile: "repeat(auto-fit, minmax(240px, 1fr))",
      },
    },
  },
  plugins: [],
};
