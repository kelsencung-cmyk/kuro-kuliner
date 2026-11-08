'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function VideoPromoPage() {
  const [step, setStep] = useState(0);

  // Durasi tiap slide (dalam milidetik)
  const timings = [3000, 4000, 5000, 5000, 4000, 4000];

  useEffect(() => {
    if (step < timings.length - 1) {
      const timer = setTimeout(() => setStep(step + 1), timings[step]);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const slides = [
    // Slide 0: Hook
    <div key="0" className="flex flex-col items-center justify-center h-full bg-neutral-900 text-white animate-fade-in px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Capek bales chat pesanan?</h1>
      <p className="text-xl md:text-2xl text-neutral-400">Jualan makanan kok masih manual?</p>
    </div>,

    // Slide 1: Perkenalan
    <div key="1" className="flex flex-col items-center justify-center h-full bg-brand-600 text-white animate-fade-in px-8 text-center">
      <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Kuro Kuliner</h2>
      <p className="text-xl md:text-3xl font-medium">Aplikasi Pesan Antar Sendiri.</p>
    </div>,

    // Slide 2: Fitur Telegram
    <div key="2" className="flex flex-col items-center justify-center h-full bg-white text-neutral-900 animate-fade-in px-8 text-center">
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-4xl">🔔</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Order Masuk ke Telegram</h2>
      <p className="text-lg md:text-xl text-neutral-500 max-w-lg">HP kamu langsung bunyi setiap ada pesanan. Nggak ada potongan komisi!</p>
    </div>,

    // Slide 3: Fitur Buka Tutup
    <div key="3" className="flex flex-col items-center justify-center h-full bg-neutral-100 text-neutral-900 animate-fade-in px-8 text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-4xl">🛑</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Buka / Tutup Toko</h2>
      <p className="text-lg md:text-xl text-neutral-500 max-w-lg">Bahan habis? Tinggal klik tutup dari HP. Pelanggan otomatis nggak bisa checkout.</p>
    </div>,

    // Slide 4: Fitur Transfer
    <div key="4" className="flex flex-col items-center justify-center h-full bg-white text-neutral-900 animate-fade-in px-8 text-center">
      <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-4xl">💳</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Pembayaran Fleksibel</h2>
      <p className="text-lg md:text-xl text-neutral-500 max-w-lg">Terima Transfer Bank, COD, dan langsung terhubung ke WhatsApp kamu.</p>
    </div>,

    // Slide 5: Call to Action
    <div key="5" className="flex flex-col items-center justify-center h-full bg-brand-600 text-white animate-fade-in px-8 text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-6">Siap Punya Aplikasi Sendiri?</h2>
      <p className="text-2xl md:text-3xl font-bold mb-8">Cuma Rp 300 Ribuan!</p>
      <a href="https://wa.me/628984365975" target="_blank" className="bg-white text-brand-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-transform">
        Chat WA Sekarang
      </a>
    </div>
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Container 9:16 */}
      <div className="relative w-full max-w-[400px] h-full max-h-[85vh] md:h-[80vh] aspect-[9/16] bg-white shadow-2xl overflow-hidden rounded-none md:rounded-2xl">
        {slides[step]}
      </div>
      
      {/* Progress Bar di atas */}
      <div className="absolute top-4 left-4 right-4 flex gap-1 z-50">
        {timings.map((_, i) => (
          <div key={i} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
             <div 
               className={`h-full bg-white transition-all duration-1000 ${i === step ? 'w-full' : i < step ? 'w-full' : 'w-0'}`} 
               style={{ transitionDuration: `${timings[i]}ms` }}
             />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
