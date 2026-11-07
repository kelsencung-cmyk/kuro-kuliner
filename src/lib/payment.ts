import type { Order, OrderItem } from '@/types';

export async function payMock(payload: {
  items: OrderItem[];
  total: number;
  buyerName: string;
  buyerPhone: string;
  address: string;
  note?: string;
}): Promise<Order> {
  await new Promise((r) => setTimeout(r, 600));
  return {
    id: 'ORD-' + Date.now().toString(36).toUpperCase(),
    items: payload.items,
    total: payload.total,
    status: 'paid',
    buyerName: payload.buyerName,
    buyerPhone: payload.buyerPhone,
    address: payload.address,
    note: payload.note,
    createdAt: new Date().toISOString()
  };
}
