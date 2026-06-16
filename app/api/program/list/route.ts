import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {

    const [rows] = await db.query(`
      SELECT
        id,
        judul,
        deskripsi,
        gambar,
        created_at
      FROM program
      ORDER BY id DESC
    `);

    return NextResponse.json({
      success: true,
      data: rows,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil data program',
      },
      {
        status: 500,
      }
    );
  }
}