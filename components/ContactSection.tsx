'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
  const phoneNumber = '6285100209453';

  const waMessage = encodeURIComponent(
    'Halo, saya ingin berkolaborasi / bertanya tentang Tera Daya Indonesia.'
  );

  const waLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${waMessage}`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-28 bg-gray-50 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-purple-500 font-semibold uppercase tracking-widest">
            Hubungi Kami
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Mari Berkolaborasi Bersama
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Kami terbuka untuk kolaborasi, program sosial, kemitraan,
            maupun dukungan untuk menciptakan dampak yang lebih luas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">

            <h3 className="text-2xl font-bold mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold">
                  Email
                </p>

                <p className="text-gray-700 text-lg">
                  hi@teradayaindonesia.org
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold">
                  WhatsApp
                </p>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-gray-700 text-lg hover:text-green-600 transition">
                    +62 851-0020-9453
                  </p>
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-purple-500 font-semibold">
                  Alamat
                </p>

                <p className="text-gray-700 text-lg">
                  Yayasan Tera Daya Indonesia
                  <br />
                  Jl. Nusa Indah No.81, Serua, Ciputat
                  <br />
                  Tangerang Selatan, Banten
                </p>
              </div>

              {/* RELAWAN */}
                <Link href="/relawan">
                  <button className="w-full py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-xl transition">
                    Daftar Relawan
                  </button>
                </Link>

            </div>

          </div>

          {/* RIGHT CTA */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">

            {/* IMAGE */}
            <div className="relative w-full h-64">
              <Image
                src="/Teradaya.jpeg"
                alt="Contact Tera Daya"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-10 text-center">

              <h3 className="text-2xl font-bold mb-3">
                Mari Terlibat Bersama Kami
              </h3>

              <p className="text-gray-600 mb-8">
                Hubungi kami melalui WhatsApp atau daftarkan diri
                Anda sebagai relawan untuk ikut berkontribusi dalam
                program sosial dan pemberdayaan masyarakat.
              </p>

              <div className="space-y-4">

                {/* WHATSAPP */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition">
                    Chat WhatsApp Sekarang
                  </button>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}