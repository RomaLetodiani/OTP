/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-pink': '#fbc2eb',
        'light-blue': '#a6c1ee',
        'dark-blue': '#5478b4',
        'mint-green': '#9ad3af',
        'mint-green-700': '#3ea262',
        'warm-red': '#e57373',
      },
      gradientColorStops: {
        'light-pink': '#fbc2eb',
        'light-blue': '#a6c1ee',
      },
    },
  },
  plugins: [],
};
