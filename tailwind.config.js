/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#0a0d12',
          900: '#0f131a',
          850: '#151a24',
          800: '#1c2230',
          700: '#283142',
          600: '#3a475d',
          500: '#52627d',
          400: '#7a8ba3',
          300: '#a3b2c6',
          200: '#cbd5e1',
          100: '#e2e8f0',
          50: '#f8fafc',
        },
        brand: {
          orange: '#ea580c',
          'orange-light': '#f97316',
          'orange-dark': '#c2410c',
          'orange-subtle': '#ffedd5',
        },
        brass: {
          500: '#b45309',
          400: '#d97706',
          300: '#f59e0b',
        },
        copper: {
          500: '#b95034',
          400: '#cf6343',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'metallic': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'metallic-card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        'glow-orange': '0 0 20px -3px rgba(234, 88, 12, 0.35)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '106': '1.06',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
