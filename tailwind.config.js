/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bf-blue': {
          100: '#7EB2FF',
          200: '#5A9BF5',
          300: '#3D89EC',
          400: '#2A73D5',
          500: '#1C5EBE',
          600: '#114BA7',
          700: '#0A3990',
          800: '#05297A',
          900: '#021B64'
        },
        'bf-orange': {
          500: '#FF7D1F',
          600: '#E86A12'
        },
        'bf-gray': {
          100: '#F0F2F5',
          200: '#DCE0E5',
          300: '#B8BDC4',
          400: '#959BA5',
          500: '#737985',
          600: '#535966',
          700: '#394049',
          800: '#242A33',
          900: '#15191F'
        }
      },
      fontFamily: {
        'bf': ['Rajdhani', 'sans-serif'],
        'bf-heading': ['Purista', 'Rajdhani', 'sans-serif']
      },
      backgroundImage: {
        'menu-bg': "url('https://images.pexels.com/photos/1072379/pexels-photo-1072379.jpeg')",
        'overlay-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }
        }
      }
    },
  },
  plugins: [],
};