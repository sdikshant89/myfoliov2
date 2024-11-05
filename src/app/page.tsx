import IntroSection from '@/components/IntroSection';
import WorkExSection from '@/components/WorkExSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(24,24,27)] antialiased bg-grid-white/[0.52]">
      <IntroSection />
      <WorkExSection />
    </main>
  );
}
