/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1B88F4",
        secondary: "#F3F9FF",
        orange: "#FF7724",
        dark: "#212731",
        darkText: "2C384A",
        darkLightText: "4B5665",
        darkLight: "#343434",
        light: "#FBFCFD",
      },
      backgroundColor: {
        primary: "#1B88F4",
        secondary: "#F3F9FF",
        orange: "#FF7724",
        dark: "#212731",
        darkLight: "#343434",
        light: "#FBFCFD",
      },
    },
  },
  plugins: [],
};
