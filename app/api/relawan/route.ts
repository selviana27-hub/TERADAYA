import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

async function kirimWhatsapp(
  token: string,
  target: string,
  pesan: string
) {
  try {
    await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        target,
        message: pesan,
      }),
    });
  } catch (error) {
    console.error('Gagal kirim WA:', error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nama_lengkap,
      email,
      no_hp,
      kota,
      pekerjaan,
      alasan,
    } = body;

    if (
      !nama_lengkap ||
      !email ||
      !no_hp
    ) {
      return NextResponse.json(
        {
          message: 'Data belum lengkap',
        },
        {
          status: 400,
        }
      );
    }

    // Simpan ke database
    await db.execute(
      `
      INSERT INTO relawan
      (
        nama_lengkap,
        email,
        no_hp,
        kota,
        pekerjaan,
        alasan
      )
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [
        nama_lengkap,
        email,
        no_hp,
        kota,
        pekerjaan,
        alasan,
      ]
    );

    // Ambil semua admin WA
    const [admins]: any = await db.query(
      'SELECT * FROM setting_whatsapp'
    );

    if (admins.length > 0) {
      const token = admins[0].token_fonnte;

      // WA ke relawan
      await kirimWhatsapp(
        token,
        no_hp,
        `Halo ${nama_lengkap} 👋

Terima kasih telah mendaftar sebagai relawan Yayasan Tera Daya Indonesia.

Data Anda telah kami terima dan akan segera diproses oleh tim kami.

Salam,
Yayasan Tera Daya Indonesia`
      );

      // WA ke semua admin
      for (const admin of admins) {
        await kirimWhatsapp(
          token,
          admin.nomor_admin,
          `🔔 RELAWAN BARU

Nama:
${nama_lengkap}

Email:
${email}

No WA:
${no_hp}

Kota:
${kota}

Pekerjaan:
${pekerjaan}

Alasan:
${alasan}

Silakan lakukan tindak lanjut.`
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Pendaftaran berhasil',
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menyimpan data',
      },
      {
        status: 500,
      }
    );
  }
}