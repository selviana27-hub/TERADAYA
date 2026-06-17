'use client';

import Link from 'next/link';

export default function ProgramSection() {
  return (
    <section id="program" className="py-28 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold">
            Program Kami
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
            Program Tera Daya Indonesia
          </h2>

          <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
            Program sosial, pendidikan, dan pemberdayaan masyarakat yang kami
            jalankan untuk menciptakan dampak nyata bagi masyarakat Indonesia.
          </p>
        </div>

        {/* GRID PROGRAM */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {/* CARD 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">

            <div className="w-full h-92 overflow-hidden">
              <img
                src="/Program Teradaya.jpeg"
                alt="TeraDaya Ceria"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">

              <h3 className="text-2xl font-bold text-slate-900">
                TeraDaya Ceria
              </h3>

              <p className="text-slate-600 text-justify leading-7 mt-4 flex-1">
                Program bantuan bagi anak yatim, piatu, dan dhuafa binaan
                Yayasan Tera Daya Indonesia melalui dukungan pendidikan,
                kebutuhan gizi, serta pendampingan tumbuh kembang agar mereka
                memiliki kesempatan meraih masa depan yang lebih baik.
              </p>

              <p className="mt-4 font-semibold text-slate-800">
                Mencerdaskan dan membahagiakan generasi bangsa.
              </p>

              <Link
                href="/donasi"
                className="mt-6 block w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                Donasi Disini &gt;&gt;
              </Link>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">

            <div className="w-full h-92 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
                alt="Pemberdayaan UMKM"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">

              <h3 className="text-2xl font-bold text-slate-900">
                Pemberdayaan UMKM
              </h3>

              <p className="text-slate-600 text-justify leading-7 mt-4 flex-1">
                Program pelatihan, pendampingan, dan penguatan kapasitas usaha
                kecil untuk membantu masyarakat menjadi lebih mandiri secara
                ekonomi dan mampu mengembangkan usaha yang berkelanjutan.
              </p>

              <p className="mt-4 font-semibold text-slate-800">
                Bersama UMKM tumbuh, ekonomi masyarakat lebih kuat.
              </p>

              <Link
                href="/donasi"
                className="mt-6 block w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                Donasi Disini &gt;&gt;
              </Link>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">

            <div className="w-full h-92 overflow-hidden">
              <img
                src="/logo Perpustakaan Keliling.jpeg"
                alt="Perpustakaan Keliling"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">

              <h3 className="text-2xl font-bold text-slate-900">
                Perpustakaan Keliling
              </h3>

              <p className="text-slate-600 text-justify leading-7 mt-4 flex-1">
                Program literasi yang menghadirkan ratusan buku bacaan
                berkualitas bagi anak-anak serta kegiatan edukatif seperti
                storytelling, kreativitas, permainan edukatif, dan pendidikan
                karakter untuk meningkatkan minat baca sejak dini.
              </p>

              <p className="mt-4 font-semibold text-slate-800">
                Menumbuhkan budaya literasi untuk masa depan Indonesia.
              </p>

              <Link
                href="/donasi"
                className="mt-6 block w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                Donasi Disini &gt;&gt;
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}