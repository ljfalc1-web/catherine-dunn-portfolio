import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#9B89B3',
        blush: '#FFE3EA',
        charcoal: '#3D405B',
        cream: '#F4F1DE',
      },
      fontFamily: {
        display: ['var(--font-libre-baskerville)', 'serif'],
        sans: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
