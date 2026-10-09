import { motion } from 'framer-motion';
import { techStack } from '../data/site';
import Reveal from './Reveal';

export default function TechStack() {
  const items = [...techStack, ...techStack];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-site">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
            Tecnologías
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Trabajamos con marcas y plataformas{' '}
            <span className="text-gradient">de primer nivel</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

        <motion.div
          className="flex w-max gap-5 animate-marquee"
          style={{ animationPlayState: 'running' }}
        >
          {items.map((tech, i) => (
            <motion.span
              key={`${tech}-${i}`}
              animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3 + (i % 5) * 0.4,
                ease: 'easeInOut',
              }}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/70 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand to-sky" />
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
