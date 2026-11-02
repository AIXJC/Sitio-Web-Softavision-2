import { motion } from 'framer-motion';
import { services } from '../data/site';
import { useUI } from '../store/ui';
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
    case 'license':
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 12h4M7 15.5h7" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2l-10.89-10.89a2 2 0 0 0-2-2V3a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v10.89a2 2 0 0 0 2 2l10.89 10.89a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 1 2-2z" />
          <line x1="23" x2="17" y1="9" y2="15" />
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
  const setInterest = useUI((s) => s.setInterest);

  /** Preselecciona el servicio en el formulario y lleva al usuario a él. */
  function goToQuote(serviceTitle: string) {
    setInterest(serviceTitle);
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="section-light curve-a py-24">
      <span aria-hidden="true" className="bubble animate-drift-a right-[8%] top-[12%] hidden h-24 w-24 sm:block" />
      <span aria-hidden="true" className="bubble-solid animate-drift-b left-[5%] top-[55%] hidden h-16 w-16 sm:block" />
      <span aria-hidden="true" className="bubble-solid animate-float-up right-[12%] top-[38%] h-10 w-10" style={{ animationDuration: '10s' }} />
      <div className="absolute left-0 top-1/3 hidden h-72 w-72 rounded-full bg-brand/10 blur-[100px] sm:block" />
      <div className="container-site">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Nuestros servicios
            </p>
            <h2 className="section-title">
              Todo lo que tu negocio <span className="text-gradient">necesita</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
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
                className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-xl shadow-brand/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand/20"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky/30 blur-3xl" />
                  <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
                </div>
                <div className="relative flex h-full flex-col">
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-sky text-white shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <ServiceIcon type={service.icon} />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => goToQuote(service.title)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-600 opacity-100 transition-all duration-300 hover:gap-3 hover:text-brand lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    Cotizar <span aria-hidden="true">→</span>
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
