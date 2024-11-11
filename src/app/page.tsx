'use client';

import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';
import WorkExSection from '@/components/WorkExSection';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef<any>(null);
  return (
    <main className="min-h-screen bg-[rgb(24,24,27)] antialiased bg-grid-white/[0.52]">
      <IntroSection />
      <WorkExSection parentRef={ref} />
      <SkillsSection />
    </main>
  );
}
