import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { judul, deskripsi, gambar } = await req.json();

    await db.query(
      `INSERT INTO berita (judul, deskripsi, gambar, created_at)
       VALUES (?, ?, ?, NOW())`,
      [judul, deskripsi, gambar]
    );

    return NextResponse.json({
      success: true,
      message: 'Berita berhasil ditambahkan',
    });

  } catch (error: any) {
    console.error('CREATE BERITA ERROR:', error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}