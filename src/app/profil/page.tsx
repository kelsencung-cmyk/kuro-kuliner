import Link from 'next/link';

export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200">
        
        {/* Header / Cover */}
        <div className="bg-brand-600 h-32 relative">
          <div className="absolute -bottom-12 left-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-md">
              <span className="text-3xl font-black text-brand-600">K</span>
            </div>
          </div>
        </div>

        {/* Konten Profil */}
        <div className="pt-16 pb-8 px-8">
          <h1 className="text-3xl font-extrabold text-neutral-900">Kuroyama</h1>
          <p className="text-brand-600 font-semibold mb-4">Web Developer & App Builder</p>
          
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Halo! Saya adalah pengembang web yang berfokus pada pembuatan aplikasi bisnis modern, sistem pesanan online, dan solusi digital untuk UMKM. Saya percaya teknologi sederhana bisa membantu bisnis kecil berkembang lebih besar.
          </p>

          {/* Keahlian */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3">Keahlian</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">Supabase</span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">Vercel</span>
            </div>
          </div>

          {/* Portofolio Singkat */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3">Proyek Terbaru</h2>
            <div className="border border-neutral-200 rounded-xl p-4 flex justify-between items-center hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-neutral-900">Kuro Kuliner</h3>
                <p className="text-sm text-neutral-500">Sistem pesanan online untuk UMKM</p>
              </div>
              <Link href="/" className="text-brand-600 font-semibold text-sm hover:underline">
                Lihat Demo
              </Link>
            </div>
          </div>

          {/* Tombol Kontak */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-100">
            <a href="https://wa.me/628984365975" target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-center px-6 py-3 rounded-xl font-bold transition-colors">
              Hubungi via WhatsApp
            </a>
            <a href="https://github.com/kelsencung-cmyk" target="_blank" rel="noopener noreferrer" className="flex-1 bg-neutral-800 hover:bg-neutral-900 text-white text-center px-6 py-3 rounded-xl font-bold transition-colors">
              Lihat GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
