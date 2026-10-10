import { motion } from 'framer-motion';
import { processSteps } from '../data/site';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-ink-800/60 py-24">
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(#35C8F0 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
            Cómo trabajamos
          </p>
          <h2 className="section-title">
            Un proceso <span className="text-gradient">sin sorpresas</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.15}>
                <div className="relative text-center lg:text-left">
                  {/* Conector: sale del borde derecho del número hacia la
                      siguiente tarjeta. Al vivir dentro del mismo contenedor,
                      jamás puede quedar por encima de los cuadros. */}
                  {i < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, ease: 'easeInOut', delay: i * 0.15 + 0.3 }}
                      aria-hidden="true"
                      className="absolute left-[4.5rem] right-[-2rem] top-9 hidden h-px origin-left bg-gradient-to-r from-brand via-sky to-cyan-300 lg:block"
                    />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-brand/40 bg-ink text-xl font-extrabold text-gradient lg:mx-0"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
