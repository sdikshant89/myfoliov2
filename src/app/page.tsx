'use client';

import EducationSection from '@/components/EduSection';
import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';
import WorkExSection from '@/components/WorkExSection';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef<any>(null);
  return (
    <main className="min-h-screen bg-black antialiased">
      <IntroSection />
      <WorkExSection parentRef={ref} />
      <SkillsSection />
      <EducationSection />
    </main>
  );
}
