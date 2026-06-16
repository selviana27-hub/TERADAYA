'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {

  const [program, setProgram] = useState(0);
  const [event, setEvent] = useState(0);
  const [berita, setBerita] = useState(0);
  const [donasi, setDonasi] = useState(0);
  const [relawan, setRelawan] = useState(0);

  useEffect(() => {
    async function fetchData() {

      const [p, e, b, d, r] = await Promise.all([
        fetch('/api/program/list').then(res => res.json()),
        fetch('/api/event/list').then(res => res.json()),
        fetch('/api/berita/list').then(res => res.json()),
        fetch('/api/donasi/list').then(res => res.json()),
        fetch('/api/relawan/list').then(res => res.json()),
      ]);

      setProgram(p.data?.length || 0);
      setEvent(e.data?.length || 0);
      setBerita(b.data?.length || 0);
      setDonasi(d.data?.length || 0);
      setRelawan(r.data?.length || 0);
    }

    fetchData();
  }, []);

  const cards = [
    { label: 'Program', value: program, color: 'purple' },
    { label: 'Event', value: event, color: 'blue' },
    { label: 'Berita', value: berita, color: 'green' },
    { label: 'Donasi', value: donasi, color: 'yellow' },
    { label: 'Relawan', value: relawan, color: 'red' },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-2">
        Dashboard Admin
      </h1>

      <p className="text-gray-500 mb-8">
        Ringkasan data sistem Yayasan Tera Daya Indonesia
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {cards.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">

            <p className="text-gray-500">{item.label}</p>

            <h2 className={`text-4xl font-bold mt-2 text-${item.color}-600`}>
              {item.value}
            </h2>

          </div>
        ))}

      </div>

    </div>
  );
}