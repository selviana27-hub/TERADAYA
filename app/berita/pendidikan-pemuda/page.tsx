import Link from 'next/link';

export default function PendidikanPemudaPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <Link
        href="/"
        className="inline-flex items-center mb-8 px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
      >
        ← Kembali ke Beranda
      </Link>

      <h1 className="text-5xl font-bold mb-6">
        Program Pendidikan Pemuda
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Kegiatan pendidikan pemuda yang diselenggarakan oleh Yayasan
        Tera Daya Indonesia untuk meningkatkan keterampilan dan
        kapasitas generasi muda.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <img
            src="/Pendidikan.jpeg"
            alt="Pendidikan"
            className="rounded-xl"
            />

            <img
            src="/Pendidikan4.jpeg"
            alt="Pendidikan 4"
            className="rounded-xl"
            />

            <img
            src="/Pendidikan2.jpeg"
            alt="Pendidikan 2"
            className="rounded-xl"

        />

        <img
            src="/Pendidikan3.jpeg"
            alt="Pendidikan 3"
            className="rounded-xl"

        />

      </div>

    </main>
  );
}