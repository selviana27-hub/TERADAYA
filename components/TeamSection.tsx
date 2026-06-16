'use client';

import Image from 'next/image';

const teams = [
  {
    name: 'Nama Founder',
    role: 'Founder & Ketua Yayasan',
    image: '/team1.jpg',
  },
  {
    name: 'Nama Manager',
    role: 'Program Manager',
    image: '/team2.jpg',
  },
  {
    name: 'Nama Koordinator',
    role: 'Koordinator Relawan',
    image: '/team3.jpg',
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-28 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-500 font-semibold text-sm">
            Tim Kami
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Orang-Orang Hebat Dibalik Tera Daya
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-slate-600 text-lg">
            Tim yang berdedikasi untuk menghadirkan perubahan positif melalui
            program sosial, pendidikan, dan pemberdayaan masyarakat.
          </p>

        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {teams.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-slate-100"
            >

              {/* Foto */}
              <div className="relative h-80">

                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Content */}
              <div className="p-7 text-center">

                <h3 className="text-2xl font-bold text-slate-900">
                  {person.name}
                </h3>

                <p className="text-orange-500 font-medium mt-2">
                  {person.role}
                </p>

                <div className="w-16 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}