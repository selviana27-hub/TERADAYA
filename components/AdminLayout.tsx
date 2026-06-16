'use client';

import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-purple-700 text-white p-6 space-y-6">

        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <nav className="space-y-3">

          <Link href="/admin/program" className="block hover:bg-purple-600 p-2 rounded">
            Program
          </Link>

          <Link href="/admin/event" className="block hover:bg-purple-600 p-2 rounded">
            Event
          </Link>

          <Link href="/admin/berita" className="block hover:bg-purple-600 p-2 rounded">
            Berita
          </Link>

          <Link href="/admin/relawan" className="block hover:bg-purple-600 p-2 rounded">
            Relawan
          </Link>

          <Link href="/" className="block hover:bg-red-500 p-2 rounded mt-10">
            Logout
          </Link>

        </nav>

      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}