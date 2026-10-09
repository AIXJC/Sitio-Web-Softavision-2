import { motion } from 'framer-motion';

interface ProductTitleProps {
  title: string;
  subtitle?: string;
}

export default function ProductTitle({ title, subtitle }: ProductTitleProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-ink-800/60 pt-28 pb-14">
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(#35C8F0 1px, transparent 1px)',
          backgroundSize: '100% 40px',
        }}
      />
      <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-brand/20 blur-[90px]" />
      <div className="container-site relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          {title.split(' ').map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 20, display: 'inline-block' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              className={`mr-3 ${i === title.split(' ').length - 1 ? 'text-gradient' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 max-w-xl text-white/60"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 h-0.5 w-40 origin-left bg-gradient-to-r from-brand to-sky"
        />
      </div>
    </div>
  );
}
