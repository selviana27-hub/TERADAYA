'use client';

import { useEffect, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

import AboutSection from '@/components/AboutSection';
import ProgramSection from '@/components/ProgramSection';
import EventSection from '@/components/EventSection';
import PartnerSection from '@/components/PartnerSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';

import Footer from '@/components/Footer';

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      setIsLogin(true);
    }
  }, []);

  return (
    <main>

      <Navigation />

      <HeroSection />

      {/* Sebelum Login */}
      {!isLogin && (
        <>
          <AboutSection />
        </>
      )}

      {/* Setelah Login */}
      {isLogin && (
        <>
          <AboutSection />
          <ProgramSection />
          <EventSection />
          <PartnerSection />
          <NewsSection />
          <ContactSection />
        </>
      )}

      <Footer />

    </main>
  );
}