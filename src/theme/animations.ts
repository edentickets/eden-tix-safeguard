export default {
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    shimmer: {
      "100%": {
        transform: "translateX(100%)",
      },
    },
    "fade-in": {
      "0%": { opacity: "0", transform: "translateY(5px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    "fade-in-scale": {
      "0%": { opacity: "0", transform: "scale(0.98)" },
      "100%": { opacity: "1", transform: "scale(1)" },
    },
    pulse: {
      "0%, 100%": { opacity: "0.8" },
      "50%": { opacity: "0.9" },
    },
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-10px)" },
    },
    "gradient-shift": {
      "0%, 100%": {
        "background-position": "0% 50%",
      },
      "50%": {
        "background-position": "100% 50%",
      },
    },
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    shimmer: "shimmer 2s infinite",
    "fade-in": "fade-in 0.3s ease-out",
    "fade-in-scale": "fade-in-scale 0.3s ease-out",
    pulse: "pulse 4s ease-in-out infinite",
    float: "float 6s ease-in-out infinite",
    "gradient-shift": "gradient-shift 15s ease infinite",
  },
};