module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dxrery: {
          background: '#07120F',
          primary: '#1F3B2E',
          surface: '#0B1A14',
          gold: '#D4AF37',
          text: '#E6E6E6',
          muted: '#B8C3B7'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
