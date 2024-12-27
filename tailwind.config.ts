import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#6C7FD8',
      'purple': '#8118D5',
      'light-blue': '#5F6AF5',
      'dark-beige': '#F5885F',
      'birch': '#32DBE2',
      'very-dark-blue': '#3F51B5',
      'red': '#F44336',
      'pink': '#E91E63',
      'gray': {
        1: '#607D8B',
        2: '#F8F8FB',
        3: '#777777',
        4: '#3D4750'
      },
      'green': '#5EB595',
      'white': '#FFFFFF',
      'black': '#000000',
      'yellow': {
        1: '#FF954D',
        2: '#EDA957'
      }
    },
    
    letterSpacing: {
      '0.48': '0.48px',
      '0.32': '0.32px',
      '0.5': '0.5px',
      '0.6': '0.6px'
    },

    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', ...fontFamily.serif],
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      spacing: {
        '141': '141px',
        '48': '48px',
        '459': '459px',
        '600': '600px',
        'full': 'full'
      },
      lineHeight: {
        '60': '60px'
      }
    },
  },
  plugins: [],
} satisfies Config;