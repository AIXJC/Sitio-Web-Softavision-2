import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import posTerminal from '../assets/products/pos-terminal.jpg';
import camara from '../assets/products/camara.jpg';
import laptop from '../assets/products/laptop.webp';

const WORDS = ['Sistemas POS', 'Videovigilancia', 'Cómputo', 'Gaming'];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[index % WORDS.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 3400);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % WORDS.length);
      return;
    }
    const t = setTimeout(
      () =>
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? 130 : 190,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="relative inline-block" aria-live="polite">
      {/* Reserva el ancho de la palabra más larga para que el título y los
          botones no se muevan nunca al cambiar el texto animado.
          El degradado vive en el texto animado (no en este contenedor) porque
          en navegadores móviles el background-clip:text del padre no se
          propaga a hijos posicionados y el texto se volvía invisible. */}
      <span aria-hidden="true" className="invisible whitespace-nowrap">
        Videovigilancia
      </span>
      <span className="absolute inset-0 whitespace-nowrap text-sky sm:text-gradient">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="ml-1 inline-block w-[2px] align-middle text-sky"
          style={{ height: '1em', backgroundColor: 'currentColor' }}
        />
      </span>
    </span>
  );
}

/* Burbujas que suben flotando (CSS puro). Pocas en móvil, más en desktop. */
const RISING_BUBBLES = [
  { left: '6%', size: 'h-3 w-3', duration: '9s', delay: '0s', desktopOnly: false },
  { left: '16%', size: 'h-5 w-5', duration: '12s', delay: '2s', desktopOnly: true },
  { left: '30%', size: 'h-2 w-2', duration: '8s', delay: '1s', desktopOnly: false },
  { left: '48%', size: 'h-4 w-4', duration: '11s', delay: '4s', desktopOnly: true },
  { left: '63%', size: 'h-3 w-3', duration: '10s', delay: '0.5s', desktopOnly: false },
  { left: '76%', size: 'h-6 w-6', duration: '13s', delay: '3s', desktopOnly: true },
  { left: '88%', size: 'h-3 w-3', duration: '9s', delay: '5s', desktopOnly: false },
  { left: '94%', size: 'h-4 w-4', duration: '12s', delay: '1.5s', desktopOnly: true },
];

const floatingCards = [
  { image: posTerminal, className: 'left-[6%] top-[18%]', delay: 0.75, rot: -8 },
  { image: camara, className: 'right-[8%] top-[12%]', delay: 0.9, rot: 6 },
  { image: laptop, className: 'right-[14%] bottom-[10%]', delay: 1.05, rot: -5 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -80]);

  /* Parallax con el mouse (solo desktop: puntero fino). Suavizado con spring. */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const bgX = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const bgY = useTransform(sy, [-0.5, 0.5], [10, -10]);

  /* Spotlight suave que sigue al cursor e ilumina la cuadrícula (solo
     visible en pantallas grandes; en móvil el puntero no se mueve). */
  const spotX = useTransform(sx, [-0.5, 0.5], ['18%', '82%']);
  const spotY = useTransform(sy, [-0.5, 0.5], ['25%', '70%']);
  const spotBg = useMotionTemplate`radial-gradient(26rem 26rem at ${spotX} ${spotY}, rgba(53, 200, 240, 0.14), transparent 70%)`;

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative flex min-h-screen items-center overflow-hidden pt-0"
    >
      <motion.div style={{ y: yBg, x: bgX }} className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-800 to-ink" />
        <div className="animate-drift-a absolute -left-40 top-1/4 hidden h-96 w-96 rounded-full bg-brand/25 blur-[120px] sm:block" />
        <div className="animate-drift-b absolute -right-32 bottom-1/4 hidden h-96 w-96 rounded-full bg-sky/20 blur-[120px] sm:block" />
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(#35C8F0 1px, transparent 1px), linear-gradient(90deg, #35C8F0 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </motion.div>
        {/* Burbujas subiendo: 4 en móvil, 8 en desktop */}
        {RISING_BUBBLES.map((b, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`animate-float-up absolute bottom-[-2rem] rounded-full border border-sky/30 bg-sky/10 ${b.size} ${b.desktopOnly ? 'hidden sm:block' : ''}`}
            style={{ left: b.left, animationDuration: b.duration, animationDelay: b.delay }}
          />
        ))}
        {/* Spotlight que sigue al cursor (pack premium, solo desktop) */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:block"
          style={{ background: spotBg }}
        />
      </motion.div>

      <motion.div
        style={{ y: yContent }}
        className="container-site relative z-10 grid items-center gap-16 py-4 lg:grid-cols-2"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-medium text-sky"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky" />
            Tecnología que impulsa tu negocio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Soluciones inteligentes en <Typewriter />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Instalamos, configuramos y damos soporte a sistemas de punto de venta,
            cámaras de seguridad y equipos de cómputo para que tu negocio opere sin
            interrupciones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/tienda" className="btn-primary">
              Ver productos →
            </Link>
            <a href="#contacto" className="btn-ghost">
              Solicitar cotización
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-10 flex items-center gap-8 text-xs text-white/50"
          >
            <div>
              <p className="text-2xl font-bold text-white">+450</p>
              negocios equipados
            </div>
            <div className="h-8 w-px bg-white/15" />
            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              soporte técnico
            </div>
          </motion.div>
        </div>

        <div className="relative hidden h-[440px] lg:block" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/30" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky/20" />
          <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-white/10" />
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: card.delay, type: 'spring', stiffness: 120 }}
              className={`absolute ${card.className} h-44 w-44 overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-brand/20`}
              style={{ rotate: card.rot }}
            >
              <motion.img
                src={card.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </motion.div>
          ))}
        </div>


      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-sky" />
        </motion.div>
      </motion.div>
    </section>
  );
}
