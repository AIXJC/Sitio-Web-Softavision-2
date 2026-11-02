import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  circle?: boolean;
}

export function Skeleton({ width = '100%', height = '1rem', className, circle = false }: SkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`
        animate-pulse rounded-lg bg-white/5 border border-white/5
        ${circle ? 'rounded-full' : ''}
        ${className ?? ''}
      `}
      style={{ width, height }}
    />
  );
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ''}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === lines - 1 ? '60%' : '100%'}
          height="0.875rem"
        />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/70 backdrop-blur">
      <div className="aspect-[4/3] bg-white/5" />
      <div className="flex-1 flex-col p-5">
        <Skeleton width="100%" height="1.25rem" />
        <Skeleton width="100%" height="0.875rem" />
        <div className="mt-4 flex items-center justify-between gap-3">
          <Skeleton width="40%" height="1rem" />
          <Skeleton width="20%" height="2rem" circle />
        </div>
      </div>
    </div>
  );
}