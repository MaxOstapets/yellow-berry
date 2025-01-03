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
      'purple': '#8118D5',
      'dark-beige': '#F5885F',
      'birch': '#32DBE2',
      'blue': {
        1: '#F4F1FE',
        2: '#3F51B5',
        3: '#6C7FD8',
        4: '#5F6AF5'
      },
      'red': {
        1: '#FEF1F1',
        2: '#F44336'
      },
      'pink': {
        1: '#E91E63',
        2: '#FBF9E4'
      },
      'gray': {
        1: '#607D8B',
        2: '#F8F8FB',
        3: '#777777',
        4: '#3D4750',
        5: '#EAEAEA26',
        6: '#D8CAB303',
        7: '#686E7D'
      },
      'green': {
        1: '#5EB595',
        2: '#E1FCF2'
      },
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
        'serif': 'Quicksand, sans-serif',
        'sans': 'Poppins, sans-serif'
      },
      spacing: {
        '141': '141px',
        '48': '48px',
        '459': '459px',
        '600': '600px',
        'full': 'full',
        '198': '198px',
        '168': '168px'
      },
      lineHeight: {
        '60': '60px'
      }
    },
  },
  plugins: [],
} satisfies Config;