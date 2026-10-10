import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden: (custom: { delay: number; y: number }) => ({
    opacity: 0,
    y: custom.y,
  }),
  show: (custom: { delay: number; y: number }) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: custom.delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.1, margin: '0px 0px -60px 0px' }}
      custom={{ delay, y }}
    >
      {children}
    </motion.div>
  );
}
