/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#173D2C',
          dark: '#0E261C',
          light: '#23573F',
          muted: '#1D4533',
        },
        fresh: {
          DEFAULT: '#6D9F72',
          light: '#88B78C',
          dark: '#56845B',
        },
        sage: {
          DEFAULT: '#DCE8DA',
          light: '#EEF4EC',
          border: '#C9DBC6',
        },
        cream: {
          DEFAULT: '#FAF7F0',
          pure: '#FFFFFF',
          dark: '#F3EFE6',
        },
        beige: {
          DEFAULT: '#EDE4D6',
          light: '#F5EFE6',
          dark: '#DFD3C1',
        },
        charcoal: {
          DEFAULT: '#242B25',
          muted: '#4F5850',
          light: '#727C74',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(23, 61, 44, 0.08)',
        'premium': '0 20px 40px -15px rgba(23, 61, 44, 0.12)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'elevated': '0 25px 50px -12px rgba(23, 61, 44, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
