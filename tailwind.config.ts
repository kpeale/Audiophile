import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      biggerLaptop: { min: '2560px' },
      bgLaptop: { min: '2000px' },
      medLaptop: { min: '1440px' },
      minLaptop: { max: '1200px' },

      smallLaptop: { max: '1024px' },
      lg: { max: '900px' },
      tab: { max: '768px' },
      tsm: { max: '700px' },
      psm: { max: '600px' },

      ysm: { max: '520px' },
      lsm: { max: '440px' },

      md: { max: '425px' },

      sm: { max: '375px' },

      nsm: { max: '355px' },

      xsm: { max: '320px' },
    },
    fontFamily: {
      manrope: ['Manrope', 'serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
