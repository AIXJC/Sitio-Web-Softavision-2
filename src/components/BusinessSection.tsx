import { motion } from 'framer-motion';
import { sectors } from '../data/site';
import Reveal from './Reveal';

export default function BusinessSection() {
  return (
    <section className="relative py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
            Negocios que atendemos
          </p>
          <h2 className="section-title">
            Tecnología adaptada a <span className="text-gradient">tu sector</span>
          </h2>
          <p className="mt-4 text-white/60">
            Conocemos las necesidades reales de cada giro y armamos la solución
            perfecta para él.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-7"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/20 blur-2xl transition-all duration-500 group-hover:bg-brand/40" />
                <div className="relative">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-lg font-bold text-sky transition-colors group-hover:bg-brand group-hover:text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{sector.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {sector.description}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand to-sky transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
