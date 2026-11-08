'use client';
import { useEffect, useState } from 'react';
import { fetchOrders, hasSupabase } from '@/lib/supabase';
import type { Order } from '@/types';

function mapOrder(o: any): Order {
  return { id: o.id, items: o.items, total: o.total, status: o.status, buyerName: o.buyer_name, buyerPhone: o.buyer_phone, address: o.address, note: o.note, paymentMethod: o.payment_method || 'SeaBank', createdAt: o.created_at };
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    async function load() { if (hasSupabase) { const data = await fetchOrders(); if (data) { setOrders(data.map(mapOrder)); return; } } const raw = localStorage.getItem('kuro-orders'); setOrders(raw ? JSON.parse(raw) : []); }
    load();
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
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-bold uppercase">{o.status}</span>
            </div>
            
            {o.status === 'pending' && o.paymentMethod === 'SeaBank' && (
              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                <p>Silakan transfer <strong>Rp {o.total.toLocaleString('id-ID')}</strong> ke:</p>
                <p className="font-bold text-lg mt-1 mb-2">SeaBank: 90123456789 (a/n Kuro Kuliner)</p>
                <p className="text-xs">*Ongkir akan dikonfirmasi Admin via WhatsApp. Kirim bukti transfer ke WA Admin.</p>
              </div>
            )}

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
