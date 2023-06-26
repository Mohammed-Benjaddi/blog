/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        'custom': 'calc(100vh - 192px)',
        'custom-md': 'calc(100vh - 145px)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
        '400': '400ms',
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      zIndex: {
        '100': '100',
      },
      animation: {
        'show-msg': 'fade 300ms linear',
      },
      keyframes: {
        fade: {
          '0%': { top: '60%' },
          '100%': { transform: '50%' },
        }
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Pacifico: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
