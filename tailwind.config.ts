import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream:'#FFF3E3',
        gray:'#3A3A3A',
        lightGray:'#9F9F9F',
        brown:'#B88E2F'
      },
      fontFamily: {
        poppins: ['Poppins-Regular', 'sans-serif'],
        poppinsSemiBold: ['Poppins-SemiBold', 'sans-serif'],
        poppinsBold: ['Poppins-Bold', 'sans-serif'],
        interSemiBold: ['Inter-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
