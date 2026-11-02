import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductTitle from '../components/ProductTitle';
import { CATEGORIES, products, type Category } from '../data/products';

export default function StorePage() {
  const [active, setActive] = useState<Category | 'todos'>('todos');
  const [query, setQuery] = useState('');
  const [preciosDinamicos, setPreciosDinamicos] = useState<Record<string, number>>({});
  const [preciosCargados, setPreciosCargados] = useState(false);

  // Obtiene precios actualizados del backend (api/precios) con margen ×1.3
  const fetchPrecios = useCallback(async () => {
    try {
      const resp = await fetch('/api/precios', { cache: 'no-store' });
      if (resp.ok) {
        const data = await resp.json();
        setPreciosDinamicos(data.precios ?? {});
        setPreciosCargados(true);
      } else {
        console.warn('No se pudieron cargar precios dinámicos:', resp.status);
        setPreciosCargados(true);
      }
    } catch (err) {
      console.warn('Backend de precios no disponible (localhost sin servidor). Usando precios estáticos ×1.3.');
      setPreciosCargados(true);
    }
  }, []);

  useEffect(() => {
    fetchPrecios();
  }, [fetchPrecios]);

  // Mezcla productos estáticos con precios dinámicos del proveedor.
  // Los precios de products.ts YA son precios finales de venta al público.
  // Los precios dinámicos del servidor ya incluyen el margen (MARGEN_GANANCIA).
  const productosConPrecio = useMemo(() => {
    return products.map((p) => ({
      ...p,
      price: preciosDinamicos[p.id] ?? p.price,
    }));
  }, [preciosDinamicos]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return productosConPrecio
      .filter((p) => active === 'todos' || p.category === active)
      .filter(
        (p) =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
  }, [active, query, productosConPrecio]);

  return (
    <>
      <ProductTitle
        title="Nuestra Tienda"
        subtitle="Equipos con garantía, instalación y soporte incluido. Filtra por categoría y agrega al carrito."
      />

      <section className="py-16">
        <div className="container-site">
          <div className="mx-auto mb-8 max-w-md">
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar productos..."
                aria-label="Buscar productos"
                className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand/60"
              />
            </div>
          </div>

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
            <div className="text-center">
              <p className="text-white/50">
                No encontramos productos{query ? ` para “${query}”` : ''} en esta categoría.
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  setActive('todos');
                }}
                className="mt-4 text-sm font-semibold text-sky transition-colors hover:text-white"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
