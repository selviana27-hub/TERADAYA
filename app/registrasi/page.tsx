'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [noHp, setNoHp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');
  const [role, setRole] = useState('user');
  const [loading, setLoading] = useState(false);

  async function handleRegister(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!username || !noHp || !password) {
      alert('Semua data wajib diisi');
      return;
    }

    if (password.length < 6) {
      alert(
        'Password minimal 6 karakter'
      );
      return;
    }

    if (password !== confirmPassword) {
      alert(
        'Konfirmasi password tidak sama'
      );
      return;
    }

    setLoading(true);

    try {
      console.log(
        '=== DATA DIKIRIM KE BACKEND ==='
      );

      console.log({
        username,
        no_hp: noHp,
        role,
      });

      const res = await fetch(
        '/api/registrasi',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            username,
            no_hp: noHp,
            password,
            role,
          }),
        }
      );

      const text =
        await res.text();

      console.log(
        '=== RESPONSE RAW ==='
      );
      console.log(text);

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(
          'Response bukan JSON'
        );
      }

      console.log(
        '=== RESPONSE JSON ==='
      );
      console.log(data);

      if (!res.ok) {
        throw new Error(
          data.message ||
            'Terjadi kesalahan server'
        );
      }

      if (data.success) {
        alert(
          'Registrasi berhasil'
        );

        setUsername('');
        setNoHp('');
        setPassword('');
        setConfirmPassword('');
        setRole('user');

        setTimeout(() => {
          window.location.href =
            '/login';
        }, 1000);
      } else {
        alert(
          data.message ||
            'Registrasi gagal'
        );
      }
    } catch (error: any) {
      console.error(
        'ERROR REGISTER:',
        error
      );

      alert(
        error.message ||
          'Terjadi kesalahan server'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Registrasi
        </h1>

        <form
          onSubmit={handleRegister}
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
            type="text"
            placeholder="Nomor WhatsApp (08123456789)"
            className="w-full border p-3 rounded-xl"
            value={noHp}
            onChange={(e) =>
              setNoHp(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Konfirmasi Password"
            className="w-full border p-3 rounded-xl"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            required
          />

          <div>
            <label className="block mb-2 font-medium">
              Daftar Sebagai
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
              className="w-full border p-3 rounded-xl"
            >
              <option value="user">
                Pengguna
              </option>

              <option value="admin">
                Admin
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >
            {loading
              ? 'Memproses...'
              : 'Daftar'}
          </button>
        </form>
      </div>
    </div>
  );
}