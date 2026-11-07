export type Menu = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
};

export type CartItem = Menu & { qty: number };

export type OrderItem = { menuId: string; name: string; price: number; qty: number };

export type Order = {
  id: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'paid' | 'cooking' | 'done' | 'cancelled';
  buyerName: string;
  buyerPhone: string;
  address: string;
  note?: string;
  createdAt: string;
};
