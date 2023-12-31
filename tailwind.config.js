module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Open Sans"],
    },
    // gridTemplateColumns:{"1/5": "1fr 5fr"} 
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}