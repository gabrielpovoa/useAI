import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner': "url('/bg-home-evo-banner.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: '#FFC44C',
        darkBlue: '#212733',
        white: '#EEF0F2'
      },
    },
  },
  plugins: [],
} satisfies Config;
