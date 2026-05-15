
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AppSection } from '@/components/sections/AppSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CtaSection } from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ overflow: 'hidden', background: '#050505' }}>
        <HeroSection />
        <AppSection />
        <BenefitsSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
