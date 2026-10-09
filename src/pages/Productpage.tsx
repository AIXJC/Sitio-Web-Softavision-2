import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductBySlug, products } from '../data/products';
import { formatPrice } from '../lib/utils';
import { useCart } from '../store/carts';

export default function Productpage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const add = useCart((s) => s.add);

  if (!product) return <Navigate to="/tienda" replace />;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <section className="pt-28 pb-16">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 flex items-center gap-2 text-sm text-white/50"
          >
            <Link to="/tienda" className="transition-colors hover:text-sky">
              Tienda
            </Link>
            <span>/</span>
            <span className="text-white/80">{product.name}</span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-sky/25 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs text-sky backdrop-blur">
                {product.categoryLabel}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-3xl font-extrabold sm:text-4xl">{product.name}</h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-gradient text-3xl font-bold"
              >
                {formatPrice(product.price)}
              </motion.p>
              <p className="mt-5 leading-relaxed text-white/65">{product.description}</p>

              <div className="mt-7">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
                  Características
                </h3>
                <ul className="grid gap-2.5">
                  {product.specs.map((spec, i) => (
                    <motion.li
                      key={spec}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-[10px] text-sky">
                        ✓
                      </span>
                      {spec}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => add(product)}
                  className="btn-primary"
                >
                  Agregar al carrito
                </motion.button>
                <Link to="/checkout" className="btn-ghost">
                  Comprar ahora
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-white/10 py-16">
          <div className="container-site">
            <h2 className="mb-8 text-2xl font-bold">
              Productos <span className="text-gradient">relacionados</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
