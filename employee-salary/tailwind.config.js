/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    extend: {},
  },
  plugins: [],

  safelist: [
    'stroke-green-500',
    'stroke-red-500',
  ],
}

