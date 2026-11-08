'use client';
import { useCart } from '@/lib/store';
import { useState, useEffect } from 'react';
import { payMock } from '@/lib/payment';
import { insertOrder, hasSupabase, fetchStoreStatus } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import type { Order } from '@/types';

export default function CartPage() {
  const { items, remove, setQty, clear, total } = useCart();
  const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [address, setAddress] = useState('');
  const [note, setNote] = useState(''); const [method, setMethod] = useState('SeaBank');
  const [loading, setLoading] = useState(false); const [err, setErr] = useState('');
  const [isOpen, setIsOpen] = useState(true); const [loadingStore, setLoadingStore] = useState(true);
  const router = useRouter();
  const sum = total();

  useEffect(() => {
    async function check() {
      if (hasSupabase) { const status = await fetchStoreStatus(); setIsOpen(status); }
      setLoadingStore(false);
    }
    check();
  }, []);

  async function checkout() {
    if (!isOpen) { setErr('Toko sedang tutup.'); return; }
    setErr(''); if (!name || !phone || !address) { setErr('Lengkapi nama, telepon, dan alamat.'); return; } if (items.length === 0) { setErr('Keranjang kosong.'); return; }
    setLoading(true);
    const order = await payMock({ items: items.map((i) => ({ menuId: i.id, name: i.name, price: i.price, qty: i.qty })), total: sum, buyerName: name, buyerPhone: phone, address, note, paymentMethod: method });
    
    if (hasSupabase) {
      const res = await insertOrder(order);
      if (!res.ok) { setErr('Gagal menyimpan pesanan ke database.'); setLoading(false); return; }
    } else {
      const raw = localStorage.getItem('kuro-orders'); const arr: Order[] = raw ? JSON.parse(raw) : []; arr.unshift(order); localStorage.setItem('kuro-orders', JSON.stringify(arr));
    }
    clear(); setLoading(false); router.push('/orders');
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
              <div className="flex-1"><h3 className="font-semibold text-sm">{i.name}</h3><p className="text-brand-600 text-sm font-bold">Rp {i.price.toLocaleString('id-ID')}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => setQty(i.id, i.qty - 1)} className="w-7 h-7 rounded bg-neutral-100">-</button><span className="w-8 text-center text-sm">{i.qty}</span><button onClick={() => setQty(i.id, i.qty + 1)} className="w-7 h-7 rounded bg-neutral-100">+</button><button onClick={() => remove(i.id)} className="ml-auto text-xs text-red-500">Hapus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Checkout</h2>
        {!loadingStore && !isOpen && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4 font-bold text-center">
            Mohon Maaf, Kuro Kuliner Sedang Tutup.
          </div>
        )}
        <div className="bg-white border border-neutral-200 rounded-xl p-4 space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" className="w-full px-3 py-2 border rounded-lg" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="No. Telepon (WhatsApp)" className="w-full px-3 py-2 border rounded-lg" />
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Alamat" className="w-full px-3 py-2 border rounded-lg" rows={2} />
          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Catatan (opsional)" className="w-full px-3 py-2 border rounded-lg" rows={2} />
          
          <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 text-sm text-orange-800"><strong>Info Ongkir:</strong> Ongkos kirim akan dikonfirmasi via WhatsApp setelah pesanan dibuat.</div>
          <div>
            <p className="text-sm font-semibold mb-2">Metode Pembayaran:</p>
            <label className="flex items-center gap-2 text-sm"><input type="radio" name="payment" value="SeaBank" checked={method === 'SeaBank'} onChange={(e) => setMethod(e.target.value)} /> Transfer SeaBank</label>
            <label className="flex items-center gap-2 text-sm mt-1"><input type="radio" name="payment" value="COD" checked={method === 'COD'} onChange={(e) => setMethod(e.target.value)} /> COD (Bayar di Tempat)</label>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span className="text-brand-600">Rp {sum.toLocaleString('id-ID')}</span></div>
          {err && <p className="text-sm text-red-500">{err}</p>}
          <button disabled={loading || !isOpen} onClick={checkout} className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white py-3 rounded-xl font-semibold">
            {loading ? 'Memproses...' : (isOpen ? 'Buat Pesanan' : 'Toko Tutup')}
          </button>
        </div>
      </div>
    </div>
  );
}
