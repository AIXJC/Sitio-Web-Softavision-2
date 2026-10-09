import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import posTerminal from '../assets/products/pos-terminal.jpg';
import camara from '../assets/products/camara.jpg';
import pcGamer from '../../assets/aigc/images/prod-computadora_1791430981_000.png';

const WORDS = ['Sistemas POS', 'Videovigilancia', 'Cómputo', 'Gaming'];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[index % WORDS.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1600);
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
      deleting ? 45 : 95,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="text-gradient">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block w-[3px] bg-sky align-middle"
        style={{ height: '1em' }}
      />
    </span>
  );
}

const floatingCards = [
  { image: posTerminal, className: 'left-[6%] top-[18%]', delay: 0.9, rot: -8 },
  { image: camara, className: 'right-[8%] top-[12%]', delay: 1.1, rot: 6 },
  { image: pcGamer, className: 'right-[14%] bottom-[10%]', delay: 1.3, rot: -5 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-800 to-ink" />
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-sky/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#35C8F0 1px, transparent 1px), linear-gradient(90deg, #35C8F0 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: yContent }}
        className="container-site relative z-10 grid items-center gap-16 py-16 lg:grid-cols-2"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-medium text-sky"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky" />
            Tecnología que impulsa tu negocio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Soluciones inteligentes en <Typewriter />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.35 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Instalamos, configuramos y damos soporte a sistemas de punto de venta,
            cámaras de seguridad y equipos de cómputo para que tu negocio opere sin
            interrupciones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.5 }}
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
            transition={{ delay: 2.8, duration: 0.8 }}
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
        transition={{ delay: 3 }}
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
