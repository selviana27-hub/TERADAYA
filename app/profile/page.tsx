'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) {
      window.location.href = '/login';
      return;
    }

    setUser(JSON.parse(userData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.removeItem('isLogin');

    window.location.href = '/login';
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Memuat data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-purple-600 text-white py-10 shadow-lg">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            Dashboard Relawan / Donatur
          </h1>

          <p className="mt-2">
            Selamat datang, {user.username}
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* PROFIL */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Profil Pengguna
          </h2>

          <div className="space-y-3">

            <p>
              <strong>Username :</strong> {user.username}
            </p>

            <p>
              <strong>Role :</strong> {user.role}
            </p>

          </div>

        </div>

        {/* MENU */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Link href="/relawan">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg cursor-pointer">

              <h2 className="text-2xl font-bold">
                Daftar Relawan
              </h2>

              <p className="text-gray-500 mt-2">
                Bergabung menjadi relawan Tera Daya Indonesia.
              </p>

            </div>
          </Link>

          <Link href="/donasi/form">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg cursor-pointer">

              <h2 className="text-2xl font-bold">
                Ajukan Donasi
              </h2>

              <p className="text-gray-500 mt-2">
                Melakukan donasi untuk mendukung program yayasan.
              </p>

            </div>
          </Link>

          <Link href="/">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg cursor-pointer">

              <h2 className="text-2xl font-bold">
                Beranda
              </h2>

              <p className="text-gray-500 mt-2">
                Kembali ke halaman utama website.
              </p>

            </div>
          </Link>

        </div>

        {/* LOGOUT */}
        <div className="mt-10">

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}