import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const [rows] = await db.query(`
    SELECT * FROM berita ORDER BY id DESC
  `);

  return NextResponse.json({
    success: true,
    data: rows,
  });
}