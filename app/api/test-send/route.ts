import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://api.fonnte.com/send',
      {
        method: 'POST',
        headers: {
          Authorization: 'aLyerSs9tbfr5WJ5Gy84',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          target: '6287877250049',
          message: `Halo Selviana!

Selamat bergabung di tim Yayasan Tera Daya Indonesia.

Akun Anda sebagai Admin WhatsApp Business telah berhasil dibuat.

Silakan login ke dashboard untuk mulai mengelola sistem Yayasan Tera Daya Indonesia.

Terima kasih telah bergabung bersama kami.

Yayasan Tera Daya Indonesia`,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      response: data,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengirim WhatsApp',
      },
      {
        status: 500,
      }
    );
  }
}