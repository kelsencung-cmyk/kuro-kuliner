import type { Menu } from '@/types';

export const BRAND = 'Kuro Gadget';

export const MENU_SEED: Menu[] = [
  { id: 'h1', name: 'iPhone 13 128GB', description: 'Garansi Resmi iBox. Fullset, mulus 99%.', price: 7500000, category: 'Handphone', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600', stock: 5 },
  { id: 'h2', name: 'Samsung Galaxy S23', description: 'Garansi SEIN. Warna Phantom Black.', price: 10500000, category: 'Handphone', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600', stock: 3 },
  { id: 'h3', name: 'Xiaomi Redmi Note 12', description: 'Garansi Resmi. RAM 8GB / 256GB.', price: 2800000, category: 'Handphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600', stock: 10 },
  { id: 'a1', name: 'Casing Silikon Premium', description: 'Tersedia untuk semua tipe iPhone & Android.', price: 45000, category: 'Aksesoris', image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=600', stock: 50 },
  { id: 'a2', name: 'Tempered Glass Anti Gores', description: 'Lapisan 9H, jernih, anti sidik jari.', price: 30000, category: 'Aksesoris', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600', stock: 100 },
  { id: 'a3', name: 'Charger Fast Charging 33W', description: 'Kepala charger + kabel Type-C.', price: 120000, category: 'Aksesoris', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600', stock: 25 },
  { id: 'a4', name: 'TWS Bluetooth Earphone', description: 'Baterai tahan lama, kualitas suara jernih.', price: 250000, category: 'Aksesoris', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600', stock: 15 }
];

export const CATEGORIES = ['Semua', 'Handphone', 'Aksesoris'];
