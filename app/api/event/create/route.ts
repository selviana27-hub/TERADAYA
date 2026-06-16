import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log('BODY:', body);

    const {
      judul,
      deskripsi,
      lokasi,
      tanggal,
      gambar,
    } = body;

    const [result] = await db.query(
      `INSERT INTO event
      (judul, deskripsi, lokasi, tanggal, gambar, created_at)
      VALUES (?, ?, ?, ?, ?, NOW())`,
      [
        judul,
        deskripsi,
        lokasi,
        tanggal,
        gambar,
      ]
    );

    console.log('INSERT RESULT:', result);

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {
    console.error('EVENT CREATE ERROR:');
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}