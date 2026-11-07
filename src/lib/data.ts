import type { Menu } from '@/types';

export const BRAND = 'Kuro Kuliner';

export const MENU_SEED: Menu[] = [
  { id: 'm1', name: 'Nasi Goreng Spesial', description: 'Nasi goreng dengan telur, ayam, dan kerupuk.', price: 18000, category: 'Makanan', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600', stock: 50 },
  { id: 'm2', name: 'Mie Goreng', description: 'Mie goreng dengan sayur, telur, dan ayam.', price: 16000, category: 'Makanan', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600', stock: 45 },
  { id: 'm3', name: 'Mie Rebus', description: 'Mie rebus kuah kaldu dengan telur dan sayur.', price: 15000, category: 'Makanan', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600', stock: 45 },
  { id: 'm4', name: 'Mie Ayam Bakso', description: 'Mie ayam dengan bakso sapi dan pangsit.', price: 17000, category: 'Makanan', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600', stock: 40 },
  { id: 'm5', name: 'Ayam Geprek', description: 'Ayam crispy dengan sambal bawang.', price: 20000, category: 'Makanan', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600', stock: 30 },
  { id: 'm6', name: 'Nasi Uduk', description: 'Nasi uduk dengan ayam goreng dan sambal.', price: 15000, category: 'Makanan', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600', stock: 35 },
  { id: 'm7', name: 'Es Teh Manis', description: 'Teh manis dingin segar.', price: 5000, category: 'Minuman', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600', stock: 100 },
  { id: 'm8', name: 'Es Jeruk', description: 'Jeruk peras dengan es.', price: 7000, category: 'Minuman', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600', stock: 80 },
  { id: 'm9', name: 'Es Campur', description: 'Es campur dengan sirup dan buah.', price: 12000, category: 'Minuman', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600', stock: 40 },
  { id: 'm10', name: 'Pisang Goreng', description: 'Pisang goreng crispy dengan topping keju.', price: 10000, category: 'Camilan', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600', stock: 25 },
  { id: 'm11', name: 'Tahu Crispy', description: 'Tahu goreng crispy dengan bumbu tabur.', price: 8000, category: 'Camilan', image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=600', stock: 30 }
];

export const CATEGORIES = ['Semua', 'Makanan', 'Minuman', 'Camilan'];
