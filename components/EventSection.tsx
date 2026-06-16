'use client';

import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    slug: 'aksi-sosial-peduli-desa',
    title: 'Aksi Sosial Peduli Desa',
    date: '12 Mei 2026',
    location: 'Tangerang Selatan',
    image: '/Teradaya.jpeg',
    status: 'Upcoming',
  },
  {
  slug: 'perpustakaan-keliling',
  title: 'Perpustakaan Keliling Rumah Sinergi Indonesia & Yayasan Tera Daya Indonesia',
  date: '24 Mei 2026',
  location: 'Tangerang Selatan, Ciputat',
  image: '/logo Perpustakaan Keliling.jpeg',
  status: 'Event has been implemented',
},
  {
    slug: 'gerakan-hijau-indonesia',
    title: 'Gerakan Hijau Indonesia',
    date: '10 Juni 2026',
    location: 'Bogor',
    image: '/event.jpg',
    status: 'Upcoming',
  },
];

export default function EventSection() {
  return (
    <section
      id="event"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
            Event & Kegiatan
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Agenda Terdekat Kami
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
            Ikuti berbagai kegiatan sosial, pendidikan, dan pemberdayaan
            masyarakat yang kami selenggarakan di berbagai daerah Indonesia.
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">

                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow">
                    {event.status}
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                <p className="text-sm text-purple-600 font-semibold mb-2">
                  {event.date}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {event.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  📍 {event.location}
                </p>

                {/* BUTTON DETAIL */}
                <Link
                  href={`/event/${event.slug}`}
                  className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
                >
                  Lihat Detail Event
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}