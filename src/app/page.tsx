'use client';
import { useEffect, useState } from 'react';
import MenuCard from '@/components/MenuCard';
import { MENU_SEED, CATEGORIES } from '@/lib/data';
import { fetchMenus, hasSupabase } from '@/lib/supabase';
import type { Menu } from '@/types';
export default function HomePage() {
  const [menu, setMenu] = useState<Menu[]>([]); const [cat, setCat] = useState('Semua'); const [q, setQ] = useState('');
  useEffect(() => { async function load() { if (hasSupabase) { const data = await fetchMenus(); if (data && data.length > 0) { setMenu(data as Menu[]); return; } } setMenu(MENU_SEED); } load(); }, []);
  const filtered = menu.filter((m) => (cat === 'Semua' || m.category === cat) && m.name.toLowerCase().includes(q.toLowerCase()));
  return (<div><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari menu..." className="w-full mb-4 px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-400" /><div className="flex gap-2 overflow-x-auto pb-2 mb-4">{CATEGORIES.map((c) => (<button key={c} onClick={() => setCat(c)} className={'px-4 py-1.5 rounded-full text-sm whitespace-nowrap ' + (cat === c ? 'bg-brand-600 text-white' : 'bg-white border border-neutral-200')}>{c}</button>))}</div><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{filtered.map((m) => <MenuCard key={m.id} menu={m} />)}</div>{filtered.length === 0 && <p className="text-center text-neutral-500 py-10">Menu tidak ditemukan.</p>}</div>);
}
