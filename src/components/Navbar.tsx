'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useCart } from '@/lib/store';
import { useEffect, useState } from 'react';
import { getSession, logout, type Session } from '@/lib/auth';
import { BRAND } from '@/lib/data';
export default function Navbar() {
  const count = useCart((s) => s.items.reduce((a, i) => a + i.qty, 0));
  const [session, setSession] = useState<Session>(null);
  const router = useRouter();
  useEffect(() => { setSession(getSession()); function onStorage() { setSession(getSession()); } window.addEventListener('storage', onStorage); window.addEventListener('focus', onStorage); return () => { window.removeEventListener('storage', onStorage); window.removeEventListener('focus', onStorage); }; }, []);
  function doLogout() { logout(); setSession(null); router.push('/'); router.refresh(); }
  return (<header className="bg-brand-600 text-white sticky top-0 z-40 shadow"><div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between"><Link href="/" className="font-bold text-lg">{BRAND}</Link><nav className="flex items-center gap-4 text-sm"><Link href="/orders" className="hover:underline">Pesanan</Link>{session?.role === 'admin' && <Link href="/admin" className="hover:underline">Admin</Link>}<Link href="/cart" className="relative"><ShoppingCart size={20} />{count > 0 && <span className="absolute -top-2 -right-2 bg-white text-brand-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{count}</span>}</Link>{session ? (<div className="flex items-center gap-2"><span className="hidden sm:inline text-xs opacity-90">{session.email}</span><button onClick={doLogout} title="Keluar" className="flex items-center gap-1 bg-white/20 hover:bg-white/30 rounded-lg px-2 py-1"><LogOut size={16} /><span className="hidden sm:inline">Keluar</span></button></div>) : (<Link href="/login"><User size={20} /></Link>)}</nav></div></header>);
}
