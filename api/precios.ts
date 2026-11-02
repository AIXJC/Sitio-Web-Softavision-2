// Función serverless (Vercel) para precios dinámicos.
// Lee los precios base del proveedor (abasteo.mx) y aplica el margen de ganancia ×1.3.
// Variables de entorno opcionales:
//   MARGEN_GANANCIA → multiplicador (por defecto 1.3)
// Responde con un objeto: { [idProducto]: precioFinalConMargen }

import preciosProveedor from './precios-proveedor.json';

const MARGEN = Number(process.env.MARGEN_GANANCIA) || 1.3;

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  try {
    const preciosConMargen: Record<string, number> = {};

    for (const [id, precioBase] of Object.entries(preciosProveedor)) {
      preciosConMargen[id] = Math.round(Number(precioBase) * MARGEN * 100) / 100;
    }

    res.status(200).json({
      precios: preciosConMargen,
      margen: MARGEN,
      actualizado: new Date().toISOString(),
      fuente: 'abasteo.mx (precios-proveedor.json)',
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}