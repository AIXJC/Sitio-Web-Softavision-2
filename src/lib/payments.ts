// Helper para iniciar un pago con tarjeta vía MercadoPago (Checkout Pro).
// Llama a la función serverless /api/create-preference y redirige al checkout.

export interface PaymentItem {
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
  currency_id?: string;
}

/**
 * Crea la preferencia de pago en el servidor y redirige al usuario
 * a la pantalla segura de MercadoPago para capturar su tarjeta.
 * Si el servidor no está disponible, lanza un error con mensaje claro.
 */
export async function payWithCard(items: PaymentItem[], external_reference = ''): Promise<void> {
  const res = await fetch('/api/create-preference', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items, external_reference }),
  });

  if (!res.ok) {
    let detail = '';
    try {
      detail = (await res.json())?.error ?? '';
    } catch {
      /* ignora */
    }
    throw new Error(detail || 'No se pudo iniciar el pago con tarjeta.');
  }

  const data = (await res.json()) as {
    init_point?: string;
    sandbox_init_point?: string;
    preference_id?: string;
  };

  // En producción usa init_point; si sólo hay sandbox, úsalo (modo pruebas).
  const redirectUrl = data.init_point || data.sandbox_init_point;
  if (!redirectUrl) {
    throw new Error('MercadoPago no devolvió una URL de pago.');
  }

  window.location.href = redirectUrl;
}
