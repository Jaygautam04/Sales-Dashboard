import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { year: 2020, sales: 400 },
    { year: 2021, sales: 700 },
    { year: 2022, sales: 200 },
    { year: 2023, sales: 900 },
    { year: 2024, sales: 1100 },
  ]);
}
