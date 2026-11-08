import { motion } from 'framer-motion';
import { useState } from 'react';

interface ShowMoreProps {
  children: React.ReactElement[];
  mobileLimit?: number;
  label?: string;
}

export default function ShowMore({ children, mobileLimit = 2, label = 'Ver más' }: ShowMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const visibleItems = isMobile && !expanded ? children.slice(0, mobileLimit) : children;
  const hasMore = isMobile && children.length > mobileLimit && !expanded;

  return (
    <>
      {visibleItems.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          className="relative"
        >
          {child}
          {isMobile && !expanded && i === mobileLimit - 1 && (
            <div className="absolute inset-0 bg-gradient-to-b from-ink/5 via-ink/10 to-transparent rounded-3xl pointer-events-none" />
          )}
        </motion.div>
      ))}
      {hasMore && (
        <motion.button
          key="show-more"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: children.length * 0.08 }}
          onClick={() => setExpanded(true)}
          className="w-full py-3 px-4 text-center text-xs font-semibold text-sky/70 transition-colors hover:bg-white/5 hover:text-sky/90 rounded-xl border border-transparent hover:border-white/10 bg-white/[0.02] active:bg-white/10"
        >
          {expanded ? 'Ver menos' : `Ver más ${label}`}
        </motion.button>
      )}
    </>
  );
}
