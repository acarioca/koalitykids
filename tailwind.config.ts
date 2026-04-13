import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#EFF5F0",
        "sage-dark": "#E2ECE4",
        purple: "#7C5CFC",
        lavender: "#EDE9FE",
        teal: "#4FC3D9",
        pink: "#F472B6",
        violet: "#A78BFA",
        "text-primary": "#1A1A2E",
        "text-secondary": "#8E8EA0",
        "success-green": "#43A047",
        "error-red": "#E53935",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "25px",
      },
    },
  },
  plugins: [],
};
export default config;
