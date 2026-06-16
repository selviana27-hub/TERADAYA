'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNavigation() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.removeItem('isLogin');

    window.location.href = '/login';
  };

  const menuClass = (path: string) =>
    pathname === path
      ? 'text-purple-600 font-bold'
      : 'text-gray-700 hover:text-purple-600 transition';

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/admin"
          className="flex items-center gap-3"
        >
          <Image
            src="/Teradaya - LOGO no-bg.png"
            alt="Tera Daya"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* MENU */}
        <div className="hidden lg:flex items-center gap-8 text-sm">

          <Link
            href="/admin"
            className={menuClass('/admin')}
          >
            Dashboard
          </Link>

          <Link
            href="/admin/program"
            className={menuClass('/admin/program')}
          >
            Program
          </Link>

          <Link
            href="/admin/event"
            className={menuClass('/admin/event')}
          >
            Event
          </Link>

          <Link
            href="/admin/berita"
            className={menuClass('/admin/berita')}
          >
            Berita
          </Link>

          <Link
            href="/admin/relawan"
            className={menuClass('/admin/relawan')}
          >
            Relawan
          </Link>

          <Link
            href="/admin/donasi"
            className={menuClass('/admin/donasi')}
          >
            Donasi
          </Link>

          <Link
            href="/admin/kontak"
            className={menuClass('/admin/kontak')}
          >
            Kontak
          </Link>

        </div>

        {/* BUTTON */}
        <div className="flex items-center gap-3">

          <span className="hidden md:block text-sm text-gray-500">
            Administrator
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}