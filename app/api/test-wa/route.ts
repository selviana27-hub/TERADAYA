// app/api/test-wa/route.ts

import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const [rows] = await db.query(
    'SELECT * FROM setting_whatsapp'
  );

  return NextResponse.json(rows);
}