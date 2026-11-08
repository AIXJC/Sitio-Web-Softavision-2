import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PaymentInfo from '../components/PaymentInfo';
import ProductTitle from '../components/ProductTitle';
import { formatPrice } from '../lib/utils';
import { payWithCard } from '../lib/payments';
import { selectCount, selectTotal, useCart } from '../store/carts';

const inputClass =
  'max-w-full w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand';

const PAYMENT_METHODS = [
  { id: 'transferencia', label: 'Transferencia bancaria' },
  { id: 'efectivo', label: 'Efectivo contra entrega' },
  { id: 'tarjeta', label: 'Tarjeta de crédito / débito' },
] as const;

export default function CheckoutPage() {
  const { items, clear } = useCart();
  const total = selectTotal(items);
  const count = selectCount(items);
  const [done, setDone] = useState(false);
  const [method, setMethod] = useState<string>('transferencia');
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [customerData, setCustomerData] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  }>({ name: '', email: '', phone: '', address: '', city: '' });
  const [searchParams] = useSearchParams();

  // Referencia y concepto automáticos para identificar cada depósito/transferencia.
  const reference = useMemo(() => 'SV' + Date.now().toString().slice(-6), []);
  const concept = useMemo(() => {
    const names = Array.from(new Set(items.map((i) => i.product.name)));
    return `SOFTAVISION · ${names.join(', ')} · Ref ${reference}`;
  }, [items, reference]);

  // El panel de datos bancarios solo aplica para transferencia.
  const showPaymentInfo = method === 'transferencia';

  // Estado devuelto por MercadoPago al regresar del checkout (?status=...).
  const mpStatus = searchParams.get('status');

  // Construye los datos del cliente a partir del formulario (antes de vaciar el carrito).
  function buildCustomerData(formData: FormData) {
    return {
      name: (formData.get('customer-name') as string) || '',
      email: (formData.get('customer-email') as string) || '',
      phone: (formData.get('customer-phone') as string) || '',
      address: (formData.get('customer-address') as string) || '',
      city: (formData.get('customer-city') as string) || '',
    };
  }

  // Envía notificación de pedido al correo del admin (backend).
  async function sendOrderNotification(data: {
    items: typeof items;
    total: number;
    count: number;
    method: string;
    reference: string;
    concept: string;
    customer: typeof customerData;
  }) {
    try {
      const resp = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo: 'pedido',
          datos: {
            items: data.items.map((i) => ({
              title: i.product.name,
              qty: i.qty,
              price: i.product.price,
            })),
            total: data.total,
            count: data.count,
            method: data.method,
            reference: data.reference,
            concept: data.concept,
            customer: data.customer,
          },
        }),
      });
      if (resp.ok) {
        setEmailSent(true);
      } else {
        console.error('Resend respondió con error:', await resp.text());
      }
    } catch (err) {
      console.error('Error enviando notificación de pedido:', err);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    setCustomerData(buildCustomerData(formData));

    // Pago con tarjeta → crear preferencia en el servidor y abrir MercadoPago.
    if (method === 'tarjeta') {
      setPaying(true);
      setPayError('');
      const paymentItems = items.map((i) => ({
        id: i.product.id,
        title: i.product.name,
        quantity: i.qty,
        unit_price: i.product.price,
        currency_id: 'MXN',
      }));
      payWithCard(paymentItems, reference)
        .catch((err: Error) => {
          setPaying(false);
          setPayError(err.message);
        });
      return;
    }

    // Transferencia / efectivo → confirmación directa y envío de correo.
    setDone(true);
    void sendOrderNotification({
      items,
      total,
      count,
      method,
      reference,
      concept,
      customer: customerData,
    });
    clear();
  }

  // Al regresar de MercadoPago: si el pago fue aprobado, confirmamos y enviamos correo.
  useEffect(() => {
    if (mpStatus === 'approved') {
      setDone(true);
      void sendOrderNotification({
        items,
        total,
        count,
        method,
        reference,
        concept,
        customer: customerData,
      });
      clear();
    }
  }, [mpStatus, clear]);

  return (
    <>
      <ProductTitle
        title="Finalizar Compra"
        subtitle="Completa tus datos y coordinamos la entrega e instalación."
      />

      <section className="py-10 sm:py-16">
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
                className="grid gap-6 sm:gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8"
              >
                <div className="space-y-5 col-span-full md:col-span-2 lg:col-span-3">
                  <h2 className="text-xl font-bold">Datos de contacto</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      name="customer-name"
                      placeholder="Nombre completo"
                      className={inputClass}
                    />
                    <input
                      required
                      name="customer-phone"
                      placeholder="Teléfono"
                      className={inputClass}
                    />
                    <input
                      required
                      name="customer-email"
                      type="email"
                      placeholder="Correo"
                      className={`sm:col-span-2 ${inputClass}`}
                    />
                    <input
                      required
                      name="customer-address"
                      placeholder="Dirección"
                      className={`sm:col-span-2 ${inputClass}`}
                    />
                    <input
                      required
                      name="customer-city"
                      placeholder="Ciudad"
                      className={`sm:col-span-2 ${inputClass}`}
                    />
                    <input placeholder="Notas para la entrega" className={inputClass} />
                  </div>

                  <h2 className="pt-4 text-xl font-bold">Método de pago</h2>
                  <div className="grid gap-3">
                    {PAYMENT_METHODS.map((opt) => (
                      <label
                        key={opt.id}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition-colors has-[:checked]:border-brand"
                      >
                        <input
                          type="radio"
                          name="pago"
                          value={opt.id}
                          checked={method === opt.id}
                          onChange={() => setMethod(opt.id)}
                          className="accent-[#1E5EFF]"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>

                  <AnimatePresence>
                    {showPaymentInfo && (
                      <div className="pt-4">
                        <PaymentInfo concept={concept} />
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                <aside className="w-full rounded-2xl border border-white/10 bg-ink-800 p-4 sm:p-6 col-span-full md:col-span-2 lg:col-span-2 lg:sticky lg:top-28 pb-20">
                  <h2 className="text-lg font-bold">Tu pedido</h2>
                  <ul className="mt-4 space-y-3">
                    {items.map((item) => (
                      <li key={item.product.id} className="flex items-center gap-3 text-sm">
                        <img
                          src={item.product.image}
                          alt=""
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <span className="flex-1 min-w-0 text-white/70">
                          <span className="truncate block">{item.product.name}</span>
                          <span className="block text-xs text-white/40">x{item.qty}</span>
                        </span>
                        <span className="text-white/80 break-all">
                          {formatPrice(item.product.price * item.qty)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-white/10 pt-4 font-bold">
                    <span className="min-w-0 truncate">Total ({count})</span>
                    <span className="text-gradient break-all">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={paying}
                    className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {paying
                      ? 'Redirigiendo a MercadoPago…'
                      : method === 'tarjeta'
                        ? 'Pagar con tarjeta'
                        : 'Confirmar pedido'}
                  </motion.button>
                  {payError && (
                    <p className="mt-3 text-center text-xs text-red-400">
                      {payError}
                    </p>
                  )}
                  {method === 'tarjeta' && !payError && (
                    <p className="mt-3 text-center text-xs text-white/40">
                      Serás llevado a una pasarela segura para capturar tu tarjeta.
                    </p>
                  )}
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
