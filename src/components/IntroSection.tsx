'use client';
import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';
import { FlipWords } from './ui/flip-words';
import InteractiveHoverButton from './ui/InteractiveButton';

function IntroSection() {
  const names = [
    'Dikshant Sharma',
    'a Software Engineer',
    'a Web Developer',
    'a Tech Enthusiast',
  ];
  return (
    <AuroraBackground id="introSection">
      <motion.div className="relative flex flex-col gap-4 items-center justify-center px-4 overflow-hidden">
        <div className="min-h-[55rem] md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <h1 className="text-white mt-20 md:mt-0 text-4xl md:text-6xl font-bold w-full text-center">
            Hello! I&apos;m
            <FlipWords words={names} />
          </h1>
          <div className="relative w-full text-center">
            <p className="my-12 sm:my-8 sm:text-lg text-md dark:text-white text-blue-600 max-w-xl mx-auto">
              A <b>Full Stack Developer</b> crafting scalable, user-friendly web
              experiences, blending creativity with technical expertise to
              deliver impactful solutions.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <InteractiveHoverButton
              text="Contact"
              hoverText="Hello!"
              link="/Contact"
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default IntroSection;
