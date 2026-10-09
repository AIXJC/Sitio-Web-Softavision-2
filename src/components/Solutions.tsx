import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import camara from '../assets/products/camara.jpg';
import pos from '../assets/products/pos-tablet.jpg';
import pcGamer from '../../assets/aigc/images/prod-computadora_1791430981_000.png';
import Reveal from './Reveal';

const solutions = [
  {
    title: 'Punto de venta completo',
    image: pos,
    items: ['Terminales y cajas', 'Software de inventario', 'Facturación electrónica'],
  },
  {
    title: 'Seguridad perimetral',
    image: camara,
    items: ['Cámaras IP y dome', 'Grabación en la nube', 'Monitoreo desde el celular'],
  },
  {
    title: 'Estaciones de trabajo',
    image: pcGamer,
    items: ['Laptops y PCs', 'Armado gamer a medida', 'Redes y conectividad'],
  },
];

export default function Solutions() {
  return (
    <section className="relative py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
            Soluciones
          </p>
          <h2 className="section-title">
            Paquetes listos para <span className="text-gradient">operar</span>
          </h2>
          <p className="mt-4 text-white/60">
            Combinamos equipos, software e instalación en paquetes cerrados con precio
            claro.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solutions.map((sol, i) => (
            <Reveal key={sol.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10"
              >
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={sol.image}
                    alt={sol.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>
                <div className="relative -mt-16 p-7">
                  <h3 className="text-xl font-bold text-white">{sol.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {sol.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-white/65">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-[10px] text-sky">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/tienda"
                    className="mt-6 inline-flex text-sm font-semibold text-sky transition-transform group-hover:translate-x-1"
                  >
                    Ver más →
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
