import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server'; // Used to create HTTP responses in Next.js API routes.

// Dummy data
const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
];

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts);
}


//  API Route handler for fetching Posts