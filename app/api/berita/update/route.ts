import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  const { id, judul, isi, gambar } = await req.json();

  await db.query(
    `UPDATE berita 
     SET judul=?, isi=?, gambar=?
     WHERE id=?`,
    [judul, isi, gambar, id]
  );

  return NextResponse.json({ success: true });
}