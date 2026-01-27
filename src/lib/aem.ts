const AEM_GRAPHQL_ENDPOINT =
  'http://localhost:4502/content/cq:graphql/global/endpoint.json';

const AEM_AUTH = Buffer.from('admin:admin').toString('base64');

export async function fetchHeroFromAEM() {
  const query = `
    query {
      faunaHeroList {
        items {
          title
          subtitle
          ctaText
          ctaLink
        }
      }
    }
  `;

  const response = await fetch(AEM_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Basic ${AEM_AUTH}`,
    },
    body: JSON.stringify({ query }),
    cache: 'no-store',
  });

  const text = await response.text();

  // 🔍 HARD DEBUG (keep this for now)
  if (!response.ok) {
    console.error('AEM ERROR RESPONSE:', text);
    throw new Error('AEM request failed');
  }

  let json;
  try {
    json = JSON.parse(text);
  } catch {
    console.error('NOT JSON, RECEIVED:', text);
    throw new Error('AEM did not return JSON');
  }

  return json.data.faunaHeroList.items[0];
}
