import type { Config } from 'tailwindcss'

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat']
      },
      colors: {
        'primary': {
          'light': "var(--primary)",
          'dark': "var(--primary-dark)",
          DEFAULT: "var(--primary)",
        },
      }
    },
  },
  plugins: [],
  darkMode: ['class']
}
export default config
