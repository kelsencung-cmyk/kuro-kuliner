'use client';
import { useCart } from '@/lib/store';
import { useState } from 'react';
import { payMock } from '@/lib/payment';
import { useRouter } from 'next/navigation';
import type { Order } from '@/types';

export default function CartPage() {
  const { items, remove, setQty, clear, total } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const router = useRouter();

  const sum = total();

  async function checkout() {
    setErr('');
    if (!name || !phone || !address) { setErr('Lengkapi nama, telepon, dan alamat.'); return; }
    if (items.length === 0) { setErr('Keranjang kosong.'); return; }
    setLoading(true);
    const order = await payMock({
      items: items.map((i) => ({ menuId: i.id, name: i.name, price: i.price, qty: i.qty })),
      total: sum, buyerName: name, buyerPhone: phone, address, note
    });
    const raw = localStorage.getItem('kuliner-orders');
    const arr: Order[] = raw ? JSON.parse(raw) : [];
    arr.unshift(order);
    localStorage.setItem('kuliner-orders', JSON.stringify(arr));
    clear();
    setLoading(false);
    router.push('/orders');
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h1 className="text-xl font-bold mb-4">Keranjang</h1>
        {items.length === 0 && <p className="text-neutral-500">Keranjang kosong.</p>}
        <div className="space-y-3">
          {items.map((i) => (
            <div key={i.id} className="bg-white border border-neutral-200 rounded-xl p-3 flex gap-3">
              <img src={i.image} alt={i.name} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{i.name}</h3>
                <p className="text-brand-600 text-sm font-bold">Rp {i.price.toLocaleString('id-ID')}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => setQty(i.id, i.qty - 1)} className="w-7 h-7 rounded bg-neutral-100">-</button>
                  <span className="w-8 text-center text-sm">{i.qty}</span>
                  <button onClick={() => setQty(i.id, i.qty + 1)} className="w-7 h-7 rounded bg-neutral-100">+</button>
                  <button onClick={() => remove(i.id)} className="ml-auto text-xs text-red-500">Hapus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Checkout</h2>
        <div className="bg-white border border-neutral-200 rounded-xl p-4 space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" className="w-full px-3 py-2 border rounded-lg" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="No. Telepon" className="w-full px-3 py-2 border rounded-lg" />
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Alamat" className="w-full px-3 py-2 border rounded-lg" rows={2} />
          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Catatan (opsional)" className="w-full px-3 py-2 border rounded-lg" rows={2} />
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span><span className="text-brand-600">Rp {sum.toLocaleString('id-ID')}</span>
          </div>
          {err && <p className="text-sm text-red-500">{err}</p>}
          <button disabled={loading} onClick={checkout} className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white py-3 rounded-xl font-semibold">{loading ? 'Memproses...' : 'Bayar (Mock)'}</button>
        </div>
      </div>
    </div>
  );
}
