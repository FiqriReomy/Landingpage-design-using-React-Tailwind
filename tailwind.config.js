/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
      primary2: "Manrope",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/project_one/site-bg.jpg')",
        about: "url('./assets/project_one/about.png')",
        services: "url('./assets/project_one/services.png')",
        content1: "url('./assets/project_two/content_one.webp')",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        popUp: "popUp 0.5s ease-in-out",
        wiggle: "wiggle 5s ease-in-out infinite",
        overlay: "overlay 0.3s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        overlay: {
          "0%": { height: "0px" },
          "100%": { height: "100vh" },
        },
        popUp: {
          "0%": {
            transform: "translateY(150px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        wiggle: {
          from: {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
};
