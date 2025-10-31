module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
    "./public/index.html"         // If you use static HTML
  ],
  theme: {
    extend: {
      colors:{
        'primary1':"#eab308",
        'primary2':"#052E16"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}

