import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BRAND, CONTACT, NAV_LINKS, SOCIAL, whatsappLink } from '../lib/constants';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-800">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-lg font-bold tracking-widest">{BRAND.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {BRAND.description}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
            Navegación
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-white/60 transition-colors hover:text-sky"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
            Contacto
          </h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>{CONTACT.phone}</li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-sky">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.address}</li>
            <li>{CONTACT.hours}</li>
            <li className="text-sky/90">{CONTACT.support}</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
            Síguenos
          </h4>
          <div className="flex flex-wrap gap-3">
            {SOCIAL.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 transition-colors hover:border-brand/50 hover:text-white"
              >
                {s.label}
              </motion.a>
            ))}
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 w-full"
          >
            Cotiza por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-site flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</p>
          <Link to="/legal" className="transition-colors hover:text-sky">
            Privacidad y Términos
          </Link>
        </div>
      </div>
    </footer>
  );
}
