'use client';

import Certifications from '@/components/Certifications';
import EducationSection from '@/components/EduSection';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';
import { WorkExSectionV2 } from '@/components/WorkExSectionV2';

export default function Home() {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <main className="min-h-screen bg-black antialiased">
      <IntroSection />
      <WorkExSectionV2 />
      <Certifications />
      <SkillsSection />
      <EducationSection />
      <Footer scrollToSection={scrollToSection} />
    </main>
  );
}
