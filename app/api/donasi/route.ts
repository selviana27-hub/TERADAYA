import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

async function kirimWhatsapp(
  token: string,
  target: string,
  pesan: string
) {
  try {
    const res = await fetch(
      'https://api.fonnte.com/send',
      {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          target,
          message: pesan,
        }),
      }
    );

    const data = await res.json();

    console.log(
      'HASIL FONNTE:',
      JSON.stringify(data, null, 2)
    );

    return data;
  } catch (error) {
    console.error(
      'GAGAL KIRIM WA:',
      error
    );

    return null;
  }
}

function formatNomor(
  nomor: string
) {
  nomor = nomor.trim();

  if (nomor.startsWith('0')) {
    return '62' + nomor.substring(1);
  }

  if (nomor.startsWith('+62')) {
    return nomor.replace('+', '');
  }

  return nomor;
}

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const {
      username,
      email,
      no_hp,
      jumlah_donasi,
      metode_pembayaran,
      pesan,
    } = body;

    if (
      !username ||
      !email ||
      !no_hp ||
      !jumlah_donasi
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Data donasi tidak lengkap',
        },
        {
          status: 400,
        }
      );
    }

    const nomorDonatur =
      formatNomor(no_hp);

    // Simpan ke database
    await db.query(
      `
      INSERT INTO donasi
      (
        nama_lengkap,
        email,
        no_hp,
        jumlah_donasi,
        metode_pembayaran,
        pesan,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, NOW())
      `,
      [
        username,
        email,
        nomorDonatur,
        jumlah_donasi,
        metode_pembayaran,
        pesan || '',
      ]
    );

    const [admins]: any =
      await db.query(
        'SELECT * FROM setting_whatsapp'
      );

    const token =
      'aLyerSs9tbfr5WJ5Gy84';

    const tanggal =
      new Date().toLocaleString(
        'id-ID'
      );

    // WA ke donatur
    const pesanDonatur = `
Halo ${username} 👋

Terima kasih telah berdonasi kepada Yayasan Tera Daya Indonesia.

Detail Donasi:

💰 Nominal:
Rp${Number(
      jumlah_donasi
    ).toLocaleString('id-ID')}

💳 Metode:
${metode_pembayaran}

📅 Tanggal:
${tanggal}

Semoga kebaikan yang diberikan menjadi amal yang bermanfaat dan membawa keberkahan.

Yayasan Tera Daya Indonesia
`;

    await kirimWhatsapp(
      token,
      nomorDonatur,
      pesanDonatur
    );

    // WA ke admin
    if (
      admins &&
      admins.length > 0
    ) {
      for (const admin of admins) {
        await kirimWhatsapp(
          token,
          formatNomor(
            admin.nomor_admin
          ),
          `🔔 DONASI BARU

Nama Donatur:
${username}

Email:
${email}

Nomor WhatsApp:
${nomorDonatur}

Metode Pembayaran:
${metode_pembayaran}

Nominal Donasi:
Rp${Number(
            jumlah_donasi
          ).toLocaleString(
            'id-ID'
          )}

Pesan:
${pesan || '-'}

Tanggal:
${tanggal}`
        );
      }
    }

    return NextResponse.json({
      success: true,
      message:
        'Donasi berhasil disimpan',
    });

  } catch (error) {
    console.error(
      'DONASI ERROR:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          'Terjadi kesalahan server',
      },
      {
        status: 500,
      }
    );
  }
}