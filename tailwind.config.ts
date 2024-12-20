import type { Config } from "tailwindcss";

// Import our theme configuration files
import colors from "./src/theme/colors";
import typography from "./src/theme/typography";
import animations from "./src/theme/animations";
import { backgroundImage } from "./src/theme/gradients";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      ...typography,
      colors,
      backgroundImage,
      ...animations,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;