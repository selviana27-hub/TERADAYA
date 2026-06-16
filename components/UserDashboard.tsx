'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UserDashboard() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    setUsername(user.username || '');
  }, []);

  return (
    <div>

      {/* HERO USER */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <Image
          src="/Teradayalogo.jpeg"
          alt="Tera Daya"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-800/70 to-black/80" />

        <div className="relative z-10 text-center text-white max-w-5xl px-6">

          <h1 className="text-5xl md:text-7xl font-bold">
            Selamat Datang
          </h1>

          <h2 className="text-3xl md:text-5xl mt-4 text-blue-200">
            {username} 👋
          </h2>

          <p className="mt-8 text-lg md:text-xl text-white/80">
            Terima kasih telah menjadi bagian dari
            Yayasan Tera Daya Indonesia.
            Bersama kita membangun masa depan yang
            lebih baik melalui pendidikan,
            kemanusiaan, dan pemberdayaan masyarakat.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              href="/program"
              className="px-8 py-4 bg-purple-600 rounded-full font-semibold"
            >
              Lihat Program
            </Link>

            <Link
              href="/event"
              className="px-8 py-4 bg-white text-purple-700 rounded-full font-semibold"
            >
              Ikuti Event
            </Link>

          </div>

        </div>

      </section>

      {/* IMPACT */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Dampak Bersama
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-purple-50 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-purple-600">
                500+
              </h3>

              <p className="mt-3">
                Penerima Manfaat
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-600">
                150+
              </h3>

              <p className="mt-3">
                Relawan Aktif
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-green-600">
                20+
              </h3>

              <p className="mt-3">
                Program Sosial
              </p>
            </div>

            <div className="bg-yellow-50 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-yellow-600">
                50+
              </h3>

              <p className="mt-3">
                Mitra Kolaborasi
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* QUOTE */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-8">
            Inspirasi Hari Ini
          </h2>

          <p className="text-2xl italic">
            "Perubahan besar selalu dimulai dari
            langkah kecil yang dilakukan bersama."
          </p>

        </div>

      </section>

      {/* TESTIMONI */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Cerita Dampak
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow">
              <p className="italic">
                "Berkat bantuan pendidikan dari
                Tera Daya Indonesia saya dapat
                melanjutkan sekolah."
              </p>

              <h4 className="mt-5 font-bold">
                Penerima Manfaat
              </h4>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <p className="italic">
                "Menjadi relawan memberikan
                pengalaman luar biasa untuk
                membantu masyarakat secara langsung."
              </p>

              <h4 className="mt-5 font-bold">
                Relawan Tera Daya
              </h4>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}