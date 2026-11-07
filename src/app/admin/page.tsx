'use client';
import { useEffect, useState } from 'react';
import { getSession } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import type { Order } from '@/types';

export default function AdminPage() {
  const router = useRouter();
  const [ok, setOk] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const s = getSession();
    if (s?.role !== 'admin') { router.push('/login'); return; }
    setOk(true);
    const raw = localStorage.getItem('kuliner-orders');
    setOrders(raw ? JSON.parse(raw) : []);
  }, [router]);

  function updateStatus(id: string, status: Order['status']) {
    const next = orders.map((o) => o.id === id ? { ...o, status } : o);
    setOrders(next);
    localStorage.setItem('kuliner-orders', JSON.stringify(next));
  }

  if (!ok) return null;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Admin — Pesanan</h1>
      {orders.length === 0 && <p className="text-neutral-500">Belum ada pesanan.</p>}
      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="bg-white border border-neutral-200 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{o.id}</p>
                <p className="text-xs text-neutral-500">{o.buyerName} • {o.buyerPhone}</p>
                <p className="text-xs text-neutral-500">{o.address}</p>
              </div>
              <select value={o.status} onChange={(e) => updateStatus(o.id, e.target.value as Order['status'])} className="text-sm border rounded-lg px-2 py-1">
                <option value="paid">paid</option>
                <option value="cooking">cooking</option>
                <option value="done">done</option>
                <option value="cancelled">cancelled</option>
              </select>
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
