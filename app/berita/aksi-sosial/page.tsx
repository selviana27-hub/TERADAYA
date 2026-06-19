import Link from 'next/link';

export default function AksiSosialPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <Link
        href="/"
        className="inline-flex items-center mb-8 px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
      >
        ← Kembali ke Beranda
      </Link>

      <h1 className="text-5xl text-center font-bold text-slate-900 mb-6">
        Aksi Sosial Peduli Masyarakat
      </h1>

      <p className="text-lg text-slate-600 mb-12">
        Kegiatan sosial yang dilaksanakan oleh Yayasan Tera Daya Indonesia
        sebagai bentuk kepedulian terhadap masyarakat serta upaya
        meningkatkan kesejahteraan dan solidaritas sosial.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <img
          src="/aksi-sosial1.jpeg"
          alt="Aksi Sosial 1"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        <img
          src="/aksi-sosial2.jpeg"
          alt="Aksi Sosial 2"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        <img
          src="/aksi-sosial3.jpeg"
          alt="Aksi Sosial 3"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        <img
          src="/aksi-sosial4.jpeg"
          alt="Aksi Sosial 4"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

      </div>

    </main>
  );
}