'use client';
import type { Menu } from '@/types';
import { useCart } from '@/lib/store';
import { Plus } from 'lucide-react';
export default function MenuCard({ menu }: { menu: Menu }) {
  const add = useCart((s) => s.add);
  return (<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200 flex flex-col"><img src={menu.image} alt={menu.name} className="h-40 w-full object-cover" /><div className="p-3 flex-1 flex flex-col"><h3 className="font-semibold">{menu.name}</h3><p className="text-xs text-neutral-500 line-clamp-2 flex-1">{menu.description}</p><div className="flex items-center justify-between mt-3"><span className="font-bold text-brand-600">Rp {menu.price.toLocaleString('id-ID')}</span><button onClick={() => add(menu)} className="bg-brand-600 hover:bg-brand-700 text-white rounded-lg p-2" aria-label={'Tambah ' + menu.name}><Plus size={16} /></button></div></div></div>);
}
