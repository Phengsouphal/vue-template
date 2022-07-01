module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      height: {
        128: "32rem",
      },
      colors: {
        "light-blue-green": "#5cf4fe",
        "light-blue": "#4daffe",
      },
    },
  },
  plugins: [],
};
