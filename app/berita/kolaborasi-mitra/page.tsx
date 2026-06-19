import Link from 'next/link';

export default function KolaborasiMitraPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <Link
        href="/"
        className="inline-flex items-center mb-8 px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
      >
        ← Kembali ke Beranda
      </Link>

      <h1 className="text-5xl font-bold text-slate-900 mb-6">
        Kolaborasi Bersama Mitra Untuk Indonesia Berdaya
      </h1>

      <p className="text-lg text-slate-600 mb-12">
        Program kolaborasi yang dilakukan bersama berbagai mitra strategis
        untuk mendukung pemberdayaan masyarakat, pendidikan, dan kegiatan
        sosial yang berkelanjutan.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <img
          src="/Kolaborasi Antar Mitra.jpeg"
          alt="Kolaborasi 1"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        <img
          src="/Kolaborasi Antar Mitra2.jpeg"
          alt="Kolaborasi 2"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        <img
          src="/Kolaborasi Antar Mitra3.jpeg"
          alt="Kolaborasi 3"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        <img
          src="/Kolaborasi Antar Mitra4.jpeg"
          alt="Kolaborasi 4"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

      </div>

    </main>
  );
}