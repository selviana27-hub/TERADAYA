'use client';

import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen">

      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-purple-600">
          Tera Daya
        </h2>

        <p className="text-sm text-gray-500">
          Admin Panel
        </p>
      </div>

      <nav className="p-4 space-y-2">

        <Link
          href="/admin"
          className="block p-3 rounded-lg hover:bg-purple-50"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/program"
          className="block p-3 rounded-lg hover:bg-purple-50"
        >
          Kelola Program
        </Link>

        <Link
          href="/admin/event"
          className="block p-3 rounded-lg hover:bg-purple-50"
        >
          Kelola Event
        </Link>

        <Link
          href="/admin/berita"
          className="block p-3 rounded-lg hover:bg-purple-50"
        >
          Kelola Berita
        </Link>

        <Link
          href="/admin/relawan"
          className="block p-3 rounded-lg hover:bg-purple-50"
        >
          Data Relawan
        </Link>

        <Link
          href="/admin/donasi"
          className="block p-3 rounded-lg hover:bg-purple-50"
        >
          Data Donasi
        </Link>

        <Link
          href="/admin/kontak"
          className="block p-3 rounded-lg hover:bg-purple-50"
        >
          Data Kontak
        </Link>

      </nav>

    </aside>
  );
}