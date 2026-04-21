/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#030b18',
          900: '#050d1a',
          800: '#071426',
          700: '#0a1a32',
          600: '#0d2040',
          500: '#112850',
        },
        electric: {
          400: '#60b3ff',
          500: '#2b8fff',
          600: '#0a70ff',
          700: '#0055e0',
        },
        gold: {
          300: '#f5d98a',
          400: '#e8c056',
          500: '#d4a832',
          600: '#b8891a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bar-grow': 'barGrow 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(10,112,255,0.25), 0 0 40px rgba(10,112,255,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(10,112,255,0.6), 0 0 80px rgba(10,112,255,0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        barGrow: {
          from: { width: '0%' },
          to: { width: 'var(--bar-width)' },
        },
      },
    },
  },
  plugins: [],
};
