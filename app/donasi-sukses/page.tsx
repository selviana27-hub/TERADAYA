import Link from 'next/link';

export default function DonasiSukses() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-6">

      <div className="text-center bg-white p-10 rounded-2xl shadow max-w-md">

        <h1 className="text-3xl font-bold text-green-600">
          🎉 Donasi Berhasil!
        </h1>

        <p className="mt-4 text-gray-600">
          Terima kasih atas dukungan Anda untuk program Tera Daya Indonesia.
        </p>

        <Link href="/">
          <button className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-xl">
            Kembali ke Beranda
          </button>
        </Link>

      </div>

    </div>
  );
}