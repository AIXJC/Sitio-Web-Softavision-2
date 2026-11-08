import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import Reveal from './Reveal';
import ShowMore from './ShowMore';

export default function StorePreview() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative py-12 sm:py-24">
      <div className="container-site">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Tienda
            </p>
            <h2 className="section-title">
              Equipos <span className="text-gradient">destacados</span>
            </h2>
          </div>
          <Link to="/tienda" className="btn-ghost">
            Ver catálogo completo →
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ShowMore mobileLimit={2} label="productos">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </ShowMore>
        </div>
      </div>
    </section>
  );
}
