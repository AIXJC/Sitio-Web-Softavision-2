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


export const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61575507816498' },
  { label: 'Instagram', href: 'https://www.instagram.com/softavision/' },
  // TODO: agregar TikTok y LinkedIn cuando se creen las cuentas.
] as const;

export const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Tienda', to: '/tienda' },
  { label: 'Carrito', to: '/carrito' },
  { label: 'Legal', to: '/legal' },
] as const;

export function whatsappLink(message?: string): string {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(`Hola ${BRAND.name}, quiero información sobre sus productos.`);
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`;
}
