import AnnouncementBar from '@/components/layout/announcement-bar';
import CTASection from '@/components/layout/cta-section';
import { Navigation, Footer } from '@/components/ui';
import StatsSection from '@/features/home/components/stats-section';
import SolutionsSection from '@/features/home/components/solutions-section';
import CommitmentSection from '@/features/home/components/commitment-section';
import FAQSection from '@/features/home/components/faq-section';
import TestimonialCarousel from '@/features/home/components/testimonial-carousel';
import { fetchHeroFromAEM } from '@/lib/aem';

export default async function HomePage() {
  const hero = await fetchHeroFromAEM();

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />

      <Navigation
        variant="hero"
        backgroundImage="/images/header-bg-waves.png"
        hero={{
          title: hero.title,
          subtitle: hero.subtitle,
          ctaText: hero.ctaText,
          ctaLink: hero.ctaLink,
        }}
      />

      <main>
        <StatsSection />
        <SolutionsSection />
        <CommitmentSection />
        <FAQSection />
        <TestimonialCarousel />
      </main>

      <CTASection />

      <Footer
        variant="detailed"
        backgroundImage="/images/footer-waves-left-bottom.png"
        companyName="Flow"
      />
    </div>
  );
}
