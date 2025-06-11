import { NextResponse } from "next/server";

// Mark this route as static
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

// This route is now just a placeholder for static export compatibility
export async function GET() {
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
