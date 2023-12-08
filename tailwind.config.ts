import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "128": "32rem",
      },
      colors: {
        background: "#efebef",
        primary: "#9d9b85",
        secondary: "#d0c6d2",
        accent: "#5b716f",
      },
      screens: {
        xs: "399px",
        sm: "640px",
        md: "815px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
