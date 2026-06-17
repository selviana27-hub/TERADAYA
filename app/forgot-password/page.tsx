'use client';

import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleResetPassword(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Konfirmasi password tidak cocok');
      return;
    }

    const res = await fetch(
      '/api/forgot-password',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify({
          username,
          newPassword,
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert(
        'Password berhasil diubah'
      );

      window.location.href =
        '/login';
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Ubah password akun Anda
        </p>

        <form
          onSubmit={handleResetPassword}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Username"
            className="w-full border p-3 rounded-xl"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Password Baru"
            className="w-full border p-3 rounded-xl"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Konfirmasi Password Baru"
            className="w-full border p-3 rounded-xl"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-xl"
          >
            Simpan Password Baru
          </button>

        </form>

      </div>

    </div>
  );
}