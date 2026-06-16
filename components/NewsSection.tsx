'use client';

import Link from 'next/link';

const news = [
  {
    title: 'Tera Daya Gelar Program Pendidikan Pemuda',
    date: '25 Mei 2026',
  },
  {
    title: 'Aksi Sosial Peduli Masyarakat Berhasil Dilaksanakan',
    date: '18 Mei 2026',
  },
  {
    title: 'Kolaborasi Bersama Mitra Untuk Indonesia Berdaya',
    date: '10 Mei 2026',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900">
            Berita Terbaru
          </h2>

          <p className="mt-4 text-slate-600">
            Informasi terbaru mengenai kegiatan dan program kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, index) => (
            <div
              key={index}
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

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}