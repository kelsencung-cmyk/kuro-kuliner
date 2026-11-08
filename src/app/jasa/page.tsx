'use client';
import Link from 'next/link';

export default function JasaPage() {
  const waNumber = '628984365975'; // Nomor WA Bos
  const waText = encodeURIComponent('Halo, saya tertarik dengan jasa pembuatan aplikasi kuliner.');
  
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block bg-brand-100 text-brand-700 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
          Solusi Digital untuk UMKM Kuliner
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-neutral-900">
          Punya Aplikasi Pesan-Antar Sendiri <br className="hidden md:block" />
          <span className="text-brand-600">Tanpa Potongan Komisi.</span>
        </h1>
        <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
          Tingkatkan penjualan warung, kafe, atau katering Anda dengan sistem pemesanan online modern. Pelanggan pesan sendiri, pesanan langsung masuk ke Telegram Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-neutral-900 hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg">
            Lihat Demo Aplikasi
          </Link>
          <a href={\`https://wa.me/\${waNumber}?text=\${waText}\`} target="_blank" rel="noopener noreferrer" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
            Pesan via WhatsApp
          </a>
        </div>
      </div>

      {/* Fitur Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">Fitur Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">🔔</div>
            <h3 className="font-bold text-lg mb-2">Notifikasi Telegram</h3>
            <p className="text-neutral-500 text-sm">HP Anda langsung berbunyi setiap ada pesanan baru. Tidak akan kecolongan orderan.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4">💰</div>
            <h3 className="font-bold text-lg mb-2">Bebas Komisi</h3>
            <p className="text-neutral-500 text-sm">Uang 100% masuk ke kantong Anda. Beda dengan aplikasi ojol yang potong 20%.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-2xl mb-4">🛑</div>
            <h3 className="font-bold text-lg mb-2">Buka/Tutup Toko</h3>
            <p className="text-neutral-500 text-sm">Bahan habis? Tinggal klik tutup dari HP, pelanggan otomatis tidak bisa checkout.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center text-2xl mb-4">💳</div>
            <h3 className="font-bold text-lg mb-2">Pembayaran Fleksibel</h3>
            <p className="text-neutral-500 text-sm">Dukungan Transfer Bank, COD, dan tombol WhatsApp langsung ke pelanggan.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4">📱</div>
            <h3 className="font-bold text-lg mb-2">Bisa Di-install (PWA)</h3>
            <p className="text-neutral-500 text-sm">Pelanggan bisa memasang aplikasi Anda di Home Screen HP tanpa lewat Play Store.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-4">📊</div>
            <h3 className="font-bold text-lg mb-2">Panel Admin Modern</h3>
            <p className="text-neutral-500 text-sm">Kelola pesanan dengan tampilan rapi. Ubah status dari "Pending" sampai "Done".</p>
          </div>
        </div>
      </div>

      {/* Harga Section */}
      <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-200 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Paket Investasi</h2>
        <p className="text-neutral-500 mb-8">Sekali bayar, tanpa biaya bulanan tersembunyi.</p>
        
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100">
          <div className="bg-brand-600 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Paket Lengkap</h3>
            <div className="text-4xl font-black mb-2">Rp 350<span className="text-xl font-normal">.000</span></div>
            <p className="text-brand-100 text-sm">Sekali Bayar</p>
          </div>
          <div className="p-6 text-left space-y-3 text-sm text-neutral-600">
            <p className="flex items-center gap-2">✅ Setup Aplikasi & Database</p>
            <p className="flex items-center gap-2">✅ Custom Nama & Logo Toko</p>
            <p className="flex items-center gap-2">✅ Integrasi Notifikasi Telegram</p>
            <p className="flex items-center gap-2">✅ Buku Panduan Admin</p>
            <p className="flex items-center gap-2">✅ Support 1 Bulan</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-neutral-400 text-sm border-t border-neutral-200 pt-8">
        &copy; 2026 KuroTech. Aplikasi Kuliner Siap Pakai.
      </div>
    </div>
  );
}
