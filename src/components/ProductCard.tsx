import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { formatPrice } from '../lib/utils';
import { useCart } from '../store/carts';

export default function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/70 backdrop-blur"
    >
      <Link to={`/producto/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ rotate: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-medium text-sky backdrop-blur">
          {product.categoryLabel}
        </span>
        {product.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-brand to-sky px-3 py-1 text-[11px] font-bold text-white shadow-lg shadow-brand/40">
            ★ Destacado
          </span>
        )}
        {/* efecto escáner */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-8 animate-scan bg-gradient-to-b from-sky/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/producto/${product.slug}`}>
          <h3 className="font-semibold text-white transition-colors group-hover:text-sky">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/55">
          {product.short}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-gradient">{formatPrice(product.price)}</span>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => add(product)}
            className="rounded-lg bg-brand px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            + Agregar
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
