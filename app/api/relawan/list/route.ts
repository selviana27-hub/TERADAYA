import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
        id,
        nama_lengkap,
        email,
        no_hp,
        kota,
        pekerjaan,
        alasan,
        created_at
      FROM relawan
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
        message: 'Gagal mengambil data relawan',
      },
      {
        status: 500,
      }
    );
  }
}