'use client';
import { useState } from 'react';
import { login } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const router = useRouter();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const s = login(email, pass);
    if (!s) { setErr('Email atau password tidak valid.'); return; }
    router.push(s.role === 'admin' ? '/admin' : '/');
    router.refresh();
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Masuk</h1>
      <form onSubmit={submit} className="bg-white border border-neutral-200 rounded-xl p-4 space-y-3">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border rounded-lg" />
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-lg" />
        {err && <p className="text-sm text-red-500">{err}</p>}
        <button className="w-full bg-brand-600 hover:bg-brand-700 text-white py-2.5 rounded-lg font-semibold">Masuk</button>
      </form>
    </div>
  );
}
