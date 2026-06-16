'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Berita {
  id: number;
  judul: string;
  deskripsi: string;
  gambar: string;
  created_at: string;
}

export default function AdminBeritaPage() {
  const [data, setData] = useState<Berita[]>([]);

  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState('');

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch('/api/berita/list');
    const json = await res.json();

    if (json.success) {
      setData(json.data);
    }

    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const url = editId
      ? '/api/berita/update'
      : '/api/berita/create';

    const payload = {
      id: editId,
      judul,
      deskripsi,
      gambar,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (json.success) {
      alert(
        editId
          ? 'Berita berhasil diupdate'
          : 'Berita berhasil ditambahkan'
      );

      setJudul('');
      setDeskripsi('');
      setGambar('');
      setEditId(null);
      setShowForm(false);

      fetchData();
    } else {
      alert(json.message || 'Gagal menyimpan berita');
    }
  }

  function handleEdit(item: Berita) {
    setEditId(item.id);
    setJudul(item.judul);
    setDeskripsi(item.deskripsi);
    setGambar(item.gambar);
    setShowForm(true);
  }

  async function handleDelete(id: number) {
    if (!confirm('Yakin ingin menghapus berita ini?')) return;

    await fetch('/api/berita/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    fetchData();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Kelola Berita
          </h1>
          <p className="text-gray-500 mt-2">
            Manajemen berita Yayasan Tera Daya Indonesia
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl shadow"
          >
            + Tambah Berita
          </button>

          <Link href="/">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-3 rounded-xl">
              Kembali
            </button>
          </Link>
        </div>
      </div>

      {/* FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow mb-10 space-y-4"
        >
          <input
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Judul Berita"
            className="w-full border p-3 rounded-xl"
            required
          />

          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Isi Berita"
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            value={gambar}
            onChange={(e) => setGambar(e.target.value)}
            placeholder="URL Gambar"
            className="w-full border p-3 rounded-xl"
          />

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl">
            {editId ? 'Update Berita' : 'Simpan Berita'}
          </button>
        </form>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-700">
            Daftar Berita
          </h2>
        </div>

        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading data...
          </div>
        ) : (
          <table className="w-full">

            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="p-4 text-left">Judul</th>
                <th className="p-4 text-left">Tanggal</th>
                <th className="p-4 text-left">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-10 text-center text-gray-500">
                    Belum ada data berita
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">

                    <td className="p-4 font-semibold">
                      {item.judul}
                    </td>

                    <td className="p-4 text-gray-600">
                      {new Date(item.created_at).toLocaleDateString('id-ID')}
                    </td>

                    <td className="p-4 flex gap-2">

                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                      >
                        Hapus
                      </button>

                    </td>

                  </tr>
                ))
              )}
            </tbody>

          </table>
        )}

      </div>

    </div>
  );
}