'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Program {
  id: number;
  judul: string;
  deskripsi: string;
  gambar: string;
  created_at: string;
}

export default function AdminProgramPage() {

  // =========================
  // STATE
  // =========================
  const [program, setProgram] = useState<Program[]>([]);
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState('');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    fetchProgram();
  }, []);

  async function fetchProgram() {
    try {
      const res = await fetch('/api/program/list');
      const data = await res.json();

      if (data.success) {
        setProgram(data.data);
      }

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  // =========================
  // SUBMIT (CREATE + UPDATE)
  // =========================
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const url = editId
      ? '/api/program/update'
      : '/api/program/create';

    const payload = editId
      ? { id: editId, judul, deskripsi, gambar }
      : { judul, deskripsi, gambar };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      alert(editId ? 'Program berhasil diupdate' : 'Program berhasil ditambahkan');

      setJudul('');
      setDeskripsi('');
      setGambar('');
      setEditId(null);
      setShowForm(false);

      fetchProgram();
    } else {
      alert('Terjadi kesalahan');
    }
  }

  // =========================
  // EDIT
  // =========================
  function handleEdit(item: Program) {
    setEditId(item.id);
    setJudul(item.judul);
    setDeskripsi(item.deskripsi);
    setGambar(item.gambar);
    setShowForm(true);
  }

  // =========================
  // DELETE
  // =========================
  async function handleDelete(id: number) {
    if (!confirm('Yakin ingin menghapus program ini?')) return;

    const res = await fetch('/api/program/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    if (data.success) {
      alert('Program berhasil dihapus');
      fetchProgram();
    } else {
      alert('Gagal menghapus program');
    }
  }

  return (
    <>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Kelola Program
            </h1>

            <p className="text-gray-500 mt-2">
              Manajemen program Yayasan Tera Daya Indonesia
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() => {
                setShowForm(!showForm);
                setEditId(null);
                setJudul('');
                setDeskripsi('');
                setGambar('');
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl transition"
            >
              + Tambah Program
            </button>

            <Link href="/">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-3 rounded-xl transition">
                Kembali ke Beranda
              </button>
            </Link>

          </div>

        </div>

        {/* FORM */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow mb-8 space-y-4"
          >

            <h2 className="text-lg font-bold">
              {editId ? 'Edit Program' : 'Tambah Program'}
            </h2>

            <input
              type="text"
              placeholder="Judul Program"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="w-full border p-3 rounded"
              required
            />

            <textarea
              placeholder="Deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="text"
              placeholder="URL Gambar"
              value={gambar}
              onChange={(e) => setGambar(e.target.value)}
              className="w-full border p-3 rounded"
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-2 rounded"
            >
              {editId ? 'Update Program' : 'Simpan Program'}
            </button>

          </form>
        )}

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <div className="px-6 py-4 border-b bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-700">
              Daftar Program
            </h2>
          </div>

          {loading ? (
            <div className="p-6">Memuat data...</div>
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

                {program.map((item) => (
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
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Hapus
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>
          )}

        </div>

      </div>
    </>
  );
}