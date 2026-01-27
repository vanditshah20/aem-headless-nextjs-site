import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import LoginForm from '@/features/auth/components/login-form';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Flora&Fauna',
};

export default function LoginPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <LoginForm />

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}