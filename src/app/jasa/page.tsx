'use client';
import Link from 'next/link';

export default function JasaPage() {
  const waNumber = '628984365975';
  
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
          Jasa Pembuatan Aplikasi Kuliner
        </h1>
        <p className="text-neutral-600 mb-6">
          Sistem pesanan online untuk warung, kafe, dan katering. Tanpa potongan komisi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="bg-neutral-800 text-white px-6 py-3 rounded-lg font-semibold">
            Lihat Demo
          </Link>
          <a href={\`https://wa.me/\${waNumber}\`} target="_blank" rel="noopener noreferrer" className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold">
            Hubungi via WA
          </a>
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Fitur Utama:</h2>
        <ul className="space-y-3 text-neutral-700">
          <li>✅ <strong>Notifikasi Telegram:</strong> Pesanan masuk langsung ke HP Anda.</li>
          <li>✅ <strong>Bebas Komisi:</strong> Uang 100% masuk ke kantong Anda.</li>
          <li>✅ <strong>Buka/Tutup Toko:</strong> Kontrol kapan pelanggan bisa pesan.</li>
          <li>✅ <strong>Pembayaran Fleksibel:</strong> Transfer Bank atau COD.</li>
          <li>✅ <strong>Tombol WhatsApp:</strong> Pelanggan bisa langsung chat Anda.</li>
          <li>✅ <strong>Bisa Di-install (PWA):</strong> Tampil seperti aplikasi di HP.</li>
        </ul>
      </div>

      <div className="text-center bg-neutral-50 border border-neutral-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-2">Harga</h2>
        <p className="text-3xl font-black text-brand-600 mb-2">Rp 350.000</p>
        <p className="text-sm text-neutral-500 mb-4">Sekali bayar, tanpa biaya bulanan.</p>
        <a href={\`https://wa.me/\${waNumber}\`} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg font-bold">
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
}
