import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { id, judul, deskripsi, gambar } = await req.json();

    await db.query(
      `UPDATE program 
       SET judul = ?, deskripsi = ?, gambar = ?
       WHERE id = ?`,
      [judul, deskripsi, gambar, id]
    );

    return NextResponse.json({
      success: true,
      message: 'Program berhasil diupdate',
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Gagal update program',
    }, { status: 500 });
  }
}