'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  const menu = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Program', href: '/admin/program' },
    { name: 'Event', href: '/admin/event' },
    { name: 'Berita', href: '/admin/berita' },
    { name: 'Donasi', href: '/admin/donasi' },
    { name: 'Relawan', href: '/admin/relawan' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white shadow-lg p-6">

        <h1 className="text-2xl font-bold text-purple-600 mb-8">
          Tera Daya Admin
        </h1>

        <nav className="space-y-2">

          {menu.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={`
                px-4 py-3 rounded-xl cursor-pointer transition
                ${pathname === item.href
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-gray-100 text-gray-700'}
              `}>
                {item.name}
              </div>
            </Link>
          ))}

        </nav>

        <div className="mt-10">

          <Link href="/">
            <button className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl">
              Logout
            </button>
          </Link>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}