/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--color-primary-background)",
        "primary-text": "var(--color-primary-text)",
        "primary-accent": "var(--color-primary-accent)",
        "primary-accent-hover": "var(--color-primary-accent-hover)",
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 7rem)', '0.9'],
      },
    },    
  },
  plugins: [],
}
