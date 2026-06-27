'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DonasiForm() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  const [form, setForm] = useState({
    email: '',
    jumlah_donasi: '',
    metode_pembayaran: 'QRIS',
    pesan: '',
  });

  useEffect(() => {
    const dataUser = localStorage.getItem('user');

    if (!dataUser) {
      alert('Silakan login terlebih dahulu');
      router.push('/login');
      return;
    }

    setUser(JSON.parse(dataUser));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    const payload = {
      username: user.username,
      no_hp: user.no_hp,
      email: form.email,
      jumlah_donasi: form.jumlah_donasi,
      metode_pembayaran: form.metode_pembayaran,
      pesan: form.pesan,
    };

    const res = await fetch('/api/donasi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
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

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Data Donatur
          </h2>

          {user && (
            <div className="bg-purple-50 p-4 rounded-xl mb-5">
              <p>
                <strong>Nama:</strong> {user.username}
              </p>

              <p>
                <strong>No WhatsApp:</strong> {user.no_hp}
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

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
              <option value="QRIS">
                QRIS
              </option>

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

        {/* INFO PEMBAYARAN */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          {form.metode_pembayaran === 'QRIS' ? (
            <>
              <h2 className="text-2xl font-bold mb-3">
                QRIS Donasi
              </h2>

              <img
                src="/QrisTeradaya.png"
                alt="QRIS"
                className="mx-auto w-64"
              />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-3">
                Transfer Bank
              </h2>

              <div className="bg-gray-50 p-8 rounded-2xl border">

                <h3 className="text-2xl font-bold text-blue-700">
                  Bank Mandiri
                </h3>

                <p className="mt-4">
                  A.n
                </p>

                <p className="font-bold text-lg">
                  TERA DAYA INDONESIA
                </p>

                <p className="text-3xl font-bold mt-4">
                  1640009728991
                </p>

              </div>
            </>
          )}

        </div>

      </div>

    </div>
  );
}