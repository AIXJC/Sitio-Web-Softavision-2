export const BRAND = {
  name: 'SOFTAVISION',
  tagline: 'Tecnología, seguridad y comercio inteligente',
  description:
    'Sistemas POS, videovigilancia, cómputo y soluciones tecnológicas para hacer crecer tu negocio.',
} as const;

export const CONTACT = {
  phone: '+52 81 3124 4540',
  phoneRaw: '+528131244540',
  whatsapp: '528131244540',
  email: 'alexanderucost@icloud.com',
  address: 'Nuevo León, México',
  hours: 'Ventas: Lun a Sáb · 8:00 a.m. – 6:00 p.m.',
  support: 'Soporte técnico 24/7 · Los 365 días',
} as const;

// 👉 Cuenta real a la que llegan las transferencias/depósitos.
//    Confirma el TITULAR. La CLABE es opcional: si la tienes (18 dígitos) se muestra.
export const PAYMENT_ACCOUNT = {
  bankName: 'Banregio',
  accountHolder: 'SOFTAVISION', // ← cambia por el titular real de la cuenta
  accountNumber: '4741742926563860', // Tarjeta / cuenta Banregio
  clabe: '', // Opcional: pega aquí tu CLABE SPEI (18 dígitos). Si está vacía, no se muestra.
} as const;


export const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61575507816498', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/softavision/', icon: 'instagram' },
  // TODO: agregar TikTok y LinkedIn cuando se creen las cuentas.
  // { label: 'TikTok', href: 'https://www.tiktok.com/@...', icon: 'tiktok' },
  // { label: 'LinkedIn', href: 'https://www.linkedin.com/company/...', icon: 'linkedin' },
] as const;

export const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Tienda', to: '/tienda' },
  { label: 'Carrito', to: '/carrito' },
  { label: 'Soporte', to: '/soporte' },
  { label: 'Recursos', to: '/recursos' },
] as const;

export function whatsappLink(message?: string): string {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(`Hola ${BRAND.name}, quiero información sobre sus productos.`);
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`;
}
