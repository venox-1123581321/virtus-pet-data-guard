/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'virtus-blue': '#0F1424',
        'virtus-cyan': '#2ACCE0',
        'virtus-green': '#2EC866',
        'virtus-gold': '#D79F2C',
        'virtus-purple': '#7F42F5',
        'virtus-black': '#090A0F'
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace']
      },
    },
  },
  plugins: [],
};