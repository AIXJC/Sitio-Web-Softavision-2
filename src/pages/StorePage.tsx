import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductTitle from '../components/ProductTitle';
import { CATEGORIES, products, type Category } from '../data/products';

export default function StorePage() {
  const [active, setActive] = useState<Category | 'todos'>('todos');

  const filtered = useMemo(
    () => (active === 'todos' ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <ProductTitle
        title="Nuestra Tienda"
        subtitle="Equipos con garantía, instalación y soporte incluido. Filtra por categoría y agrega al carrito."
      />

      <section className="py-16">
        <div className="container-site">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === cat.value ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {active === cat.value && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand to-sky"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{cat.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-white/50">
              No hay productos en esta categoría.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
