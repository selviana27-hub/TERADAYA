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

    return await res.json();
  } catch (err) {
    console.error('ERROR KIRIM WA:', err);
    return null;
  }
}

function formatNomor(no: string) {
  if (!no) return '';

  no = no.toString().trim();

  if (no.startsWith('0')) {
    return '62' + no.substring(1);
  }

  if (no.startsWith('+62')) {
    return no.replace('+', '');
  }

  return no;
}

export async function POST(req: Request) {
  try {
    const {
      username,
      no_hp,
      password,
    } = await req.json();

    if (
      !username ||
      !no_hp ||
      !password
    ) {
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

    const role = 'user';

    const nomorUser =
      formatNomor(no_hp);

    // cek username
    const [cekUser]: any =
      await db.query(
        'SELECT id FROM users WHERE username = ?',
        [username]
      );

    if (cekUser.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Username sudah digunakan',
        },
        {
          status: 400,
        }
      );
    }

    // simpan user
    await db.query(
      `
      INSERT INTO users
      (
        username,
        no_hp,
        password,
        role
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        username,
        nomorUser,
        password,
        role,
      ]
    );

    console.log(
      'USER BERHASIL DISIMPAN'
    );

    // ======================
    // WHATSAPP USER
    // ======================

    const token =
      process.env.FONNTE_TOKEN ||
      'aLyerSs9tbfr5WJ5Gy84';

    const pesanUser = `
Halo ${username} 👋

Selamat datang di Yayasan Tera Daya Indonesia.

Registrasi akun Anda berhasil.

Username : ${username}
Nomor WA : ${nomorUser}

Silakan login ke sistem.

Terima kasih.
`;

    await kirimWhatsapp(
      token,
      nomorUser,
      pesanUser
    );

    // ======================
    // WHATSAPP ADMIN
    // ======================

    try {
      const [admins]: any =
        await db.query(
          'SELECT * FROM setting_whatsapp'
        );

      if (
        admins &&
        admins.length > 0
      ) {
        const pesanAdmin = `
🔔 PENDAFTAR BARU

Nama : ${username}
Nomor WA : ${nomorUser}
Role : user
`;

        for (const admin of admins) {
          if (
            admin.nomor_admin
          ) {
            await kirimWhatsapp(
              token,
              formatNomor(
                admin.nomor_admin
              ),
              pesanAdmin
            );
          }
        }
      }
    } catch (waAdminError) {
      console.error(
        'WA ADMIN ERROR:',
        waAdminError
      );
    }

    return NextResponse.json({
      success: true,
      message:
        'Registrasi berhasil',
    });
  } catch (error: any) {
    console.error(
      'ERROR REGISTER:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: 'Server Error',
        detail: error?.message,
      },
      {
        status: 500,
      }
    );
  }
}