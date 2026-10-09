import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + 4, 100));
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(onDone, 300);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <Logo className="h-20 w-20" animated />
        <motion.h1
          className="text-2xl font-bold tracking-[0.35em] text-white sm:text-3xl"
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          SOFTAVISION
        </motion.h1>
        <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand to-cyan-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs uppercase tracking-widest text-white/50">
          Cargando tecnología…
        </p>
      </motion.div>
    </motion.div>
  );
}
