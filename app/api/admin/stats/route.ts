import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {

    // RELAWAN
    const [relawan]: any = await db.query(`
      SELECT COUNT(*) as total
      FROM relawan
    `);

    // USER
    const [users]: any = await db.query(`
      SELECT COUNT(*) as total
      FROM users
      WHERE role = 'user'
    `);

    // ADMIN
    const [admin]: any = await db.query(`
      SELECT COUNT(*) as total
      FROM users
      WHERE role = 'admin'
    `);

    // DONATUR
    const [donatur]: any = await db.query(`
      SELECT COUNT(*) as total
      FROM donasi
    `);

    // TOTAL DONASI
    const [donasi]: any = await db.query(`
      SELECT COALESCE(SUM(jumlah_donasi),0) as total
      FROM donasi
    `);

    // PROGRAM
    const [program]: any = await db.query(`
      SELECT COUNT(*) as total
      FROM program
    `);

    // EVENT
    const [event]: any = await db.query(`
      SELECT COUNT(*) as total
      FROM event
    `);

    // BERITA
    const [berita]: any = await db.query(`
      SELECT COUNT(*) as total
      FROM berita
    `);

    // KONTAK
    const [kontak]: any = await db.query(`
      SELECT COUNT(*) as total
      FROM kontak
    `);

    return NextResponse.json({
      success: true,

      totalRelawan: relawan[0].total,
      totalUser: users[0].total,
      totalAdmin: admin[0].total,

      totalDonatur: donatur[0].total,
      totalNominalDonasi: donasi[0].total,

      totalProgram: program[0].total,
      totalEvent: event[0].total,
      totalBerita: berita[0].total,
      totalKontak: kontak[0].total,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil statistik'
      },
      {
        status: 500
      }
    );
  }
}