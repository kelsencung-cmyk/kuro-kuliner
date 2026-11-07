'use client';
import { useEffect, useState } from 'react';
import type { Order } from '@/types';

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    const raw = localStorage.getItem('kuliner-orders');
    setOrders(raw ? JSON.parse(raw) : []);
  }, []);
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Riwayat Pesanan</h1>
      {orders.length === 0 && <p className="text-neutral-500">Belum ada pesanan.</p>}
      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="bg-white border border-neutral-200 rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{o.id}</p>
                <p className="text-xs text-neutral-500">{new Date(o.createdAt).toLocaleString('id-ID')}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">{o.status}</span>
            </div>
            <ul className="mt-3 text-sm space-y-1">
              {o.items.map((i) => <li key={i.menuId} className="flex justify-between"><span>{i.name} x{i.qty}</span><span>Rp {(i.price * i.qty).toLocaleString('id-ID')}</span></li>)}
            </ul>
            <div className="mt-2 pt-2 border-t flex justify-between font-bold text-brand-600">
              <span>Total</span><span>Rp {o.total.toLocaleString('id-ID')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
