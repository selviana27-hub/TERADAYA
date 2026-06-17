import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { username, newPassword } = await req.json();

    const [user]: any = await db.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );

    if (user.length === 0) {
      return NextResponse.json(
        {
          message: 'Username tidak ditemukan',
        },
        {
          status: 404,
        }
      );
    }

    await db.query(
      'UPDATE users SET password = ? WHERE username = ?',
      [newPassword, username]
    );

    return NextResponse.json({
      message: 'Password berhasil diperbarui',
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: 'Server Error',
      },
      {
        status: 500,
      }
    );
  }
}