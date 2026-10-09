import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../lib/constants';
import Reveal from './Reveal';

export default function CtaBanner() {
  return (
    <section className="relative py-16">
      <div className="container-site">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-r from-brand/20 via-ink-700 to-sky/20 p-10 text-center sm:p-14"
          >
            <motion.div
              className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-brand/30 blur-[80px]"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-sky/25 blur-[80px]"
              animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
            />

            <div className="relative">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                ¿Listo para equipar tu negocio?{' '}
                <span className="text-gradient">Empecemos hoy</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/65">
                Cotización gratuita, instalación profesional y soporte que siempre
                responde.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/tienda" className="btn-primary">
                  Explorar catálogo
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Hablar con un asesor
                </a>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
