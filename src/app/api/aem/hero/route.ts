import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, subtitle } = body;

    // ✅ Allow partial updates
    if (!title && !subtitle) {
      return NextResponse.json(
        { error: 'At least one field is required' },
        { status: 400 }
      );
    }

    const AEM_ENDPOINT =
      'http://localhost:4502/content/dam/fauna/homepage/homepage-hero/jcr:content/data/master';

    const auth = Buffer.from('admin:admin').toString('base64');

    // 🔑 Sling POST format
    const formBody = new URLSearchParams();

    if (title) {
      formBody.append('./title', title);
    }

    if (subtitle) {
      formBody.append('./subtitle', subtitle);
    }

    const response = await fetch(AEM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${auth}`,
      },
      body: formBody.toString(),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    // unexpected error
    return NextResponse.json(
      { error: 'Unexpected error' },
      { status: 500 }
    );
  }
}
