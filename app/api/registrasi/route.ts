import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

async function kirimWhatsapp(
  token: string,
  target: string,
  message: string
) {
  try {
    const res = await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        target,
        message,
      }),
    });

    const data = await res.json();

    console.log('=== FONNTE RESPONSE ===');
    console.log('TARGET:', target);
    console.log('RESPONSE:', data);

    return data;
  } catch (err) {
    console.error('❌ ERROR KIRIM WA:', err);
    return null;
  }
}

// Format nomor WA
const formatNomor = (no: string) => {
  if (!no) return '';

  no = no.toString().trim();

  if (no.startsWith('0')) {
    return '62' + no.substring(1);
  }

  if (no.startsWith('+62')) {
    return no.replace('+', '');
  }

  return no;
};

export async function POST(req: Request) {
  try {
    const { username, no_hp, password } =
      await req.json();

    // Semua registrasi publik otomatis menjadi pengguna
    const role = 'Pengguna';

    // Jika nanti menggunakan sistem pengajuan admin
    const status_admin = 'none';

    // Validasi
    if (!username || !no_hp || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Data tidak lengkap',
        },
        {
          status: 400,
        }
      );
    }

    const nomorUser = formatNomor(no_hp);

    console.log('=== USER BARU ===');
    console.log('USERNAME:', username);
    console.log('NOMOR:', nomorUser);
    console.log('ROLE:', role);

    // Cek username
    const [cek]: any = await db.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );

    if (cek.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Username sudah digunakan',
        },
        {
          status: 400,
        }
      );
    }

    // Simpan user
    await db.query(
      `
      INSERT INTO users
      (username, no_hp, password, role)
      VALUES (?, ?, ?, ?)
      `,
      [
        username,
        nomorUser,
        password,
        role,
      ]
    );

    console.log('✅ USER BERHASIL DISIMPAN');

    // Ambil data admin
    const [admins]: any = await db.query(
      'SELECT * FROM setting_whatsapp'
    );

    if (!admins || admins.length === 0) {
      console.log('❌ ADMIN WHATSAPP TIDAK ADA');

      return NextResponse.json({
        success: false,
        message: 'Admin WhatsApp tidak ditemukan',
      });
    }

    // TOKEN FONNTE
    const token = 'aLyerSs9tbfr5WJ5Gy84';

    // =====================
    // PESAN KE USER
    // =====================

    const pesanUser = `
Halo ${username} 👋

Selamat datang di Yayasan Tera Daya Indonesia.

Registrasi akun Anda telah berhasil.

Data akun Anda:

👤 Username : ${username}
📱 Nomor WA : ${nomorUser}
🔑 Role : ${role}

Silakan login ke sistem untuk menggunakan layanan yang tersedia.

Terima kasih.

Admin Yayasan Tera Daya Indonesia
`;

    const resUser = await kirimWhatsapp(
      token,
      nomorUser,
      pesanUser
    );

    console.log('========================');
    console.log('HASIL KIRIM KE USER');
    console.log(
      JSON.stringify(resUser, null, 2)
    );
    console.log('========================');

    if (!resUser || resUser.status !== true) {
      console.log(
        '❌ PESAN KE USER GAGAL TERKIRIM'
      );
    }

    // =====================
    // PESAN KE ADMIN
    // =====================

    const pesanAdmin = `
🔔 PENDAFTAR BARU

Nama      : ${username}
Nomor WA  : ${nomorUser}
Role      : ${role}

Pengguna baru telah berhasil melakukan registrasi pada sistem Yayasan Tera Daya Indonesia.
`;

    for (const admin of admins) {
      const nomorAdmin = formatNomor(
        admin.nomor_admin
      );

      const resAdmin =
        await kirimWhatsapp(
          token,
          nomorAdmin,
          pesanAdmin
        );

      console.log(
        `=== HASIL KIRIM KE ADMIN ${admin.nama_admin} ===`
      );

      console.log(
        JSON.stringify(resAdmin, null, 2)
      );
    }

    return NextResponse.json({
      success: true,
      message:
        'Registrasi berhasil dan WhatsApp berhasil dikirim',
    });

  } catch (error) {
    console.error(
      '❌ ERROR REGISTER:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: 'Server Error',
      },
      {
        status: 500,
      }
    );
  }
}