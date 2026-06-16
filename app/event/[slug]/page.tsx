import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const events = {
  'aksi-sosial-peduli-desa': {
    title: 'Aksi Sosial Peduli Desa',
    date: '12 Mei 2026',
    location: 'Tangerang Selatan',
    image: '/Teradaya.jpeg',
    participants: '200+ Orang',
    status: 'Upcoming',
    description: `
Program Aksi Sosial Peduli Desa merupakan kegiatan yang diselenggarakan oleh Yayasan Tera Daya Indonesia untuk membantu masyarakat melalui pemberian bantuan sosial, edukasi kesehatan, serta pemberdayaan ekonomi masyarakat.

Kegiatan ini melibatkan relawan muda, tokoh masyarakat, serta berbagai pihak yang memiliki kepedulian terhadap peningkatan kualitas hidup masyarakat desa.

Program yang dilaksanakan meliputi:

📦 Pembagian paket sembako kepada masyarakat yang membutuhkan.

🩺 Penyuluhan kesehatan dan pola hidup bersih.

📚 Edukasi anak-anak mengenai pentingnya pendidikan.

🤝 Penguatan solidaritas sosial dan gotong royong masyarakat.

Melalui kegiatan ini, Yayasan Tera Daya Indonesia berharap dapat memberikan manfaat nyata sekaligus membangun semangat kebersamaan untuk menciptakan masyarakat yang lebih mandiri dan berdaya.
`,
  },

  'perpustakaan-keliling': {
    title:
      'Perpustakaan Keliling Rumah Sinergi Indonesia & Yayasan Tera Daya Indonesia',
    date: '24 Mei 2026',
    location: 'Tangerang Selatan, Ciputat',
    image: '/PerpustakaanKeliling.jpeg',
    participants: '150+ Peserta',
    status: 'Event has been implemented',
    description: `
📚 MENYALA LITERASI! Perpustakaan Keliling Hadir untuk Anak Bangsa ✨

Membaca adalah jendela dunia, dan kami ingin membawa jendela itu lebih dekat ke anak-anak hebat di penjuru negeri.

Rumah Sinergi Indonesia berkolaborasi dengan Yayasan Tera Daya Indonesia mempersembahkan program Perpustakaan Keliling.

Melalui program ini, kami bergerak langsung ke lingkungan masyarakat untuk menghadirkan ratusan buku bacaan berkualitas yang dapat diakses secara gratis oleh anak-anak.

Kegiatan yang dilaksanakan meliputi:

📖 Sesi mendongeng (Storytelling) interaktif.

🎨 Kelas kreativitas dan mewarnai.

🧠 Permainan edukatif yang melatih kemampuan berpikir.

🌟 Edukasi karakter dan motivasi belajar.

📚 Pengenalan budaya membaca sejak usia dini.

Program ini bertujuan untuk meningkatkan minat baca anak-anak sekaligus menciptakan ruang belajar yang menyenangkan bagi generasi muda Indonesia.

Mari bersama-sama menumbuhkan budaya literasi sejak dini dan membangun masa depan generasi Indonesia yang lebih cerah.

"Satu buku yang dibaca hari ini adalah modal pemikiran besar di masa depan."
`,
  },

  'gerakan-hijau-indonesia': {
    title: 'Gerakan Hijau Indonesia',
    date: '10 Juni 2026',
    location: 'Bogor',
    image: '/event.jpg',
    participants: '300+ Relawan',
    status: 'Upcoming',
    description: `
Gerakan Hijau Indonesia merupakan program kepedulian lingkungan yang bertujuan meningkatkan kesadaran masyarakat terhadap pentingnya menjaga kelestarian alam.

Kegiatan ini melibatkan relawan dari berbagai daerah untuk berpartisipasi dalam aksi nyata penghijauan dan pelestarian lingkungan.

Rangkaian kegiatan yang dilaksanakan meliputi:

🌱 Penanaman ratusan bibit pohon di area konservasi.

♻️ Edukasi pengelolaan sampah dan daur ulang.

🌍 Kampanye peduli lingkungan kepada masyarakat.

🚮 Aksi bersih-bersih area publik dan ruang terbuka hijau.

🤝 Kolaborasi bersama komunitas lingkungan dan pemuda daerah.

Melalui Gerakan Hijau Indonesia, Yayasan Tera Daya Indonesia mengajak seluruh lapisan masyarakat untuk turut menjaga bumi dan menciptakan lingkungan yang lebih sehat bagi generasi mendatang.
`,
  },
};
export default async function DetailEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event =
    events[slug as keyof typeof events];

  if (!event) {
    return (
      <>
        <Navigation />

        <main className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Event Tidak Ditemukan
          </h1>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main className="bg-slate-50 min-h-screen">

        {/* HERO BANNER */}
        <section className="relative h-[500px]">

          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
                  event.status === 'Event has been implemented'
                    ? 'bg-blue-600'
                    : 'bg-green-500'
                }`}
              >
                {event.status}
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
                {event.title}
              </h1>

              <p className="text-white/90 mt-4 text-lg">
                {event.date} • {event.location}
              </p>

            </div>
          </div>
        </section>

        {/* DETAIL EVENT */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Tentang Event
            </h2>

            <p className="text-slate-600 leading-relaxed text-lg">
              {event.description}
            </p>

            {/* INFO BOX */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="font-bold text-purple-700">
                  📅 Tanggal
                </h3>

                <p className="mt-2 text-slate-600">
                  {event.date}
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-bold text-blue-700">
                  📍 Lokasi
                </h3>

                <p className="mt-2 text-slate-600">
                  {event.location}
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-bold text-green-700">
                  👥 Peserta
                </h3>

                <p className="mt-2 text-slate-600">
                  {event.participants}
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">

              <Link
                href="/event"
                className="px-8 py-4 rounded-full border border-slate-300 hover:bg-slate-100 transition font-semibold"
              >
                ← Kembali
              </Link>

              <a
                href="https://api.whatsapp.com/send?phone=6285100209453"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Daftar Sebagai Relawan
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}