import { NextResponse } from 'next/server';

// Configure for static export
export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://vectorstudio11379.github.io/cv/sitemap.xml
`.trim();

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 