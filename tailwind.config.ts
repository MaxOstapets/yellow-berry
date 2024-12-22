import type { Config } from "tailwindcss";

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
      'gray': '#607D8B',
      'dark-gray': '#3D4750',
      'green': '#5EB595',
      'white': '#FFFFFF',
    },
    
    letterSpacing: {
      'tightest': '0.48px'
    },

    extend: {
      fontFamily: {
        serif: ['Poppins', 'serif'],
        sans: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
