/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "../../packages/ui/**/*.{js,jsx}", // include shared UI if applicable
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };