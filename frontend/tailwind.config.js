/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary-text": "#CBD5E1",
        "secondary-text": "#94A3B8",
        "tertiary-text": "#74869A",
        "base": "#141F38",
      },
    },
  },
  plugins: [],
};
