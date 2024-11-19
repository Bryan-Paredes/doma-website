/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "#d6d6d6",
        "primary-50": "#f1f2fc",
        "primary-100": "#e6e7f9",
        "primary-200": "#d2d3f3",
        "primary-300": "#b6b8eb",
        "primary-400": "#9b98e1",
        "primary-500": "#897fd5",
        "primary-600": "#7865c6",
        "primary-700": "#5f4da1",
        "primary-800": "#55468d",
        "primary-900": "#473e71",
        "primary-950": "#2a2442",
      },
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      boxShadow: {
        "shadow-neumorphism":
          "20px 20px 60px #929292, -20px -20px 60px #ffffff",
      },
      backgroundColor: {
        "background-neumorphism": "linear-gradient(145deg, #64a8f0, #548dca);",
      },
      backgroundImage: {
        "background-image": "url('/background.webp')",
        "bento-image1": "url('/bento/BentoImage1.webp')",
        "bento-image2": "url('/bento/BentoImage2.webp')",
        "bento-image3": "url('/bento/BentoImage3.webp')",
        "bento-image4": "url('/bento/BentoImage4.webp')",
        "background-commercial": "url('/commercial.webp')",
        "background-residential": "url('/residential.webp')",
      },
    },
    animation: {
      fade: "fade-in-up 1s ease-in-out 0.25s 1",
    },
    keyframes: {
      "fade-in-up": {
        "0%": {
          opacity: 0,
          transform: "translate3d(0, 100%, 0)",
        },
        "100%": {
          opacity: 1,
          transform: "translate3d(0,0,0)",
        },
      },
    },
  },
  plugins: [],
};
