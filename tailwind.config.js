/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
    colors:{
    "darkgray": "#262626",
    "white":"#ffffff",
    "black":"#000000",
    "hote-cinamon":"#cf6c2a",
    "dark-hote-cinemon":"#000000",
    "green-gossamer":"#56b193",
    "electric-violet":"#ede5ff",
    "dark-electric-violet":"#5706ac",
    "cherry-pie":"#c5a7ff"
    },
    fontFamily:{
    "primary-font":["Lato", "sans-serif"],
    "secondary-font":["Public Sans", "serif"]
    }
    },
  },
  plugins: [],
}

