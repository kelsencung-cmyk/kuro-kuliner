'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Menu } from '@/types';
type CartState = { items: CartItem[]; add: (m: Menu) => void; remove: (id: string) => void; setQty: (id: string, qty: number) => void; clear: () => void; total: () => number; };
export const useCart = create<CartState>()(persist((set, get) => ({
  items: [], add: (m) => set((s) => { const found = s.items.find((i) => i.id === m.id); if (found) return { items: s.items.map((i) => i.id === m.id ? { ...i, qty: i.qty + 1 } : i) }; return { items: [...s.items, { ...m, qty: 1 }] }; }),
  remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
  setQty: (id, qty) => set((s) => ({ items: s.items.map((i) => i.id === id ? { ...i, qty: Math.max(1, qty) } : i) })),
  clear: () => set({ items: [] }), total: () => get().items.reduce((a, i) => a + i.price * i.qty, 0)
}), { name: 'kuro-cart' }));
