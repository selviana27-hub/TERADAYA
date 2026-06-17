'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('user');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    const user = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    if (isLogin === 'true') {
      if (user.role === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/';
      }
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        username,
        password,
        role: loginType,
      }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('isLogin', 'true');

        localStorage.setItem(
          'user',
          JSON.stringify(data.user)
        );

        localStorage.setItem(
          'username',
          data.user.username
        );

        alert('Login Berhasil');

        // Redirect berdasarkan role
        if (data.user.role === 'admin') {
          window.location.href = '/admin';
        } else {
          window.location.href = '/';
        }

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat login');
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Login
          </h1>

          <div className="flex justify-center mt-4 gap-3">

          <button
            type="button"
            onClick={() => setLoginType('user')}
            className={`px-5 py-2 rounded-lg ${
              loginType === 'user'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            Pengguna
          </button>

          <button
            type="button"
            onClick={() => setLoginType('admin')}
            className={`px-5 py-2 rounded-lg ${
              loginType === 'admin'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            Admin
          </button>

        </div>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Username */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Masukkan Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Masukkan Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Toggle Password */}
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="text-sm text-blue-600 hover:underline"
          >
            {showPassword
              ? 'Sembunyikan Password'
              : 'Lihat Password'}
          </button>

          {/* Lupa Password */}
          <div>
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Lupa Password?
            </Link>
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <div className="text-center mt-6">

          <p className="text-gray-600">
            Belum punya akun?
          </p>

          <Link
            href="/registrasi"
            className="text-purple-500 font-semibold hover:underline"
          >
            Daftar Sekarang
          </Link>

        </div>

      </div>

    </div>
  );
}