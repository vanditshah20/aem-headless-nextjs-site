'use client';

import { useState } from 'react';
import { Navigation } from '@/components/ui';
import InlineEditableText from '@/components/editor/InlineEditableText';

// hero information fetched from AEM; always strings in our data layer

type Hero = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
};

export default function EditorClient({ hero }: { hero: Hero }) {
  const [currentHero, setCurrentHero] = useState<Hero>(hero);

  async function saveHero(update: Partial<Hero>) {
    // 1️⃣ Save to AEM
    await fetch('/api/aem/hero', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    });

    // 2️⃣ Optimistic UI update
    setCurrentHero((prev) => ({
      ...prev,
      ...update,
    }));
  }

  return (
    <div className="antialiased bg-body text-body font-body">
      <Navigation
        variant="hero"
        backgroundImage="/images/header-bg-waves.png"
        hero={{
          title: (
            <InlineEditableText
              value={currentHero.title}
              onSave={(value) => saveHero({ title: value })}
            />
          ),
          subtitle: (
            <InlineEditableText
              value={currentHero.subtitle}
              onSave={(value) => saveHero({ subtitle: value })}
            />
          ),
          ctaText: currentHero.ctaText,
          ctaLink: currentHero.ctaLink,
        }}
      />
    </div>
  );
}
