'use client';

import Link from 'next/link';

const news = [
  {
    title: 'Tera Daya Gelar Program Pendidikan Pemuda',
    date: '25 Mei 2026',
<<<<<<< HEAD
=======
    description:
      'Program pendidikan pemuda untuk meningkatkan keterampilan dan kapasitas generasi muda.',
    href: '/berita/pendidikan-pemuda',
    image: 'logo Perpustakaan Keliling.jpeg',
>>>>>>> master
  },
  {
    title: 'Aksi Sosial Peduli Masyarakat Berhasil Dilaksanakan',
    date: '18 Mei 2026',
<<<<<<< HEAD
=======
    description:
      'Kegiatan sosial berupa penyaluran bantuan dan pemberdayaan masyarakat.',
    href: '/berita/aksi-sosial',
    image: 'Program Teradaya.jpeg',
>>>>>>> master
  },
  {
    title: 'Kolaborasi Bersama Mitra Untuk Indonesia Berdaya',
    date: '10 Mei 2026',
<<<<<<< HEAD
=======
    description:
      'Kolaborasi bersama berbagai mitra untuk memperluas dampak program pemberdayaan.',
    href: '/berita/kolaborasi-mitra',
    image: 'Kolaborasi Antar Mitra.jpeg',
>>>>>>> master
  },
];

export default function NewsSection() {
  return (
<<<<<<< HEAD
    <section id="news" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900">
            Berita Terbaru
          </h2>

          <p className="mt-4 text-slate-600">
            Informasi terbaru mengenai kegiatan dan program kami.
=======
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-slate-900">
            Berita & Dokumentasi Kegiatan
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            Dokumentasi kegiatan dan informasi terbaru Yayasan Tera Daya Indonesia.
>>>>>>> master
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, index) => (
            <div
              key={index}
<<<<<<< HEAD
              className="bg-white border rounded-3xl p-8 hover:shadow-xl transition"
            >
              <p className="text-black-500 text-sm mb-3">
                {item.date}
              </p>

              <h3 className="font-bold text-xl text-slate-900">
                {item.title}
              </h3>

              <Link
                href="/#program"
                className="mt-6 inline-block font-semibold text-blue-600 hover:text-purple-500 transition"
              >
                Baca Selengkapnya →
              </Link>

=======
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <p className="text-sm text-gray-500 mb-2">
                  {item.date}
                </p>

                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
            <Link
              href={item.href}
              className="font-semibold text-blue-600 hover:text-purple-600"
            >
              Baca Selengkapnya →
            </Link>

              </div>
>>>>>>> master
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}