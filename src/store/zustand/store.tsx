import { create } from 'zustand'

export const useStore = create((set) => ({
  total: 0,
  addToCart: () => set((state) => ({ total: state.total + 1 }))
}));