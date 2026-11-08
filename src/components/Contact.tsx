import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { CONTACT, whatsappLink } from '../lib/constants';
import { services } from '../data/site';
import { useUI } from '../store/ui';
import Reveal from './Reveal';

const EXTRA_OPTIONS = ['Otro'];
const INTEREST_OPTIONS = [...services.map((s) => s.title), ...EXTRA_OPTIONS];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const interest = useUI((s) => s.interest);
  const setInterest = useUI((s) => s.setInterest);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setInterest('');
    setTimeout(() => setSent(false), 4000);
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand';

  return (
    <section id="contacto" className="relative scroll-mt-24 py-12 sm:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
            Contacto
          </p>
          <h2 className="section-title">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">
            Cuéntanos qué necesitas y te enviamos una cotización sin compromiso. También
            puedes escribirnos directo por WhatsApp.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { label: 'Teléfono', value: CONTACT.phone },
              { label: 'Correo', value: CONTACT.email },
              { label: 'Dirección', value: CONTACT.address },
              { label: 'Horario', value: CONTACT.hours },
              { label: 'Soporte', value: CONTACT.support },
            ].map((row) => (
              <motion.div
                key={row.label}
                whileHover={{ x: 6 }}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-3.5"
              >
                <span className="text-xs uppercase tracking-wider text-white/45">
                  {row.label}
                </span>
                <span className="text-sm font-medium text-white">{row.value}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ boxShadow: '0 0 40px rgba(30,94,255,0.15)' }}
            className="card relative overflow-hidden p-7"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <p className="relative mb-5 text-sm font-semibold text-white">
              Solicita tu cotización <span className="font-normal text-white/50">— respuesta en menos de 24 h</span>
            </p>
            <div className="relative grid gap-4 sm:grid-cols-2">
              <input required placeholder="Nombre" className={inputClass} />
              <input required placeholder="Teléfono" className={inputClass} />
              <input
                required
                type="email"
                placeholder="Correo electrónico"
                className={`sm:col-span-2 ${inputClass}`}
              />
              <select
                className={`sm:col-span-2 ${inputClass}`}
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              >
                <option value="" disabled>
                  Producto o servicio de interés
                </option>
                {INTEREST_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <textarea
                required
                rows={4}
                placeholder="Cuéntanos sobre tu negocio…"
                className={`sm:col-span-2 ${inputClass}`}
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn-primary sm:col-span-2"
              >
                {sent ? '✓ Mensaje enviado' : 'Enviar mensaje →'}
              </motion.button>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-3 flex items-center justify-center gap-2 text-sm text-white/55 transition-colors hover:text-sky"
            >
              o escríbenos por WhatsApp →
            </a>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}
