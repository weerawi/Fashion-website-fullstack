/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['Custom Font', 'Poppins'],
        'custom-font2': ['Custom Font', 'Kode Mono'],
      },
    },
  },
  plugins: [],
}
