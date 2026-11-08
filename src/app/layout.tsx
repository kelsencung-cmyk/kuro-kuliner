import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BRAND } from '@/lib/data';

export const metadata: Metadata = {
  title: BRAND,
  description: 'Pesan makanan favoritmu di ' + BRAND,
  manifest: '/manifest.webmanifest'
};

export const viewport: Viewport = { themeColor: '#dc2626' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
