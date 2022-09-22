/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: ({ opacityVariable }) =>
          `rgba(var(--accent) / var(${opacityVariable}))`,
        content: ({ opacityVariable }) =>
          `rgba(var(--content) / var(${opacityVariable}))`,
        foreground: ({ opacityVariable }) =>
          `rgba(var(--foreground) / var(${opacityVariable}))`,
        background: ({ opacityVariable }) =>
          `rgba(var(--background) / var(${opacityVariable}))`,
        edge: ({ opacityVariable }) =>
          `rgba(var(--edge) / var(${opacityVariable}))`,
      },

      backgroundImage: {
        main: "url('/public/images/universe.jpg')",
      },
    },
  },
  plugins: [],
};
