import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

async function kirimWhatsapp(
  token: string,
  target: string,
  pesan: string
) {
  try {
    console.log('====================');
    console.log('KIRIM WA');
    console.log('TOKEN:', token);
    console.log('TARGET:', target);
    console.log('PESAN:', pesan);

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

const formatNomor = (
  nomor: string
) => {
  nomor = nomor.trim();

  if (nomor.startsWith('0')) {
    return '62' + nomor.substring(1);
  }

  if (nomor.startsWith('+62')) {
    return nomor.replace('+', '');
  }

  return nomor;
};

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    console.log(
      'DATA DONASI MASUK:',
      body
    );

    const {
      nama_lengkap,
      email,
      no_hp,
      jumlah_donasi,
      metode_pembayaran,
      pesan,
    } = body;

    if (
      !nama_lengkap ||
      !email ||
      !no_hp ||
      !jumlah_donasi
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Data tidak lengkap',
        },
        {
          status: 400,
        }
      );
    }

    const nomorDonatur =
      formatNomor(no_hp);

    // SIMPAN DATABASE

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
        nama_lengkap,
        email,
        nomorDonatur,
        jumlah_donasi,
        metode_pembayaran,
        pesan,
      ]
    );

    console.log(
      'DONASI BERHASIL DISIMPAN'
    );

    // AMBIL DATA ADMIN

    const [admins]: any =
      await db.query(
        'SELECT * FROM setting_whatsapp'
      );

    console.log(
      'DATA ADMIN:',
      admins
    );

    if (
      !admins ||
      admins.length === 0
    ) {
      console.log(
        'ADMIN TIDAK DITEMUKAN'
      );

      return NextResponse.json({
        success: true,
        message:
          'Donasi berhasil disimpan',
      });
    }

  
    // TOKEN REBECCA (DEVICE CONNECT)
    const token = 'aLyerSs9tbfr5WJ5Gy84';

    const tanggal =
      new Date().toLocaleString(
        'id-ID'
      );

          console.log(
      'NOMOR DONATUR:',
      nomorDonatur
    );

    console.log(
      'TOKEN DONASI:',
      token
    );

    // WA KE DONATUR

    const pesanDonatur = `
Hai Kak ${nama_lengkap} 👋

Terima kasih banyak!

Donasi sebesar Rp${Number(
      jumlah_donasi
    ).toLocaleString('id-ID')}

telah kami terima pada

${tanggal}

Kebaikanmu sangat berarti untuk membantu program sosial Yayasan Tera Daya Indonesia.

Semoga berkah ya 🙏

Admin Yayasan Tera Daya Indonesia
`;

    const hasilUser =
      await kirimWhatsapp(
        token,
        nomorDonatur,
        pesanDonatur
      );

    console.log(
      'HASIL USER:',
      hasilUser
    );

    // WA KE ADMIN

    for (const admin of admins) {
      await kirimWhatsapp(
        token,
        formatNomor(
          admin.nomor_admin
        ),
        `DONASI BARU

Nama: ${nama_lengkap}

Nominal:
Rp${Number(
          jumlah_donasi
        ).toLocaleString('id-ID')}

Nomor:
${nomorDonatur}`
      );
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