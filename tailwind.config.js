/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleout: {
          from: {
            opacity: "0",
            transform: "scale(0)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)"
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        scaleout: "scaleout 1s ease"
      },
    },
  },
  plugins: [],
};
