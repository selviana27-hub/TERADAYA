import Link from 'next/link';
import Footer from '@/components/Footer';

export default function TeradayaCeria() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* HEADER SIMPLE (LOGO CENTER SAJA) */}
      <div className="py-8 text-center bg-white shadow-sm">

        <img
          src="/logoTeradaya.png"
          alt="Tera Daya"
          className="mx-auto h-20 object-contain"
        />

      </div>

      {/* CONTENT */}
      <div className="flex-1 py-16 px-6">

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* IMAGE */}
          <div className="w-full h-202 overflow-hidden">
            <img
              src="/Program Teradaya.jpeg"
              alt="Teradaya Ceria"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* CONTENT */}
          <div className="p-10 text-center">

            <h1 className="text-3xl font-bold text-Purple-500">
              Teradaya Ceria
            </h1>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Teradaya Ceria hadir sebagai wujud kepedulian untuk mencerdaskan
              dan membahagiakan generasi bangsa melalui bantuan pendidikan,
              santunan anak yatim, piatu, dan dhuafa serta peningkatan gizi.
            </p>

            {/* INFO */}
            <div className="mt-6 text-sm text-gray-500 space-y-1">
              <p>📌 Program: Pendidikan & Sosial</p>
              <p>🤝 Fokus: Anak Yatim & Dhuafa</p>
              <p>🏢 Tera Daya Indonesia</p>
            </div>

            {/* BUTTON */}
            <div className="mt-8">

              <Link href="/donasi/form">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-4 rounded-xl font-semibold">
                  Donasi Disini &gt;&gt;
                </button>
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER (HANYA 1) */}
      <Footer />

    </div>
  );
}