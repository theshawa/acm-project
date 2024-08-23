import type { Config } from "tailwindcss";
import * as colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "roboto-condensed": ["var(--font-roboto-condensed)", "sans-serif"],
      anton: ["var(--font-anton)", "serif"],
      antonio: ["var(--font-antonio)", "serif"],
    },
    colors: {
      stone: colors.stone,
      orange: colors.orange,
    },
    extend: {},
  },
  plugins: [],
};
export default config;
