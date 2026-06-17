'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Donasi {
  id: number;
  nama_lengkap: string;
  email: string;
  no_hp: string;
  jumlah_donasi: number;
  metode_pembayaran: string;
  pesan: string;
  created_at: string;
}

export default function AdminDonasiPage() {
  const [dataDonasi, setDataDonasi] = useState<Donasi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user || user.role !== 'admin') {
      window.location.href = '/';
      return;
    }

    getDataDonasi();
  }, []);

  async function getDataDonasi() {
    try {
      const res = await fetch('/api/donasi/list');
      const data = await res.json();

      console.log('DATA DONASI:', data);

      if (data.success) {
        setDataDonasi(data.data);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  const totalDonasi = dataDonasi.reduce(
    (total, item) => total + Number(item.jumlah_donasi || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            Kelola Donasi
          </h1>

          <p className="mt-2 text-green-100">
            Monitoring seluruh donasi yang masuk ke sistem Yayasan Tera Daya
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* BUTTON ATAS */}
        <div className="flex gap-3 mb-6">

          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
              Kembali ke Beranda
            </button>
          </Link>

          <button
            onClick={getDataDonasi}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Refresh Data
          </button>

        </div>

        {/* STATISTIK */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-green-500">
            <p className="text-gray-500">Total Donatur</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {dataDonasi.length}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-purple-500">
            <p className="text-gray-500">Total Donasi</p>
            <h2 className="text-2xl font-bold text-purple-600 mt-2">
              Rp {totalDonasi.toLocaleString('id-ID')}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-blue-500">
            <p className="text-gray-500">Status Sistem</p>
            <h2 className="text-xl font-bold text-blue-600 mt-2">
              Aktif
            </h2>
          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <div className="px-6 py-4 border-b bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-700">
              Daftar Donasi
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Semua data donasi dari pengguna sistem
            </p>
          </div>

          {loading ? (
            <div className="p-10 text-center text-gray-500">
              Memuat data...
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Nama</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">Nominal</th>
                    <th className="p-4 text-left">Metode</th>
                    <th className="p-4 text-left">Pesan</th>
                    <th className="p-4 text-left">Tanggal</th>
                    <th className="p-4 text-center">Aksi</th>
                  </tr>
                </thead>

                <tbody>

                  {dataDonasi.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center p-10 text-gray-500"
                      >
                        Belum ada data donasi
                      </td>
                    </tr>
                  ) : (
                    dataDonasi.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b hover:bg-green-50"
                      >

                        <td className="p-4 font-semibold">
                          {item.nama_lengkap}
                        </td>

                        <td className="p-4">
                          {item.email}
                        </td>

                        <td className="p-4 font-bold text-green-600">
                          Rp {Number(item.jumlah_donasi).toLocaleString('id-ID')}
                        </td>

                        <td className="p-4">
                          {item.metode_pembayaran}
                        </td>

                        <td className="p-4">
                          {item.pesan}
                        </td>

                        <td className="p-4">
                          {new Date(item.created_at).toLocaleDateString('id-ID')}
                        </td>

                        <td className="p-4 text-center">
                          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                            Update
                          </button>
                        </td>

                      </tr>
                    ))
                  )}

                </tbody>

              </table>

            </div>
          )}
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/admin">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow">
              Kembali ke Dashboard
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}