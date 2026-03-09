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

    const AEM_BASE_URL = process.env.AEM_BASE_URL || 'http://localhost:4502';
    const AEM_ENDPOINT =
      `${AEM_BASE_URL}/content/dam/fauna/homepage/homepage-hero/jcr:content/data/master`;

    const AEM_AUTH_HEADER =
      process.env.AEM_AUTH_HEADER ||
      `Basic ${Buffer.from(process.env.AEM_CREDENTIALS || 'admin:admin').toString('base64')}`;

    // 🔑 Sling POST format
    const formBody = new URLSearchParams();

    const authorization = AEM_AUTH_HEADER;

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
        Authorization: authorization,
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
