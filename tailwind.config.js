/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#7C3AED',
        'purple-light': '#A78BFA',
        'purple-dark': '#5B21B6',
        'pink-primary': '#EC4899',
        'pink-light': '#F472B6',
        'pink-dark': '#BE185D',
        'background-primary': '#FAFAFA',
        'background-secondary': '#FFFFFF',
        'background-tertiary': '#F3F4F6',
        'text-primary': '#111827',
        'text-secondary': '#4B5563',
        'text-tertiary': '#9CA3AF',
        'border': '#E5E7EB',
        'border-hover': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '0.95', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-sm': ['56px', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h1': ['48px', { lineHeight: '1.0', letterSpacing: '-0.025em', fontWeight: '600' }],
        'h2': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h5': ['18px', { lineHeight: '1.4', letterSpacing: '-0.005em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['13px', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      maxWidth: {
        'content': 'min(90vw, 1800px)',
        'content-narrow': 'min(85vw, 1400px)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '32px',
      },
    },
  },
  plugins: [],
}
