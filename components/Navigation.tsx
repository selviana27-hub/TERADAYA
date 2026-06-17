'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
  const user = localStorage.getItem('user');

  if (user) {
    const parsedUser = JSON.parse(user);

    setIsLoggedIn(true);
    setUsername(parsedUser.username || parsedUser.nama || 'User');
  } else {
    setIsLoggedIn(false);
  }
}, []);

  const handleLogout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('username');
  localStorage.removeItem('isLogin');

  setIsLoggedIn(false);
  setUsername('');

  window.location.href = '/login';
};

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const waDonasi =
    'https://api.whatsapp.com/send?phone=6285100209453&text=Halo%2C%20saya%20ingin%20berdonasi%2C%20boleh%20kirim%20nomor%20rekeningnya.';

  const waGabung =
    'https://api.whatsapp.com/send?phone=6285100209453&text=Halo%2C%20saya%20ingin%20bergabung%20dengan%20Tera%20Daya%20Indonesia';

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

        {/* LOGO (Sekarang otomatis akan bergeser ke ujung kiri) */}
    <Link href="/" className="flex items-center">
          <Image
        src="/logoTeradaya.png"
        alt="Logo TERA DAYA"
        width={200}
        height={80}
        priority
      />
    </Link>

       {/* MENU DESKTOP */}
          {isLoggedIn && (
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">

              <button
                onClick={() =>
                  isHome
                    ? window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })
                    : (window.location.href = '/')
                }
                className="hover:text-purple-500 transition"
              >
                Beranda
              </button>

              <button
                onClick={() => scrollToSection('tentang')}
                className="hover:text-purple-500 transition"
              >
                Tentang
              </button>

              <button
                onClick={() => scrollToSection('program')}
                className="hover:text-purple-500 transition"
              >
                Program
              </button>

              <button
                onClick={() => scrollToSection('event')}
                className="hover:text-purple-500 transition"
              >
                Event
              </button>

              <Link
              href="/berita"
              className="hover:text-purple-500 transition"
            >
              Berita
            </Link>

            <Link
              href="/kontak"
              className="hover:text-purple-500 transition"
            >
              Kontak
            </Link>

            </div>
          )}

        {/* BUTTON DESKTOP */}
        <div className="hidden lg:flex items-center gap-3">

          {!isLoggedIn ? (
            <Link href="/login">
              <button className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                Bergabung
              </button>
            </Link>
          ) : (
            <>
              <span className="text-sm font-semibold text-green-600">
                Halo, {username}
              </span>

              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-full"
              >
                Logout
              </button>
            </>
          )}

          {/* DONASI */}
          <a
            href={waDonasi}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
            Donasi
          </button>
          </a>

        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-0.5 bg-black ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
  {isMenuOpen && (
    <div className="lg:hidden bg-white border-t border-gray-200">
      <div className="flex flex-col gap-4 px-6 py-6">

        <Link href="/" onClick={closeMenu}>
          Beranda
        </Link>

        {isLoggedIn && (
  <>
          <Link href="/" onClick={closeMenu}>
            Beranda
          </Link>

          <button onClick={() => scrollToSection('tentang')}>
            Tentang
          </button>

          <button onClick={() => scrollToSection('program')}>
            Program
          </button>

          <button onClick={() => scrollToSection('event')}>
            Event
          </button>

          <button onClick={() => scrollToSection('news')}>
            Berita
          </button>

          <button onClick={() => scrollToSection('contact')}>
            Kontak
          </button>
        </>
      )}

      <div className="flex flex-col gap-3 pt-4">

        {!isLoggedIn ? (
          <Link href="/login">
            <button className="w-full px-6 py-2 border border-gray-300 rounded-full">
              Login
            </button>
          </Link>
        ) : (
          <>
            <div className="text-center text-green-600 font-semibold">
              Halo, {username}
            </div>

            <button
              onClick={handleLogout}
              className="w-full px-6 py-2 bg-red-500 text-white rounded-full"
            >
              Logout
            </button>
          </>
        )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}