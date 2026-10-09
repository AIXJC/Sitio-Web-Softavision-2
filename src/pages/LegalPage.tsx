import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductTitle from '../components/ProductTitle';
import { classNames } from '../lib/utils';

const SECTIONS = [
  {
    id: 'privacidad',
    title: 'Política de Privacidad',
    body: [
      'En SOFTAVISION recopilamos únicamente los datos personales necesarios (nombre, teléfono, correo y dirección) para procesar tus pedidos, cotizaciones y solicitudes de soporte.',
      'Tus datos se almacenan de forma segura y no se comparten con terceros salvo que sea requerido para completar la entrega o instalación de un producto contratado.',
      'Puedes solicitar en cualquier momento la corrección o eliminación de tus datos escribiendo a alexanderucost@icloud.com.',
      'Utilizamos tecnologías de almacenamiento local (cookies) únicamente para recordar tu carrito de compras y mejorar la experiencia de navegación.',
    ],
  },
  {
    id: 'terminos',
    title: 'Términos y Condiciones',
    body: [
      'Los precios publicados en el sitio están expresados en la moneda local e incluyen impuestos aplicables, salvo indicación en contrario.',
      'Los pedidos quedan confirmados cuando el equipo de SOFTAVISION contacta al cliente para verificar disponibilidad, entrega e instalación.',
      'Todos los equipos cuentan con garantía del fabricante; los detalles de cobertura se informan al momento de la compra.',
      'La instalación y puesta en marcha se agenda con el cliente dentro de los 5 días hábiles posteriores a la confirmación del pago.',
      'Las fotografías de productos son ilustrativas; las especificaciones pueden variar sin previo aviso según disponibilidad del fabricante.',
    ],
  },
];

export default function LegalPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      <ProductTitle
        title="Legal"
        subtitle="Transparencia sobre cómo tratamos tus datos y las reglas de compra."
      />

      <section className="py-16">
        <div className="container-site grid gap-10 lg:grid-cols-4">
          <div className="flex gap-3 lg:flex-col">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={classNames(
                  'relative rounded-xl px-5 py-3 text-left text-sm font-medium transition-colors',
                  active === i ? 'text-white' : 'text-white/55 hover:text-white',
                )}
              >
                {active === i && (
                  <motion.span
                    layoutId="legal-tab"
                    className="absolute inset-0 rounded-xl border border-brand/40 bg-brand/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{s.title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={SECTIONS[active].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="card p-8 lg:col-span-3"
          >
            <h2 className="text-2xl font-bold text-gradient">{SECTIONS[active].title}</h2>
            <div className="mt-6 space-y-4">
              {SECTIONS[active].body.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="leading-relaxed text-white/65"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <p className="mt-8 text-xs text-white/40">
              Última actualización: {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
