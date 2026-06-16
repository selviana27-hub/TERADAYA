import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { judul, deskripsi, gambar } = body;

    await db.query(
      `INSERT INTO program (judul, deskripsi, gambar, created_at)
       VALUES (?, ?, ?, NOW())`,
      [judul, deskripsi, gambar]
    );

    return NextResponse.json({
      success: true,
      message: 'Program berhasil ditambahkan',
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: 'Gagal menambahkan program',
    }, { status: 500 });
  }
}