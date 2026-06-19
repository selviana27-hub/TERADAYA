'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-medium mb-4">
            Tentang Tera Daya Indonesia
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sejahtera untuk Berdaya
            <span className="block text-black-500">
              yang Berkelanjutan
            </span>
          </h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-10 text-left">

            {/* KOLOM KIRI */}
            <div className="bg-gray-50 p-8 rounded-3xl">

              <h3 className="text-3xl font-bold text-blue-500 mb-5">
                Ekosistem Mandiri & Berdampak
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Lembaga pemberdayaan generasi muda Indonesia
                yang sejahtera dan berdaya serta menjadi
                ekosistem pengembangan individu yang mandiri
                dan berdampak bagi masyarakat.
              </p>

              <h3 className="text-3xl font-bold text-blue-700 mb-5 mt-8">
                Visi
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Menjadi organisasi yang mampu menciptakan masyarakat yang mandiri,
                berdaya, dan memiliki akses terhadap peluang pengembangan diri
                secara berkelanjutan.
              </p>

            </div>

            {/* KOLOM KANAN */}
            <div className="bg-gray-50 p-8 rounded-3xl">

              <h3 className="text-3xl font-bold text-blue-700 mb-5">
                Misi
              </h3>

              <ul className="space-y-4 text-gray-700">

                <li>
                  ✓ Menyelenggarakan kegiatan pendidikan dan
                  pelatihan untuk meningkatkan kapasitas dan
                  kualitas generasi muda Indonesia.
                </li>

                <li>
                  ✓ Mengembangkan program pemberdayaan masyarakat
                  dalam bidang sosial, ekonomi, dan pengembangan
                  diri guna menciptakan kemandirian.
                </li>

                <li>
                  ✓ Menyelenggarakan kegiatan kemanusiaan berupa
                  bantuan sosial kepada masyarakat yang membutuhkan.
                </li>

                <li>
                  ✓ Menyelenggarakan kegiatan keagamaan dalam rangka
                  meningkatkan pemahaman dan pengamalan nilai-nilai
                  keagamaan.
                </li>

                <li>
                  ✓ Membangun kemitraan dan kolaborasi dengan
                  berbagai pihak untuk mendukung program
                  pemberdayaan masyarakat.
                </li>

                <li>
                  ✓ Mengembangkan kegiatan di bidang teknologi,
                  seni, dan olahraga sebagai sarana pengembangan
                  potensi generasi muda.
                </li>

              </ul>

            </div>

          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/hero-social.jpeg"
                alt="Tera Daya Indonesia"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
              <h4 className="text-3xl font-bold text-purple-500">
                5.000+
              </h4>
              <p className="text-gray-600">
                Penerima Manfaat
              </p>
            </div>
          </div>

          {/* Text */}
          <div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Kepercayaan & Legalitas
              </h3>

              <h4 className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-medium mb-4">
                Terverifikasi & Akuntabel
              </h4>

              <p className="text-gray-700 leading-relaxed">
                Yayasan Teradaya Indonesia berdiri dan beroperasi di bawah payung
                hukum yang transparan dan resmi. Kami berkomitmen untuk
                menyalurkan setiap donasi secara bertanggung jawab demi dampak
                nyata menuju kesejahteraan berkelanjutan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">

              <div className="p-5 border rounded-2xl">
                <h4 className="font-bold mb-2">
                  Integritas
                </h4>
                <p className="text-sm text-gray-600">
                  Transparan dan bertanggung jawab.
                </p>
              </div>

              <div className="p-5 border rounded-2xl">
                <h4 className="font-bold mb-2">
                  Kolaborasi
                </h4>
                <p className="text-sm text-gray-600">
                  Membangun dampak bersama.
                </p>
              </div>

              <div className="p-5 border rounded-2xl">
                <h4 className="font-bold mb-2">
                  Inovasi
                </h4>
                <p className="text-sm text-gray-600">
                  Solusi kreatif untuk masyarakat.
                </p>
              </div>

              <div className="p-5 border rounded-2xl">
                <h4 className="font-bold mb-2">
                  Keberlanjutan
                </h4>
                <p className="text-sm text-gray-600">
                  Dampak yang terus berkembang.
                </p>
              </div>

            </div>

            <Link
              href="/tentang"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Pelajari Lebih Lanjut →
            </Link>

          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">

          <div className="text-center p-8 rounded-3xl bg-gray-50">
            <h3 className="text-4xl font-bold text-purple-500">
              100+
            </h3>
            <p className="text-gray-600 mt-2">
              Relawan
            </p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-gray-50">
            <h3 className="text-4xl font-bold text-purple-500">
              25+
            </h3>
            <p className="text-gray-600 mt-2">
              Program
            </p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-gray-50">
            <h3 className="text-4xl font-bold text-purple-500">
              5.000+
            </h3>
            <p className="text-gray-600 mt-2">
              Penerima Manfaat
            </p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-gray-50">
            <h3 className="text-4xl font-bold text-purple-500">
              15+
            </h3>
            <p className="text-gray-600 mt-2">
              Mitra
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}