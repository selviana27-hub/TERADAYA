'use client';

import Image from 'next/image';

export default function PartnerSection() {
  return (
        <section
        id="mitra"
        className="py-24 px-6 bg-white"
      >
      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900">
          Mitra Kolaborasi
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Bersama berbagai pihak membangun Indonesia yang lebih baik melalui
          kolaborasi pendidikan, sosial, dan pemberdayaan masyarakat.
        </p>

        {/* PARTNER GRID */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* PARTNER 1 */}
          <div className="flex flex-col items-center p-8 border rounded-3xl shadow-sm hover:shadow-lg transition">

            <div className="w-full h-72 flex items-center justify-center">
              <Image
                src="/RumahSinergiIndonesia.png"
                alt="Rumah Sinergi Indonesia"
                width={450}
                height={250}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            <h3 className="mt-6 text-lg font-bold text-center">
              Rumah Sinergi Indonesia
            </h3>

            <a
              href="https://rumahsinergi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:underline"
            >
              Kunjungi Website
            </a>

          </div>

          {/* PARTNER 2 */}
          <div className="flex flex-col items-center p-8 border rounded-3xl shadow-sm hover:shadow-lg transition">

            <div className="w-full h-72 flex items-center justify-center">
              <Image
                src="/Pt Setia Sinergi Sejahtera.png"
                alt="Setia Sinergi Sejahtera"
                width={450}
                height={250}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            <h3 className="mt-6 text-lg font-bold text-center">
              Setia Sinergi Sejahtera
            </h3>

            <a
              href="https://setiasinergisejahtera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:underline"
            >
              Kunjungi Website
            </a>

          </div>

          {/* PARTNER 3 */}
          <div className="flex flex-col items-center p-8 border rounded-3xl shadow-sm hover:shadow-lg transition">

            <div className="w-full h-72 flex items-center justify-center">
              <Image
                src="/bMM.png"
                alt="Baitulmaal Muamalat"
                width={450}
                height={250}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            <h3 className="mt-6 text-lg font-bold text-center">
              Baitulmaal Muamalat (BMM)
            </h3>

            <a
              href="https://bmm.or.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:underline"
            >
              Kunjungi Website
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}