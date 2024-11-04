'use client';
import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';
import { FlipWords } from './ui/flip-words';

function IntroSection() {
  const names = [
    'Dikshant Sharma',
    'a Software Engineer',
    'a Web Developer',
    'a Tech Enthusiast',
  ];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="min-h-[55rem] md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <div className="mt-16 p-4 relative z-10 w-full text-center">
            <h1 className="text-white mt-20 md:mt-0 text-4xl md:text-8xl font-bold">
              I'm <FlipWords words={names} />
            </h1>
            <p className="mt-6 text-base md:text-2xl text-white max-w-xl mx-auto">
              A <b>Full Stack Developer</b> with hands-on experience in crafting
              end to end scalable web applications. Proficient in both frontend
              and backend technologies, committed to continuous learning and
              creating impactful software solutions that meet diverse user
              needs.
            </p>
            <div className="mt-28">down bouncing arow</div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default IntroSection;
