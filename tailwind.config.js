/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'bg-noise': "url('./assets/images/bg/noise.gif')",
      }
    },
    colors: {
      "white": "#fff",
      "black": "#000",
      "gray-border": "#2b2b33",
      "background-dark": "#13131d",
      "color-body": "#acacac",
      "primary-alta": "#212e48",
      "color-primary": "#00a3ff",
      "background-color-1": "#24243557",
      "background-color-3": "#151521",
      "background-color-2": "#13131d",
      "background-color-4": "#242435",
      "color-border": "#ffffff14",
      "color-dark": "#1d1d1d",
      "color-light-body": "#65676b",
      "color-border-white": "#00000024",
      "color-gray-2": "#f5f8fa",
      "light-gray": "#828283",
    }
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}

