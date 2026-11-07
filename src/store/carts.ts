import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  add: (product: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      add: (product, qty = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          const currentQty = existing ? existing.qty : 0;
          const maxQty = product.stock ?? Infinity;
          const newQty = Math.min(currentQty + qty, maxQty);
          if (newQty <= currentQty && maxQty > 0) return state; // No stock available
          const items = existing
            ? state.items.map((i) =>
                i.product.id === product.id ? { ...i, qty: newQty } : i,
              )
            : newQty > 0
              ? [...state.items, { product, qty: newQty }]
              : state.items;
          return { items, isOpen: true };
        }),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.product.id !== id) })),
      setQty: (id, qty) =>
        set((state) => ({
          items:
            qty <= 0
              ? state.items.filter((i) => i.product.id !== id)
              : state.items.map((i) =>
                  i.product.id === id ? { ...i, qty } : i,
                ),
        })),
      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
    }),
    { name: 'softavision-cart' },
  ),
);

export const selectCount = (items: CartItem[]) =>
  items.reduce((acc, i) => acc + i.qty, 0);

export const selectTotal = (items: CartItem[]) =>
  items.reduce((acc, i) => acc + i.qty * i.product.price, 0);
