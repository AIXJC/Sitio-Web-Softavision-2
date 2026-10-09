import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductTitle from '../components/ProductTitle';
import { formatPrice } from '../lib/utils';
import { selectCount, selectTotal, useCart } from '../store/carts';

export default function CartPage() {
  const { items, remove, setQty, clear } = useCart();
  const total = selectTotal(items);
  const count = selectCount(items);

  return (
    <>
      <ProductTitle title="Tu Carrito" subtitle="Revisa tus productos antes de finalizar la compra." />

      <section className="py-16">
        <div className="container-site">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto flex max-w-md flex-col items-center gap-5 rounded-3xl border border-dashed border-white/15 p-12 text-center"
            >
              <span className="text-5xl">🛒</span>
              <p className="text-white/60">Aún no has agregado productos.</p>
              <Link to="/tienda" className="btn-primary">
                Ir a la tienda
              </Link>
            </motion.div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      className="mb-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-28 w-full rounded-xl object-cover sm:h-24 sm:w-28"
                      />
                      <div className="flex-1">
                        <Link
                          to={`/producto/${item.product.slug}`}
                          className="font-semibold transition-colors hover:text-sky"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-white/50">{item.product.categoryLabel}</p>
                        <p className="mt-1 text-sky">{formatPrice(item.product.price)}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 rounded-lg border border-white/15 px-2 py-1">
                          <button onClick={() => setQty(item.product.id, item.qty - 1)}>−</button>
                          <span className="w-6 text-center text-sm">{item.qty}</span>
                          <button onClick={() => setQty(item.product.id, item.qty + 1)}>+</button>
                        </div>
                        <span className="w-24 text-right font-semibold">
                          {formatPrice(item.product.price * item.qty)}
                        </span>
                        <button
                          onClick={() => remove(item.product.id)}
                          className="text-white/40 transition-colors hover:text-red-400"
                          aria-label="Eliminar"
                        >
                          ✕
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <button
                  onClick={clear}
                  className="text-sm text-white/40 transition-colors hover:text-red-400"
                >
                  Vaciar carrito
                </button>
              </div>

              <motion.aside
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-fit rounded-2xl border border-white/10 bg-ink-800 p-6 lg:sticky lg:top-28"
              >
                <h2 className="text-lg font-bold">Resumen</h2>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between text-white/60">
                    <span>Productos ({count})</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Envío</span>
                    <span>A convenir</span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between text-base font-bold">
                      <span>Total</span>
                      <motion.span
                        key={total}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-gradient"
                      >
                        {formatPrice(total)}
                      </motion.span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout" className="btn-primary mt-6 w-full">
                  Finalizar compra →
                </Link>
                <Link to="/tienda" className="btn-ghost mt-3 w-full">
                  Seguir comprando
                </Link>
              </motion.aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
