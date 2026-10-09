/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#050D22',
          800: '#0A1633',
          700: '#0F1F45',
          600: '#152A5C',
        },
        brand: {
          DEFAULT: '#1E5EFF',
          600: '#1549CC',
          400: '#4B82FF',
        },
        sky: {
          DEFAULT: '#35C8F0',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-110%)' },
          '100%': { transform: 'translateY(110%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
        scan: 'scan 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
