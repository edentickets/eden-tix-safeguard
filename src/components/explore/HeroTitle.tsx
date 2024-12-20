import { motion } from "framer-motion";

interface HeroTitleProps {
  variants: any;
}

export const HeroTitle = ({ variants }: HeroTitleProps) => {
  return (
    <motion.h1
      variants={variants}
      className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-primary"
    >
      Find Your Next Unforgettable Experience
    </motion.h1>
  );
};