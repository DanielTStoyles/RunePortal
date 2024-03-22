/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        elmessiri: ['"El Messiri"', "sans-serif"],
      },
      colors: {
        "runeportal-grey": "#1F1F1F",
        "runeportal-darkpurple": "#0A0A0A",
        "runeportal-buttonpurple": "#5c3484",
        "runeportal-background-dark": "#0A090B",
        "runeportal-cardBackground": "#28272A",
        "rp-buttonHover": "#492E6B",
        "rp-buttonNormal": "#583782",
        "gray-700": "#272323",
        "gray-600": "#5d5e1f",
        "nav-bg": "#15111e",
        "side-nav": "#100D17",
        "top-purp": "#15111E",
        "bottom-black": "#0F0D11",
        "button-border": "#583782",
        "comp-color": "#25222B",
      },
      backgroundImage: {
        "purple-gradient":
          " linear-gradient(to bottom, #15111e, #14101b, #130f18, #110e15, #0f0d11)",
        "circle-gradient":
          "radial-gradient(circle, #18112b, #171024, #160f1e, #130e18, #0f0d11)",
        "landing-gradient": "linear-gradient(#15111E 100%, #0F0D11 100%)",
      },
      gridTemplateColumns: {
        profile: "repeat(auto-fit, minmax(240px, 1fr))",
      },
    },
  },
  plugins: [],
};
