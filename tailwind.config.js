module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        crimsonRed: '#88292F',
        championGreen: '#0E483E',
        croissantYellow: '#FFCB77',
        skyBlue: '#DCEDFF',
        white: '#FFFFFF'
      },
      fontFamily: {
        'sans': 'Source Sans Pro, sans-serif',
        'serif': 'Libre Baskerville, serif'
      },
      fontWeight: {
        hairline: 100,
        extralight: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      }
  },
  plugins: [],
}
