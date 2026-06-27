'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DonasiForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    nama_lengkap: '',
    email: '',
    no_hp: '',
    jumlah_donasi: '',
    metode_pembayaran: 'QRIS',
    pesan: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/donasi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      router.push('/donasi-sukses');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-gray-100">

      <div className="text-center py-14 px-6">
        <h1 className="text-4xl font-bold text-purple-500">
          Donasi Tera Daya Indonesia
        </h1>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Setiap donasi Anda membantu pendidikan,
          gizi, dan masa depan anak-anak yang membutuhkan.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">

        {/* FORM DONASI */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Data Donatur
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Nama Lengkap"
              value={form.nama_lengkap}
              onChange={(e) =>
                setForm({
                  ...form,
                  nama_lengkap: e.target.value,
                })
              }
              className="w-full p-4 border rounded-xl"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full p-4 border rounded-xl"
              required
            />

            <input
              type="text"
              placeholder="Nomor WhatsApp"
              value={form.no_hp}
              onChange={(e) =>
                setForm({
                  ...form,
                  no_hp: e.target.value,
                })
              }
              className="w-full p-4 border rounded-xl"
              required
            />

            <select
              value={form.metode_pembayaran}
              onChange={(e) =>
                setForm({
                  ...form,
                  metode_pembayaran: e.target.value,
                })
              }
              className="w-full p-4 border rounded-xl"
            >
              <option value="QRIS">QRIS</option>
              <option value="Transfer Bank">
                Transfer Bank
              </option>
            </select>

            <div>
              <p className="font-semibold mb-3">
                Pilih Nominal Donasi
              </p>

              <div className="grid grid-cols-3 gap-3">

                {[
                  '10000',
                  '50000',
                  '100000',
                  '250000',
                  '500000',
                  '1000000',
                ].map((val) => (
                  <button
                    type="button"
                    key={val}
                    onClick={() =>
                      setForm({
                        ...form,
                        jumlah_donasi: val,
                      })
                    }
                    className={`py-3 rounded-xl border transition ${
                      form.jumlah_donasi === val
                        ? 'bg-purple-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Rp {Number(val).toLocaleString('id-ID')}
                  </button>
                ))}

              </div>
            </div>

            <textarea
              rows={4}
              placeholder="Pesan atau doa (opsional)"
              value={form.pesan}
              onChange={(e) =>
                setForm({
                  ...form,
                  pesan: e.target.value,
                })
              }
              className="w-full p-4 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-xl font-semibold"
            >
              Lanjutkan Donasi
            </button>

          </form>

        </div>

        {/* INFORMASI PEMBAYARAN */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          {form.metode_pembayaran === 'QRIS' ? (

            <>
              <h2 className="text-2xl font-bold mb-3">
                QRIS Donasi
              </h2>

              <p className="text-gray-500 mb-6">
                Scan QR Code untuk donasi cepat dan aman
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/QrisTeradaya.png"
                  className="mx-auto w-64"
                  alt="QRIS"
                />
              </div>

              <div className="mt-6 text-sm text-gray-500 space-y-1">
                <p>✔ Semua E-Wallet</p>
                <p>✔ Semua Mobile Banking</p>
                <p>✔ Aman dan cepat</p>
              </div>
            </>

          ) : (

            <>
              <h2 className="text-2xl font-bold mb-3">
                Transfer Bank
              </h2>

              <p className="text-gray-500 mb-6">
                Silakan transfer donasi ke rekening berikut
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl border">

                <div className="text-4xl mb-3">
                  🏦
                </div>

                <h3 className="text-2xl font-bold text-blue-700">
                  Bank Mandiri
                </h3>

                <p className="mt-4 text-gray-700">
                  A.n
                </p>

                <p className="font-semibold text-lg">
                  TERA DAYA INDONESIA
                </p>

                <p className="text-3xl font-bold mt-4 text-gray-900">
                  1640009728991
                </p>

              </div>

              <div className="mt-6 text-sm text-gray-500 space-y-1">
                <p>✔ ATM Mandiri</p>
                <p>✔ Livin' by Mandiri</p>
                <p>✔ Transfer Antar Bank</p>
              </div>
            </>

          )}

        </div>

      </div>

    </div>
  );
}