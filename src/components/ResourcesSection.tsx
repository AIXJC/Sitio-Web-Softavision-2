import { motion } from 'framer-motion';
import { resources } from '../data/resources';
import Reveal from './Reveal';

function ResourceIcon({ type }: { type: string }) {
  const common = {
    className: 'h-7 w-7',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'documents':
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
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

export default function ResourcesSection() {
  return (
    <section className="section-light curve-b py-24">
      <span aria-hidden="true" className="bubble animate-drift-a right-[10%] top-[20%] hidden h-24 w-24 sm:block" />
      <span aria-hidden="true" className="bubble-solid animate-drift-b left-[10%] top-[60%] hidden h-20 w-20 sm:block" />
      <div className="container-site">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Recursos útiles
            </p>
            <h2 className="section-title">
              Herramientas y descargas para tu <span className="text-gradient">negocio</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            Enlaces directos a software oficial y utiles que recomendamos instalar en tus equipos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => (
            <Reveal key={resource.id} delay={(i % 3) * 0.1}>
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
                    <ResourceIcon type={resource.icon} />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{resource.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                    {resource.description}
                  </p>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-600 opacity-100 transition-all duration-300 hover:gap-3 hover:text-brand lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    Abrir recurso <span aria-hidden="true">→</span>
                    {resource.external && <span className="ml-1 text-xs">(externo)</span>}
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}