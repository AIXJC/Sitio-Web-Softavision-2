import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ProductTitle from '../components/ProductTitle';
import { CONTACT, whatsappLink } from '../lib/constants';

const CHANNELS = [
  {
    title: 'WhatsApp 24/7',
    description: 'El canal más rápido. Escríbenos y respondemos casi al instante, los 365 días del año.',
    action: 'Escribir ahora',
    href: whatsappLink('Hola, necesito soporte técnico.'),
  },
  {
    title: 'Llamada directa',
    description: `Atendemos de lunes a sábado. Llámanos al ${CONTACT.phone}.`,
    action: 'Llamar',
    href: `tel:${CONTACT.phoneRaw}`,
  },
  {
    title: 'Correo electrónico',
    description: `Para reportes con capturas o archivos, escribe a ${CONTACT.email}.`,
    action: 'Enviar correo',
    href: `mailto:${CONTACT.email}?subject=Solicitud%20de%20soporte%20técnico`,
  },
];

const FAQ = [
  {
    q: '¿Cómo solicito soporte?',
    a: 'Escoge el canal que prefieras (WhatsApp, llamada o correo). Nuestro equipo agenda una visita técnica o resuelve en remoto el mismo día.',
  },
  {
    q: '¿El soporte tiene costo?',
    a: 'El soporte remoto inicial es gratuito para clientes con producto instalado por nosotros. Los servicios a domicilio se cotizan antes de ejecutarse.',
  },
  {
    q: '¿Atienden urgencias?',
    a: 'Sí. Ofrecemos soporte de emergencia 24/7 para sistemas POS y videovigilancia fuera de servicio, sin importar el día.',
  },
  {
    q: '¿Pueden atenderme en remoto?',
    a: 'La mayoría de los fallas de software se resuelven en remoto con acceso seguro. Si requiere hardware, agendamos visita a tu negocio.',
  },
  {
    q: '¿La garantía cubre mi equipo?',
    a: 'Todos los equipos cuentan con garantía del fabricante; te ayudamos con el trámite y, si aplica, te prestamos equipo mientras se resuelve.',
  },
];

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <ProductTitle
        title="Soporte Técnico"
        subtitle="Ayuda real cuando la necesitas: soporte remoto y a domicilio, los 365 días del año."
      />

      <section className="py-16">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-3">
            {CHANNELS.map((ch, i) => (
              <motion.a
                key={ch.title}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-7 transition-colors hover:border-brand/50"
              >
                <h3 className="text-lg font-semibold text-white">{ch.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{ch.description}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-sky transition-transform group-hover:translate-x-1">
                  {ch.action} →
                </span>
              </motion.a>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-sm text-white/70">
            <span className="text-sky">●</span> {CONTACT.support}
          </div>

          <h2 className="mt-16 text-center text-2xl font-bold text-white">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQ.map((item, i) => (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">{item.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-sky"
                  >
                    ▾
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={whatsappLink('Hola, necesito ayuda con mi sistema.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar soporte por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}