/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39FF14',
        accent: '#4B0082',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
