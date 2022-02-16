module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-lg':
          " linear-gradient(90deg, rgba(14,116,144,0.66) 0%, rgba(14,116,144,0.66) 54.4%, rgba(245,247,246,0) 54.4%, rgba(245,247,246,0) 100%),url('/images/barbell.webp');",
        'hero-contact': "url('/images/dumbels.webp');",
      },
    },
  },
  plugins: [],
};
