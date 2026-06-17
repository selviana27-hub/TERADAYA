'use client';

export default function DonationSection() {
  return (
    <section className="py-28 bg-purple-500 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Mari Ambil Bagian Dalam Perubahan
        </h2>

        <p className="mt-6 text-xl">
          Dukungan Anda membantu lebih banyak masyarakat mendapatkan
          akses pendidikan, pemberdayaan, dan kehidupan yang lebih baik.
        </p>

        <button className="mt-10 px-10 py-4 bg-white text-purple-500 rounded-full font-bold hover:scale-105 transition">
          Donasi Sekarang
        </button>

      </div>
    </section>
  );
}