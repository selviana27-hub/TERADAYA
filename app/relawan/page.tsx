'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RelawanPage() {
  const [form, setForm] = useState({
    nama_lengkap: '',
    email: '',
    no_hp: '',
    kota: '',
    pekerjaan: '',
    alasan: '',
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('/api/relawan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

            if (res.ok) {
        alert('Pendaftaran Relawan Berhasil!');

        setForm({
            nama_lengkap: '',
            email: '',
            no_hp: '',
            kota: '',
            pekerjaan: '',
            alasan: '',
        });

        window.location.href = '/admin/relawan';
        }
      else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat mengirim data');
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-medium mb-4">
            Relawan Tera Daya Indonesia
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Form Pendaftaran Relawan
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Bergabunglah bersama kami untuk memberikan
            dampak positif bagi masyarakat melalui program
            pendidikan, sosial, kemanusiaan, dan pemberdayaan.
          </p>

        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-lg p-10">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NAMA */}
            <div>
              <label className="block mb-2 font-medium">
                Nama Lengkap
              </label>

              <input
                type="text"
                required
                value={form.nama_lengkap}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nama_lengkap: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl p-3"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl p-3"
                placeholder="Masukkan email"
              />
            </div>

            {/* NO HP */}
            <div>
              <label className="block mb-2 font-medium">
                Nomor WhatsApp
              </label>

              <input
                type="text"
                required
                value={form.no_hp}
                onChange={(e) =>
                  setForm({
                    ...form,
                    no_hp: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl p-3"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            {/* KOTA */}
            <div>
              <label className="block mb-2 font-medium">
                Kota / Domisili
              </label>

              <input
                type="text"
                required
                value={form.kota}
                onChange={(e) =>
                  setForm({
                    ...form,
                    kota: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl p-3"
                placeholder="Masukkan kota domisili"
              />
            </div>

            {/* PEKERJAAN */}
            <div>
              <label className="block mb-2 font-medium">
                Pekerjaan / Status
              </label>

              <input
                type="text"
                value={form.pekerjaan}
                onChange={(e) =>
                  setForm({
                    ...form,
                    pekerjaan: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl p-3"
                placeholder="Mahasiswa / Karyawan / dll"
              />
            </div>

            {/* ALASAN */}
            <div>
              <label className="block mb-2 font-medium">
                Alasan Bergabung
              </label>

              <textarea
                required
                value={form.alasan}
                onChange={(e) =>
                  setForm({
                    ...form,
                    alasan: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl p-3 h-32"
                placeholder="Ceritakan alasan Anda ingin menjadi relawan"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold transition"
            >
              {loading
                ? 'Mengirim Data...'
                : 'Daftar Sebagai Relawan'}
            </button>

          </form>

          {/* KEMBALI */}
          <div className="text-center mt-6">

            <Link
              href="/"
              className="text-purple-500 hover:underline"
            >
              ← Kembali ke Beranda
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}