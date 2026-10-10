import { create } from 'zustand';

interface UIState {
  /** Valor preseleccionado del select "Producto o servicio de interés" */
  interest: string;
  setInterest: (value: string) => void;
}

export const useUI = create<UIState>()((set) => ({
  interest: '',
  setInterest: (interest) => set({ interest }),
}));
