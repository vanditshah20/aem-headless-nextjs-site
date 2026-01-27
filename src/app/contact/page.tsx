import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import ContactHero from '@/features/contact/components/contact-hero';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visit www.pixelrocket.store to learn how to become a frontend web developer',
};

export default function ContactPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <div>
        <AnnouncementBar />
        <SimpleNavigation />
        <ContactHero />
        <CTASection />
        <Footer backgroundImage="images/footer-waves-left-bottom.png" />
      </div>
    </div>
  );
}