module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './pages/**/*.md',
      './src/**/*.vue',
      './src/**/*.md',
      './src/**/*.ts',
    ],
  },
  plugins: [require('@tailwindcss/custom-forms')],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        link: '#fedc5d',
        primary: '#616161',
        dark: '#333333',
        light: '#BDBDBD',
      },
      colors: {
        colored: '#ed6965',
        primary: {
          button: '#333333',
          background: '#81B5CB',
        },
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      mobile: { max: '679px' },
      tablet: '680px',
      desktop: '1020px',
      maxiw: '1500px',
    },
  },
  corePlugins: {
    animation: false,
    container: false,
    boxShadow: false,
    ringOffsetColor: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    tableLayout: false,
    textOpacity: false,
  },
}
