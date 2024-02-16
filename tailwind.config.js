/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-31': 'linear-gradient(31deg, var(--tw-gradient-stops))'
      },
      colors: {
        'header-right': '#363867',
        'header-left': '#1f2140',
        'brand-green': '#53bb67'
      },
    }
  },
  plugins: [],
}
