/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        "rotate-steps": "rotateSteps 5s linear infinite",
        "fade-in": "fadeIn .01s ease-in",
        "fade-out": "fadeOut .6s ease-out",
      },
      keyframes: {
        rotateSteps: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(45deg)" }, // Rotate 45 degrees every 5 seconds
          "100%": { transform: "rotate(45deg)" }, // Rotate 45 degrees every 5 seconds
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "20%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "20%": { opacity: "0.5" },
          "100%": { opacity: "0" },
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
