import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductTitle from '../components/ProductTitle';

export default function NotFoundPage() {
  return (
    <>
      <ProductTitle title="Página no encontrada" subtitle="La página que buscas no existe o se ha movido." />

      <section className="py-20">
        <div className="container-site flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-9xl font-bold mb-6 text-gradient"
          >
            404
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-2xl font-bold text-white sm:text-3xl"
          >
            Esta página no está por aquí
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-md text-white/60 sm:text-lg"
          >
            Quizás escribiste mal la dirección o el enlace ya no está disponible. No te preocupes, te llevamos de
            vuelta a la tienda.
          </motion.p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/tienda"
              className="btn-primary"
            >
              Ir a la tienda →
            </Link>
            <Link
              to="/"
              className="btn-ghost"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}