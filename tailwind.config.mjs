import { Poppins } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {

    darkMode: 'class', 
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
      },
      fontFamily:{
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
