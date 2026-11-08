'use client';
import { useEffect, useState } from 'react';
import { getSession } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { fetchOrders, hasSupabase, updateOrderStatus, fetchStoreStatus, setStoreStatus, fetchStoreSettings, updateStoreSettings } from '@/lib/supabase';
import type { Order } from '@/types';

function mapOrder(o: any): Order { return { id: o.id, items: o.items, total: o.total, status: o.status, buyerName: o.buyer_name, buyerPhone: o.buyer_phone, address: o.address, note: o.note, paymentMethod: o.payment_method || 'SeaBank', createdAt: o.created_at }; }
function getStatusColor(status: string) {
  switch (status) {
    case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'; case 'paid': return 'bg-green-100 text-green-800 border-green-200';
    case 'cooking': return 'bg-blue-100 text-blue-800 border-blue-200'; case 'done': return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'cancelled': return 'bg-red-100 text-red-800 border-red-200'; default: return 'bg-gray-100 text-gray-800';
  }
}

export default function AdminPage() {
  const router = useRouter(); const [ok, setOk] = useState(false); const [orders, setOrders] = useState<Order[]>([]);
  const [isOpen, setIsOpen] = useState(true); const [loadingToggle, setLoadingToggle] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const s = getSession(); if (s?.role !== 'admin') { router.push('/login'); return; } setOk(true);
    async function load() { 
      if (hasSupabase) { 
        const data = await fetchOrders(); if (data) { setOrders(data.map(mapOrder)); }
        const status = await fetchStoreStatus(); setIsOpen(status);
        const settings = await fetchStoreSettings(); if(settings) setStoreName(settings.store_name);
      } else { 
        const raw = localStorage.getItem('kuro-orders'); setOrders(raw ? JSON.parse(raw) : []); 
      } 
    } load();
  }, [router]);

  async function updateStatus(id: string, status: Order['status']) { 
    if (hasSupabase) { await updateOrderStatus(id, status); } else { const next = orders.map((o) => o.id === id ? { ...o, status } : o); localStorage.setItem('kuro-orders', JSON.stringify(next)); } 
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o)); 
  }

  async function toggleStore() {
    if (!hasSupabase) return;
    setLoadingToggle(true);
    const newStatus = !isOpen;
    const res = await setStoreStatus(newStatus);
    if (res.ok) setIsOpen(newStatus);
    setLoadingToggle(false);
  }

  async function saveName(e: React.FormEvent) {
    e.preventDefault(); setMsg(''); setSaving(true);
    const res = await updateStoreSettings(storeName);
    if (res.ok) { setMsg('Nama toko berhasil disimpan!'); router.refresh(); } else { setMsg('Gagal menyimpan.'); }
    setSaving(false);
  }

  if (!ok) return null;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <p className="text-sm text-neutral-500">Kelola pesanan dan pengaturan toko.</p>
        </div>
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <span className="text-sm font-semibold">Status Toko:</span>
          <button onClick={toggleStore} disabled={loadingToggle} className={`px-4 py-2 rounded-lg text-sm font-bold text-white transition-colors ${isOpen ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} disabled:opacity-50`}>
            {isOpen ? 'TOKO BUKA (Klik untuk Tutup)' : 'TOKO TUTUP (Klik untuk Buka)'}
          </button>
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded-xl p-4 mb-6 shadow-sm">
        <h2 className="font-bold mb-3">Pengaturan Nama Toko</h2>
        <form onSubmit={saveName} className="flex gap-2 items-center">
          <input value={storeName} onChange={(e) => setStoreName(e.target.value)} className="border border-neutral-300 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-brand-400" placeholder="Nama Toko" />
          <button disabled={saving} type="submit" className="bg-brand-600 text-white px-4 py-2 rounded-lg font-semibold disabled:opacity-50">{saving ? 'Menyimpan...' : 'Simpan'}</button>
        </form>
        {msg && <p className="text-sm text-green-600 mt-2">{msg}</p>}
      </div>

      <h2 className="text-lg font-bold mb-3">Daftar Pesanan</h2>
      {orders.length === 0 && <p className="text-neutral-500">Belum ada pesanan.</p>}
      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div>
                <p className="font-bold text-lg">{o.id}</p>
                <p className="text-sm text-neutral-600 font-medium">{o.buyerName} • <a href={`https://wa.me/${o.buyerPhone}`} target="_blank" className="text-blue-600 hover:underline">{o.buyerPhone}</a></p>
                <p className="text-xs text-neutral-500 mt-1">{o.address}</p>
                <p className="text-xs text-neutral-500 mt-1 italic">Catatan: {o.note || '-'}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(o.status)}`}>{o.status.toUpperCase()}</span>
                <select value={o.status} onChange={(e) => updateStatus(o.id, e.target.value as Order['status'])} className="text-sm border border-neutral-300 rounded-lg px-3 py-1.5 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-brand-400">
                  <option value="pending">Pending</option><option value="paid">Paid</option><option value="cooking">Cooking</option><option value="done">Done</option><option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-100">
              <ul className="text-sm space-y-1">
                {o.items.map((i) => <li key={i.menuId} className="flex justify-between text-neutral-700"><span>{i.name} <span className="text-brand-600 font-bold">x{i.qty}</span></span><span>Rp {(i.price * i.qty).toLocaleString('id-ID')}</span></li>)}
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-100 flex justify-between items-center">
              <span className="text-sm font-medium text-neutral-500">Metode: <strong className="text-neutral-800">{o.paymentMethod}</strong></span>
              <span className="font-bold text-lg text-brand-600">Rp {o.total.toLocaleString('id-ID')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
