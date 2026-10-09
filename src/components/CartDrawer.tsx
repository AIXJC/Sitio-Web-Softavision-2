import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatPrice } from '../lib/utils';
import { selectCount, selectTotal, useCart } from '../store/carts';

export default function CartDrawer() {
  const { items, isOpen, close, remove, setQty } = useCart();
  const count = selectCount(items);
  const total = selectTotal(items);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-white/10 bg-ink-800 shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h2 className="text-lg font-bold">Tu carrito</h2>
                <p className="text-xs text-white/50">
                  {count} {count === 1 ? 'producto' : 'productos'}
                </p>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={close}
                aria-label="Cerrar carrito"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </motion.button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full flex-col items-center justify-center gap-4 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-white/20 text-3xl">
                    🛒
                  </div>
                  <p className="text-sm text-white/55">Tu carrito está vacío</p>
                  <Link to="/tienda" onClick={close} className="btn-primary">
                    Ver productos
                  </Link>
                </motion.div>
              ) : (
                <ul className="space-y-4">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.li
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40, height: 0 }}
                        className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-3"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-20 w-20 shrink-0 rounded-lg object-cover"
                        />
                        <div className="flex min-w-0 flex-1 flex-col">
                          <h3 className="truncate text-sm font-semibold">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-sky">
                            {formatPrice(item.product.price)}
                          </p>
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setQty(item.product.id, item.qty - 1)}
                                className="h-7 w-7 rounded-md border border-white/15 text-white/70 hover:border-brand"
                              >
                                −
                              </button>
                              <span className="w-6 text-center text-sm">{item.qty}</span>
                              <button
                                onClick={() => setQty(item.product.id, item.qty + 1)}
                                className="h-7 w-7 rounded-md border border-white/15 text-white/70 hover:border-brand"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => remove(item.product.id)}
                              className="text-xs text-white/40 transition-colors hover:text-red-400"
                            >
                              Quitar
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-white/10 px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-white/60">Total</span>
                  <motion.span
                    key={total}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    className="text-xl font-bold text-gradient"
                  >
                    {formatPrice(total)}
                  </motion.span>
                </div>
                <div className="grid gap-3">
                  <Link to="/carrito" onClick={close} className="btn-ghost w-full">
                    Ver carrito
                  </Link>
                  <Link to="/checkout" onClick={close} className="btn-primary w-full">
                    Finalizar compra →
                  </Link>
                </div>
              </footer>
            )}

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
