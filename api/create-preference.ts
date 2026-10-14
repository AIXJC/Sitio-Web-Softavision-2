// Función serverless (Vercel / Netlify Functions) para crear una preferencia de pago
// en MercadoPago. Guarda tu ACCESS TOKEN en el servidor (nunca en el frontend).
//
// Variables de entorno requeridas (en el panel de Vercel/Netlify, NO en el repo):
//   - MERCADOPAGO_ACCESS_TOKEN  → tu token privado de MercadoPago
//   - PUBLIC_URL                → dominio público del sitio (ej. https://tudominio.com)
//
// Recibe por POST: { items: [{ id, title, quantity, unit_price, currency_id? }], external_reference? }
// Devuelve: { init_point, preference_id }

interface PreferenceItem {
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
  currency_id?: string;
}

interface PreferenceBody {
  items: PreferenceItem[];
  external_reference?: string;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!accessToken) {
    res.status(500).json({ error: 'Falta MERCADOPAGO_ACCESS_TOKEN en el servidor' });
    return;
  }

  // El body puede venir como objeto (Vercel) o como string (algunos runtimes).
  let body: PreferenceBody;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: 'JSON inválido' });
    return;
  }

  if (!body?.items?.length) {
    res.status(400).json({ error: 'El carrito está vacío' });
    return;
  }

  const baseUrl = process.env.PUBLIC_URL || 'http://localhost:5173';

  const preference = {
    items: body.items.map((item) => ({
      id: String(item.id),
      title: item.title,
      quantity: Number(item.quantity),
      unit_price: Number(item.unit_price),
      currency_id: item.currency_id || 'MXN',
    })),
    external_reference: body.external_reference || '',
    back_urls: {
      success: `${baseUrl}/checkout?status=approved`,
      failure: `${baseUrl}/checkout?status=failure`,
      pending: `${baseUrl}/checkout?status=pending`,
    },
    auto_return: 'approved',
    statement_descriptor: 'SOFTAVISION',
  };

  try {
    const mpRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preference),
    });

    const data = await mpRes.json();

    if (!mpRes.ok) {
      res.status(mpRes.status).json({ error: 'Error de MercadoPago', detail: data });
      return;
    }

    res.status(200).json({
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point,
      preference_id: data.id,
    });
  } catch (err) {
    res.status(500).json({ error: 'No se pudo crear la preferencia', detail: String(err) });
  }
}
