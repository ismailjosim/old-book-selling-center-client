module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f68213",

          "secondary": "#2c3e50",

          "accent": "#6FBF18",

          "neutral": "#232323",

          "base-100": "#FFFFFF",

          "info": "#80C0EA",

          "success": "#74ECC6",

          "warning": "#F9AD5D",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
