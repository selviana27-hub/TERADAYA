import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  const { id, judul, deskripsi, lokasi, tanggal_event, gambar } = await req.json();

  await db.query(
    `UPDATE event 
     SET judul=?, deskripsi=?, lokasi=?, tanggal_event=?, gambar=?
     WHERE id=?`,
    [judul, deskripsi, lokasi, tanggal_event, gambar, id]
  );

  return NextResponse.json({ success: true });
}