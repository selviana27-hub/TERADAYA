'use client';

const impacts = [
  {
    number: '10.000+',
    title: 'Penerima Manfaat',
    description:
      'Masyarakat yang telah merasakan dampak langsung dari program kami.',
  },
  {
    number: '150+',
    title: 'Program Terlaksana',
    description:
      'Program pendidikan, sosial, lingkungan, dan pemberdayaan masyarakat.',
  },
  {
    number: '50+',
    title: 'Relawan Aktif',
    description:
      'Relawan yang berkontribusi dalam berbagai kegiatan sosial kami.',
  },
  {
    number: '20+',
    title: 'Mitra Kolaborasi',
    description:
      'Perusahaan, komunitas, dan lembaga yang mendukung gerakan kami.',
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-sm">
            Dampak Tera Daya
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Bersama Membangun Indonesia yang Lebih Berdaya
          </h2>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto text-lg">
            Setiap langkah kecil yang dilakukan bersama dapat menciptakan
            perubahan besar bagi masyarakat. Berikut dampak yang telah
            kami hasilkan melalui berbagai program sosial dan pendidikan.
          </p>

        </div>

        {/* Statistik */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {impacts.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-orange-400 mb-4">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mb-3">
                {item.title}
              </h4>

              <p className="text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Highlight */}
        <div className="mt-24">

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 md:p-14 text-center">

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Perubahan Nyata Dimulai Dari Kepedulian
            </h3>

            <p className="max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
              Kami percaya bahwa kolaborasi antara masyarakat, relawan,
              dan mitra dapat menciptakan dampak yang lebih luas serta
              berkelanjutan bagi Indonesia.
            </p>

            <button className="mt-8 px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:scale-105 transition duration-300">
              Bergabung Bersama Kami
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}