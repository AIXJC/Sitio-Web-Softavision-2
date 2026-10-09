import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
}

export default function Logo({ className = 'h-9 w-9', animated = false }: LogoProps) {
  const Shield = animated ? motion.path : 'path';
  const Eye = animated ? motion.circle : 'circle';

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <Shield
        d="M32 4 L56 14 V32 C56 46 46 56 32 60 C18 56 8 46 8 32 V14 Z"
        stroke="url(#logoGrad)"
        strokeWidth="4"
        strokeLinejoin="round"
        fill="rgba(30,94,255,0.12)"
        {...(animated
          ? {
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: 1, opacity: 1 },
              transition: { duration: 1.1, ease: 'easeInOut' as const },
            }
          : {})}
      />
      <Eye
        cx="32"
        cy="30"
        r="10"
        stroke="#35C8F0"
        strokeWidth="4"
        fill="none"
        {...(animated
          ? {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: 0.8, duration: 0.5, ease: 'backOut' as const },
              style: { transformOrigin: '32px 30px' },
            }
          : {})}
      />
      <circle cx="32" cy="30" r="4" fill="#1E5EFF" />
      <defs>
        <linearGradient id="logoGrad" x1="8" y1="4" x2="56" y2="60">
          <stop stopColor="#1E5EFF" />
          <stop offset="1" stopColor="#35C8F0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
