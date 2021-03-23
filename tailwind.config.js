module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        gray:{
          'lighter': '#525252',
          'middle': '#414141',
          'darker': '#313131',
          'darkest': '#212121',
        },
        'custom-red': '#ca3e47'
      },
      gridTemplateColumns: {
        'layout':'160px 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
