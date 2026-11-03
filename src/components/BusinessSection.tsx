import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { sectors } from '../data/site';
import Reveal from './Reveal';

function getSectorIconColor(type: string): string {
  switch (type) {
    case 'cup':
      return 'text-amber-400';
    case 'bag':
      return 'text-emerald-400';
    case 'cross':
      return 'text-rose-400';
    case 'scale':
      return 'text-lime-400';
    case 'monitor':
      return 'text-violet-400';
    case 'key':
      return 'text-indigo-400';
    default:
      return 'text-cyan-400';
  }
}

function SectorIcon({ type }: { type: string }) {
  const common = {
    className: 'h-6 w-6',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (type) {
    case 'cup':
      return (
        <svg {...common}>
          <path d="M7 3h10" />
          <path d="M7 3l-2 6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2L17 3" />
          <path d="M7 13h10" />
          <path d="M7 13v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
          <path d="M11 21v-4" />
        </svg>
      );
    case 'bag':
      return (
        <svg {...common}>
          <path d="M6 2 3.5 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-2.5-4Z" />
          <path d="M3.5 6h17" />
          <path d="M8 6v12" />
          <path d="M12 6v12" />
          <path d="M16 6v12" />
          <circle cx="12" cy="13" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'cross':
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M6 12h12" />
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'fruit':
      return (
        <svg {...common}>
          <path d="M5 13c0-4 3.5-7 8-7s8 3 8 7" />
          {/* Apple */}
          <circle cx="8" cy="10" r="2" fill="currentColor" stroke="none" />
          <path d="M7.5 8.8 L7 8.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <ellipse cx="7" cy="7.8" rx="0.8" ry="1.1" fill="currentColor" stroke="none" transform="rotate(-20 7 7.8)" />
          {/* Pear */}
          <ellipse cx="15" cy="9.5" rx="2.2" ry="2.5" fill="currentColor" stroke="none" />
          <path d="M14 7.8 L13.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'monitor':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M9 20h6" />
          <path d="M12 15v5" />
          <path d="M3 4h18v4H3z" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="7" y="16" width="3" height="3" rx="1" />
        </svg>
      );
    case 'key':
      return (
        <svg {...common}>
          <path d="M15 4V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
          <path d="M15 4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5" />
          <path d="M11 14v4" />
          <path d="M13 14v4" />
          <circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function BusinessSection() {
  const [open, setOpen] = useState<number | null>(null);

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
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 transition-colors group-hover:bg-cyan-500/20 group-hover:text-white ${getSectorIconColor(sector.icon)}`}>
                    <SectorIcon type={sector.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{sector.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {sector.description}
                  </p>

                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky transition-colors hover:text-white"
                  >
                    {open === i ? 'Ocultar detalles' : 'Ver cómo se adapta a tu negocio'}
                    <motion.span
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex"
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-3 border-t border-white/10 pt-4">
                          {sector.details.map((d) => (
                            <li key={d.label}>
                              <p className="text-xs font-semibold uppercase tracking-wider text-sky">
                                {d.label}
                              </p>
                              <p className="mt-0.5 text-sm leading-relaxed text-white/60">
                                {d.text}
                              </p>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={`https://wa.me/528131244540?text=${encodeURIComponent(`Hola, me interesa la solución para ${sector.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex text-sm font-semibold text-sky transition-transform hover:translate-x-1"
                        >
                          Cotizar para este giro →
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
