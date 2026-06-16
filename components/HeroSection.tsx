'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Bersama Membangun',
      subtitle: 'Indonesia Lebih Berdaya',
      description:
        'Ekosistem pemberdayaan masyarakat yang berfokus pada pendidikan, sosial, dan pengembangan generasi muda untuk menciptakan dampak berkelanjutan bagi Indonesia.',
    },

    {
      title: 'Pendidikan Untuk',
      subtitle: 'Generasi Masa Depan',
      description:
        'Kami menghadirkan program pendidikan, literasi, dan pengembangan karakter agar generasi muda Indonesia memiliki masa depan yang lebih baik.',
    },

    {
      title: 'Kolaborasi Untuk',
      subtitle: 'Dampak Berkelanjutan',
      description:
        'Bersama relawan, mitra, dan masyarakat, Tera Daya Indonesia terus menghadirkan program sosial yang memberikan manfaat nyata bagi banyak orang.',
    },
  ];

  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <Image
          src="/Teradayalogo.jpeg"
          alt="Tera Daya Indonesia"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-800/70 to-black/80" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg mb-8">

            <img
              src="/logo yayasanteradaya.jpeg"
              alt="Tera Daya Indonesia"
              className="w-8 h-8 rounded-full object-cover"
            />

            <div className="text-left">

              <p className="hero-badge text-xs text-white/70">
                Yayasan Sosial & Pemberdayaan
              </p>

              <p className="hero-badge text-sm font-semibold text-white">
                Tera Daya Indonesia
              </p>

            </div>

          </div>

          {/* Heading */}
          <h1 className="hero-title hero-glow text-5xl md:text-7xl transition-all duration-500">

            {slides[activeSlide].title}

            <span className="block mt-2 text-blue-200">
              {slides[activeSlide].subtitle}
            </span>

          </h1>

          {/* Description */}
          <p className="hero-subtitle mt-8 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-500">

            {slides[activeSlide].description}

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              href="/donasi"
              className="btn-brand px-8 py-4 rounded-full font-semibold"
            >
              Donasi Sekarang →
            </Link>

            <Link
              href="/#program"
              className="px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-md rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
            >
              Eksplor Program
            </Link>

          </div>

        </div>

        {/* Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">

          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                activeSlide === index
                  ? 'w-10 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50'
              }`}
            />
          ))}

        </div>

      </section>

      {/* ================= PROFILE SECTION (INI YANG KAMU MAU) ================= */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Mengenal Tera Daya Indonesia
          </h2>

          {/* CONTENT BOX */}
          <div className="bg-gray-50 border rounded-2xl p-8 space-y-6 text-gray-700 leading-relaxed">

            <p>
              Tera Daya Indonesia adalah sebuah lembaga sosial yang bergerak di bidang pendidikan,
              kemanusiaan, dan pemberdayaan masyarakat untuk menciptakan perubahan yang lebih baik
              di Indonesia.
            </p>

            <p>
              Kami hadir untuk membantu masyarakat melalui berbagai program seperti pendidikan anak,
              bantuan sosial, pelatihan keterampilan, dan pemberdayaan ekonomi masyarakat.
            </p>

            <p>
              Fokus utama kami adalah menciptakan generasi muda yang berdaya, mandiri, dan memiliki
              kesempatan yang sama untuk berkembang melalui akses pendidikan dan pelatihan yang layak.
            </p>

            <p>
              Setiap kegiatan kami melibatkan relawan, donatur, dan mitra yang memiliki visi yang sama
              dalam membangun Indonesia yang lebih baik.
            </p>

            <p>
              Kami percaya bahwa perubahan besar dimulai dari langkah kecil yang dilakukan bersama-sama.
            </p>

            <p>
              Karena itu, kami mengajak seluruh masyarakat untuk bergabung, berkontribusi, dan menjadi
              bagian dari perubahan positif ini.
            </p>

          </div>

          {/* OPTIONAL CTA setelah baca profile */}
          <div className="text-center mt-10">

            <Link
              href="/registrasi"
              className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Bergabung Sekarang
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}