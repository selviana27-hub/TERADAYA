import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1 as test");

    return NextResponse.json({
      success: true,
      rows,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: String(error),
      detail: error?.message,
      code: error?.code,
    });
  }
}