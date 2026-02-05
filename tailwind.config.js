/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { dark: '#04080F', white: '#BBD1EA' },
        text: { dark: '#e5e7eb', white: '#111827' },
        component: { dark: '#3f3f46', white: '#e5e7eb' },

        primary: 'hsl(var(--primary))',
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',

        danger: '#DC2626',
        success: '#16A34A',
      },

      fontFamily: {
        ios: ['-apple-system','BlinkMacSystemFont','SF Pro Display','Helvetica Neue','Arial','sans-serif'],
      },

      borderRadius: {
        ios: '1.375rem',
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animate'),
  ],
}