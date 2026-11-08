import Link from 'next/link';

export default function JasaPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4 text-neutral-900">
          Jasa Pembuatan Aplikasi Kuliner
        </h1>
        <p className="text-neutral-600 mb-6">
          Sistem pesanan online untuk warung, kafe, dan katering. Tanpa potongan komisi.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="bg-neutral-800 text-white px-6 py-3 rounded-lg font-semibold">
            Lihat Demo
          </Link>
          <a href="https://wa.me/628984365975" target="_blank" className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold">
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
          <li>✅ <strong>Bisa Di-install:</strong> Tampil seperti aplikasi di HP.</li>
        </ul>
      </div>

      <div className="text-center bg-neutral-50 border border-neutral-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-2">Harga</h2>
        <p className="text-3xl font-black text-brand-600 mb-2">Rp 350.000</p>
        <p className="text-sm text-neutral-500 mb-4">Sekali bayar, tanpa biaya bulanan.</p>
        <a href="https://wa.me/628984365975" target="_blank" className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg font-bold">
          Pesan Sekarang
        </a>
      </div>
            <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Pertanyaan yang Sering Diajukan (FAQ)</h2>
        <div className="space-y-4">
          <div className="bg-white border border-neutral-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">1. Apakah saya bisa ganti nama toko dan fotonya?</h2>
            <p className="text-neutral-600">Bisa. Kami akan mengkustomisasi nama toko, logo, dan foto menu sesuai dengan usaha Anda sebelum aplikasi diserahkan.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">2. Apakah ada biaya bulanan?</h3>
            <p className="text-neutral-600">Tidak ada. Hanya ada biaya sekali bayar untuk setup dan instalasi. Anda hanya perlu membayar biaya domain jika ingin memakai alamat web sendiri (opsional).</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">3. Bagaimana cara saya menerima pesanan?</h3>
            <p className="text-neutral-600">Setiap ada pesanan masuk, sistem akan otomatis mengirim notifikasi ke aplikasi Telegram di HP Anda. Anda juga bisa melihat semua riwayat pesanan di panel Admin.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">4. Apakah aplikasi ini bisa dipakai di HP pelanggan?</h3>
            <p className="text-neutral-600">Bisa. Pelanggan cukup membuka link toko Anda dari browser HP, dan mereka bisa langsung memesan tanpa perlu mengunduh aplikasi dari Play Store.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
