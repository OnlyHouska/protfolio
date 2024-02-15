/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('src/lib/images/background.svg')"
      }
    },
  },
  plugins: [],
}

