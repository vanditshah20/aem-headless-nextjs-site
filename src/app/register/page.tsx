import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import RegisterForm from '@/features/auth/components/register-form';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Flora&Fauna',
};

export default function RegisterPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <RegisterForm />

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}