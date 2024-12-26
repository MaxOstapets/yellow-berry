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
      // 'very-light-gray': '#F8F8FB',
      // 'light-gray': '#777777',
      // 'dark-gray': '#3D4750',
      'green': '#5EB595',
      'white': '#FFFFFF',
      'black': '#000000',
      'yellow': '#FF954D'
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
        sans: ['Quicksand', 'sans-serif']
      },
      spacing: {
        '141': '141px',
        '48': '48px',
        '459': '459px',
        '600': '600px',
        'full': 'full'
      }
    },
  },
  plugins: [],
} satisfies Config;