import { motion } from 'framer-motion';
import { useState } from 'react';
import { PAYMENT_ACCOUNT } from '../lib/constants';

interface CopyFieldProps {
  label: string;
  value: string;
  mono?: boolean;
}

function CopyField({ label, value, mono = true }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // El portapapeles puede no estar disponible (HTTP o permisos); se ignora.
    }
  }

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
        <p className={`text-xs font-semibold text-white break-all ${mono ? 'font-mono tracking-wide' : ''}`}>
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        aria-label={`Copiar ${label}`}
      >
        {copied ? 'âœ“ Copiado' : 'Copiar'}
      </button>
    </div>
  );
}

interface PaymentInfoProps {
  concept: string;
}

export default function PaymentInfo({ concept }: PaymentInfoProps) {
  const fields: CopyFieldProps[] = [
    { label: 'Banco', value: PAYMENT_ACCOUNT.bankName, mono: false },
    { label: 'Titular', value: PAYMENT_ACCOUNT.accountHolder, mono: false },
    { label: 'Tarjeta / Cuenta', value: PAYMENT_ACCOUNT.accountNumber },
  ];
  if (PAYMENT_ACCOUNT.clabe) {
    fields.push({ label: 'CLABE', value: PAYMENT_ACCOUNT.clabe });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-3 rounded-2xl border border-brand/30 bg-brand/5 p-4 sm:p-5"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-sky text-lg">
          ðŸ¦
        </span>
        <div>
          <h3 className="text-base font-bold">Datos para tu transferencia</h3>
          <p className="text-xs text-white/50">
            Transfiere o deposita a la siguiente cuenta de {PAYMENT_ACCOUNT.bankName}.
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {fields.map((f) => (
          <CopyField key={f.label} label={f.label} value={f.value} mono={f.mono} />
        ))}
      </div>

      <div className="rounded-xl border border-brand/20 bg-brand/10 p-1">
        <CopyField label="Concepto / Referencia" value={concept} mono={false} />
      </div>

      <p className="text-center text-xs text-white/40">
        Usa este concepto para que identifiquemos tu pago. Te avisaremos por WhatsApp o
        correo cuando se acredite.
      </p>
    </motion.div>
  );
}

