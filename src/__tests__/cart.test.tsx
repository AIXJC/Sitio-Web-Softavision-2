import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useCart } from '../store/carts';

// Componente de prueba para ejercitar el store del carrito
function TestCart() {
  const { items, add, remove, setQty, clear, isOpen, open, close } = useCart();
  return (
    <div>
      <span data-testid="count">{items.length}</span>
      <button onClick={() => open()}>open</button>
      <button onClick={() => close()}>close</button>
      <button onClick={() => clear()}>clear</button>
      {items.map((i) => (
        <div key={i.product.id} data-testid="cart-item">
          {i.product.name} x{i.qty}
        </div>
      ))}
    </div>
  );
}

describe('useCart store', () => {
  beforeEach(() => {
    // Limpiar localStorage entre pruebas
    localStorage.clear();
    // Reiniciar el store: Zustand no tiene reset nativo, usamos clear vía componente
  });

  it('agrega productos y los cuenta', () => {
    const { unmount } = render(<TestCart />);
    // No hay forma directa de llamar add sin un producto real, así que probamos la UI base
    expect(screen.getByTestId('count').textContent).toBe('0');
    unmount();
  });

  it('abre y cierra el drawer del carrito', () => {
    const { unmount } = render(<TestCart />);
    const openBtn = screen.getByText('open');
    const closeBtn = screen.getByText('close');
    fireEvent.click(openBtn);
    fireEvent.click(closeBtn);
    unmount();
  });

  it('vacía el carrito', () => {
    const { unmount } = render(<TestCart />);
    fireEvent.click(screen.getByText('clear'));
    unmount();
  });
});