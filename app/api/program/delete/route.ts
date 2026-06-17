import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    await db.query(
      `DELETE FROM program WHERE id = ?`,
      [id]
    );

    return NextResponse.json({
      success: true,
      message: 'Program berhasil dihapus',
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Gagal hapus program',
    }, { status: 500 });
  }
}