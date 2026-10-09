import { motion } from 'framer-motion';
import { services } from '../data/site';
import Reveal from './Reveal';

function ServiceIcon({ type }: { type: string }) {
  const common = { className: 'h-7 w-7', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (type) {
    case 'pos':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 20h10M8 16v4M16 16v4M7 8h4" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...common}>
          <path d="M3 7l14-3 1.5 5.5L4.5 12.5 3 7z" />
          <path d="M7 13v3a3 3 0 0 0 3 3h1" />
          <circle cx="19.5" cy="7.5" r="1.5" />
        </svg>
      );
    case 'cpu':
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <rect x="9.5" y="9.5" width="5" height="5" />
          <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        </svg>
      );
    case 'network':
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="19" r="2.5" />
          <circle cx="19" cy="19" r="2.5" />
          <path d="M12 7.5v4M12 11.5l-5.5 5M12 11.5l5.5 5" />
        </svg>
      );
    case 'tools':
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 1 5 5L21 13l-8 8-3-3 8-8-1.7-1.7z" />
          <path d="M9 15l-6 6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
        </svg>
      );
  }
}

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
      <div className="container-site">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Nuestros servicios
            </p>
            <h2 className="section-title">
              Todo lo que tu negocio <span className="text-gradient">necesita</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Un solo aliado para hardware, software, instalación y soporte técnico
            continuo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800/70 p-7 backdrop-blur"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/25 blur-3xl" />
                </div>
                <div className="relative flex h-full flex-col">
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-sky text-white shadow-lg shadow-brand/25 transition-transform duration-300 group-hover:scale-110">
                    <ServiceIcon type={service.icon} />
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Cotizar <span aria-hidden="true">→</span>
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
