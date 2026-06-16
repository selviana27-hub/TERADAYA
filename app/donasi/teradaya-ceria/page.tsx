'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FormDonasi() {
  const router = useRouter();

  const [form, setForm] = useState({
    nama: '',
    whatsapp: '',
    nominal: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/donasi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      router.push('/donasi-sukses');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-10">

        <h1 className="text-4xl font-bold text-purple-500">
          Form Donasi Tera Daya
        </h1>

        <p className="text-gray-600 mt-3">
          Dukungan Anda membantu program pendidikan & sosial untuk anak-anak yang membutuhkan
        </p>

      </div>

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-6">
            Data Donatur
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              placeholder="Nama Lengkap"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
              onChange={(e) =>
                setForm({ ...form, nama: e.target.value })
              }
              required
            />

            <input
              placeholder="No WhatsApp"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
              onChange={(e) =>
                setForm({ ...form, whatsapp: e.target.value })
              }
              required
            />

            {/* NOMINAL */}
            <div>
              <p className="font-semibold mb-2">
                Pilih Nominal Donasi
              </p>

              <div className="grid grid-cols-3 gap-2">

                {['10000', '50000', '100000', '250000', '500000', '1000000'].map((val) => (
                  <button
                    type="button"
                    key={val}
                    onClick={() =>
                      setForm({ ...form, nominal: val })
                    }
                    className={`border p-2 rounded-lg transition ${
                      form.nominal === val
                        ? 'bg-purple-500 text-white'
                        : 'hover:bg-purple-50'
                    }`}
                  >
                    {Number(val).toLocaleString('id-ID')}
                  </button>
                ))}

              </div>
            </div>

            <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600">
              Lanjut Donasi
            </button>

          </form>
        </div>

        {/* RIGHT QRIS + INFO */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Donasi via QRIS
          </h2>

          <p className="text-gray-600 mb-4">
            Scan QR untuk donasi cepat dan aman menggunakan e-wallet atau mobile banking.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl text-center">

            <img
              src="/qris.png"
              className="mx-auto w-64"
              alt="QRIS"
            />

          </div>

          <div className="mt-6 text-sm text-gray-500 space-y-1">

            <p>✔ Aman & cepat</p>
            <p>✔ Support semua e-wallet</p>
            <p>✔ Langsung masuk ke program</p>

          </div>

        </div>

      </div>
    </div>
  );
}