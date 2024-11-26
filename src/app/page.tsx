'use client';

import EducationSection from '@/components/EduSection';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';
import WorkExSection from '@/components/WorkExSection';

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
      <WorkExSection />
      <SkillsSection />
      <EducationSection />
      <Footer scrollToSection={scrollToSection} />
    </main>
  );
}
