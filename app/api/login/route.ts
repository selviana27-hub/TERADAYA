import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const {
      username,
      password,
      role
    } = await req.json();

    const [rows]: any = await db.query(
      `SELECT * FROM users
       WHERE username = ?
       AND password = ?
       AND role = ?`,
      [
        username,
        password,
        role
      ]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: 'Login gagal' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'Login berhasil',
      user: rows[0],
    });

  } catch (error: any) {
  console.error('LOGIN ERROR:', error);

  return NextResponse.json(
    {
      message: 'Server error',
      detail: error.message
    },
    { status: 500 }
    );
  }
}