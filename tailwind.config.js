module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      def: "5px 5px 38px 5px #000000;",
      light: "5px 5px 38px -3px rgba(0,0,0,0.74);",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
