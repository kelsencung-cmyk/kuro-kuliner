'use client';

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'kelsen';
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || 'kelsen2026';
const KEY = 'kuliner-user';

export type Session = { email: string; role: 'user' | 'admin' } | null;

export function login(email: string, password: string): Session {
  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    const s: Session = { email, role: 'admin' };
    localStorage.setItem(KEY, JSON.stringify(s));
    return s;
  }
  if (email && password.length >= 4) {
    const s: Session = { email, role: 'user' };
    localStorage.setItem(KEY, JSON.stringify(s));
    return s;
  }
  return null;
}

export function logout() { localStorage.removeItem(KEY); }

export function getSession(): Session {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}
