// Función serverless (Vercel) para enviar notificaciones de pedido por correo.
// Usa Resend (https://resend.com). Plan gratuito disponible.
//
// Variables de entorno requeridas en Vercel:
//   RESEND_API_KEY   → API Key de Resend
//   RESEND_FROM_EMAIL→ Correo remitente (ej. onboarding@resend.dev o tu dominio verificado)
//   RESEND_TO_EMAIL  → Correo donde llegan los pedidos (ej. alexanderucost@icloud.com)
//   PUBLIC_URL       → https://softavision.vercel.app

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderItem {
  title: string;
  qty: number;
  price: number;
}

interface OrderData {
  items: OrderItem[];
  total: number;
  count: number;
  method: string;
  reference: string;
  concept?: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: 'Falta RESEND_API_KEY en el servidor' });
    return;
  }

  const { items, total, count, method, reference, concept, customer } = req.body as OrderData;

  const to = process.env.RESEND_TO_EMAIL || 'alexanderucost@icloud.com';
  const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  const methodLabel =
    method === 'tarjeta' ? 'Tarjeta de crédito/débito (MercadoPago)' :
    method === 'transferencia' ? 'Transferencia bancaria (Banregio)' :
    method === 'efectivo' ? 'Efectivo contra entrega' :
    method;

  const itemsHtml = items
    .map(
      (i) => `
      <li style="margin-bottom: 6px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px;">
        <strong>${i.title}</strong> x${i.qty} — $${(i.price * i.qty).toLocaleString(
        'es-MX'
      )} MXN
      </li>
    `
    )
    .join('');

  const html = `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 14px; background: #ffffff;">
      <h1 style="color: #1e3a8a; font-size: 24px; margin: 0 0 16px 0;">🛒 Nuevo pedido SOFTAVISION</h1>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 8px 0; width: 40%; color: #64748b; font-size: 14px;">Referencia</td>
          <td style="padding: 8px 0; font-weight: 600;">${reference}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Método de pago</td>
          <td style="padding: 8px 0; font-weight: 600;">${methodLabel}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Total</td>
          <td style="padding: 8px 0; font-weight: 700; color: #1e3a8a;">$${total.toLocaleString(
            'es-MX'
          )} MXN</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Productos</td>
          <td style="padding: 8px 0; font-weight: 600;">${count}</td>
        </tr>
      </table>

      <h2 style="color: #1e3a8a; font-size: 18px; margin: 20px 0 10px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Cliente</h2>
      <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; color: #334155;">
        <li style="margin-bottom: 4px;"><strong>Nombre:</strong> ${customer.name}</li>
        <li style="margin-bottom: 4px;"><strong>Correo:</strong> ${customer.email}</li>
        <li style="margin-bottom: 4px;"><strong>Teléfono:</strong> ${customer.phone}</li>
        <li style="margin-bottom: 4px;"><strong>Dirección:</strong> ${customer.address}, ${customer.city}</li>
      </ul>

      <h2 style="color: #1e3a8a; font-size: 18px; margin: 20px 0 10px 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Productos</h2>
      <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; color: #334155;">
        ${itemsHtml}
      </ul>

      ${concept ? `<p style="margin-bottom: 20px; color: #64748b;"><strong>Concepto para transferencia:</strong> ${concept}</p>` : ''}

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

      <p style="color: #94a3b8; font-size: 12px; margin: 0;">
        Generado automáticamente desde ${process.env.PUBLIC_URL || 'softavision.vercel.app'}
      </p>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: `SOFTAVISION Notificaciones <${from}>`,
      to: [to],
      subject: `Nuevo pedido SOFTAVISION · Ref ${reference}`,
      html,
    });

    res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error('Resend error:', err);
    res.status(500).json({
      error: 'No se pudo enviar el correo de notificación',
      detail: err.message,
    });
  }
}
