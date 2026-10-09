import { motion } from 'framer-motion';
import { projects } from '../data/site';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section className="relative py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
            Casos de éxito
          </p>
          <h2 className="section-title">
            Negocios que ya <span className="text-gradient">confían en nosotros</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.06 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                {/* barras de escaneo de seguridad */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-1/3 h-px animate-scan bg-sky/60" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-block rounded-full border border-sky/40 bg-ink/70 px-3 py-1 text-[11px] font-medium text-sky backdrop-blur">
                  {project.area}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-1.5 max-h-0 overflow-hidden text-sm text-white/65 transition-all duration-500 group-hover:max-h-24">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
