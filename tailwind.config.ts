import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF9F4A',
          pink: '#FF4A8D',
          blue: '#4AC4FF',
        },
        secondary: {
          dark: '#1A1A1A',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        'float': '0 10px 20px -5px rgba(0, 0, 0, 0.1)',
        'pink': '0 4px 10px rgba(255, 74, 141, 0.25)',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}

export default config 