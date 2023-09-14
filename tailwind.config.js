/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./index.js"],
  theme: {
    extend: {colors:
      {fviolet:"hsl(257, 40%, 49%)",
      fmagenta:"hsl(300, 69%, 71%)"
      }
    },
    fontFamily:{
      serif:['Poppins']}
  },
  plugins: [],
}


