import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { stats, whyUs } from '../data/site';
import Reveal from './Reveal';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => spring.on('change', (v) => {
    if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
  }), [spring, suffix]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-white sm:text-5xl">
      0{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="section-light curve-b py-24">
      <span aria-hidden="true" className="bubble animate-drift-b left-[8%] top-[12%] hidden h-24 w-24 sm:block" />
      <span aria-hidden="true" className="bubble-solid animate-drift-a right-[9%] top-[58%] hidden h-16 w-16 sm:block" />
      <span aria-hidden="true" className="bubble animate-float-up right-[20%] top-[70%] h-10 w-10" style={{ animationDuration: '12s' }} />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky/10 blur-[110px]" />
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              ¿Quiénes somos?
            </p>
            <h2 className="section-title">
              El aliado tecnológico de{' '}
              <span className="text-gradient">tu negocio</span>
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              En SOFTAVISION llevamos años equipando comercios, restaurantes y oficinas
              con sistemas POS, videovigilancia y equipos de cómputo. No solo vendemos
              hardware: diseñamos, instalamos y acompañamos cada solución para que
              rinda desde el primer día.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {whyUs.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-ink/10 bg-white p-4 shadow-lg shadow-brand/5"
                >
                  <div className="mb-2 h-1 w-8 rounded bg-gradient-to-r from-brand to-sky" />
                  <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink/55">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-700 p-7 text-center"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-3 text-xs uppercase tracking-wider text-white/55">
                    {stat.label}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
