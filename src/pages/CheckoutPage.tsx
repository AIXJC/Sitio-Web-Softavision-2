import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import ProductTitle from '../components/ProductTitle';
import { formatPrice } from '../lib/utils';
import { selectCount, selectTotal, useCart } from '../store/carts';

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand';

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const total = selectTotal(items);
  const count = selectCount(items);
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
    clear();
  }

  return (
    <>
      <ProductTitle
        title="Finalizar Compra"
        subtitle="Completa tus datos y coordinamos la entrega e instalación."
      />

      <section className="py-16">
        <div className="container-site">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto flex max-w-lg flex-col items-center gap-5 rounded-3xl border border-brand/30 bg-brand/5 p-12 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.2 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-sky text-4xl"
                >
                  ✓
                </motion.span>
                <h2 className="text-2xl font-bold">¡Pedido recibido!</h2>
                <p className="text-white/60">
                  Te contactaremos pronto para confirmar los detalles de entrega e
                  instalación.
                </p>
                <Link to="/tienda" className="btn-primary">
                  Volver a la tienda
                </Link>
              </motion.div>
            ) : items.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto flex max-w-md flex-col items-center gap-5 rounded-3xl border border-dashed border-white/15 p-12 text-center"
              >
                <span className="text-5xl">🧺</span>
                <p className="text-white/60">No tienes productos en el carrito.</p>
                <Link to="/tienda" className="btn-primary">
                  Ir a la tienda
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-10 lg:grid-cols-5"
              >
                <div className="space-y-5 lg:col-span-3">
                  <h2 className="text-xl font-bold">Datos de contacto</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required placeholder="Nombre completo" className={inputClass} />
                    <input required placeholder="Teléfono" className={inputClass} />
                    <input required type="email" placeholder="Correo" className={`sm:col-span-2 ${inputClass}`} />
                    <input required placeholder="Dirección" className={`sm:col-span-2 ${inputClass}`} />
                    <input required placeholder="Ciudad" className={inputClass} />
                    <input placeholder="Notas para la entrega" className={inputClass} />
                  </div>

                  <h2 className="pt-4 text-xl font-bold">Método de pago</h2>
                  <div className="grid gap-3">
                    {['Transferencia bancaria', 'Efectivo contra entrega', 'Tarjeta (enlace de pago)'].map(
                      (opt, i) => (
                        <label
                          key={opt}
                          className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition-colors has-[:checked]:border-brand"
                        >
                          <input
                            type="radio"
                            name="pago"
                            defaultChecked={i === 0}
                            className="accent-[#1E5EFF]"
                          />
                          {opt}
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <aside className="h-fit rounded-2xl border border-white/10 bg-ink-800 p-6 lg:col-span-2 lg:sticky lg:top-28">
                  <h2 className="text-lg font-bold">Tu pedido</h2>
                  <ul className="mt-4 space-y-3">
                    {items.map((item) => (
                      <li key={item.product.id} className="flex items-center gap-3 text-sm">
                        <img
                          src={item.product.image}
                          alt=""
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <span className="flex-1 text-white/70">
                          {item.product.name}
                          <span className="block text-xs text-white/40">x{item.qty}</span>
                        </span>
                        <span className="text-white/80">
                          {formatPrice(item.product.price * item.qty)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex justify-between border-t border-white/10 pt-4 font-bold">
                    <span>Total ({count})</span>
                    <motion.span
                      key={total}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-gradient"
                    >
                      {formatPrice(total)}
                    </motion.span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="btn-primary mt-6 w-full"
                  >
                    Confirmar pedido
                  </motion.button>
                  <p className="mt-3 text-center text-xs text-white/40">
                    Al confirmar aceptas nuestros términos y política de privacidad.
                  </p>
                </aside>

              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
