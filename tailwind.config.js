/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white":"#fff",
      "gray-border": "#2b2b33",
      "background-dark": "#13131d",
      "color-body": "#acacac",
      "primary-alta": "#212e48",
      "color-primary": "#00a3ff"
    }
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}

