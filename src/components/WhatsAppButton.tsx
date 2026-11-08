'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '628984365975';
  const text = encodeURIComponent('Halo Admin Kuro Kuliner, saya mau bertanya/pesan.');
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Hubungi Admin via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
