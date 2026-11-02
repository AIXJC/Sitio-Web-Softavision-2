export function formatPrice(value: number): string {
  // Usamos style 'decimal' para obtener el número con separadores de miles
  // y agregamos el símbolo y moneda manualmente para que sea determinista
  // en cualquier entorno (Node, navegador, Happy DOM en tests).
  const numberPart = new Intl.NumberFormat('es-MX', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(value);
  return `$${numberPart} MXN`;
}

/**
 * Aplica el margen de ganancia (por defecto ×1.3) a un precio base.
 * Se usa para mostrar precios de venta al público con margen incluido.
 */
export function applyMargin(price: number, margen = 1.3): number {
  return Math.round(price * margen * 100) / 100;
}


export function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
