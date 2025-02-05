'use client';

import UofAIcon from '@/icons/UofA.png';
import KIITIcon from '@/icons/kiitLogo.png';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  hpLink: string;
}
const BlurIn = ({
  word,
  className,
  variant,
  duration = 1,
  hpLink,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(20px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      href={hpLink}
      initial="hidden"
      whileInView="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn('z-20 tracking-[-0.02em] drop-shadow-sm ', className)}
    >
      {word}
    </motion.a>
  );
};

function EducationSection() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      id="educationSection"
      className="relative h-70 md:h-90 w-full rounded-md flex flex-col item-center justify-center px-6 py-12 md:px-20 md:py-40 bg-black"
    >
      <div className="py-12">
        <h3 className="text-center text-gray-400 text-lg md:text-xl font-bold">
          Schooling
        </h3>
        <h1 className="pt-2 text-center text-white text-4xl md:text-6xl font-bold">
          Chapters of My Education
        </h1>
      </div>
      <div className="w-full py-5 px-10 flex flex-col gap-y-16 md:gap-y-10">
        <div className="flex justify-center md:justify-start items-center text-center md:text-left">
          <Image
            src={UofAIcon}
            alt="Python"
            className="w-48 h-48 hidden md:block"
          />
          <div className="flex flex-col gap-y-2 px-2">
            <BlurIn
              word="University of Alberta"
              duration={2}
              className="text-4xl md:text-5xl text-yellow-500 font-bold"
              hpLink="https://www.ualberta.ca/en/index.html"
            />
            <h3 className="text-xl md:text-2xl text-white font-medium">
              Master of Science in Computer Science (Multimedia)
            </h3>
            <h3 className="text-xl md:text-2xl text-gray-500 font-medium">
              Sept. 2023 - Jan. 2025
            </h3>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center text-center md:text-right">
          <div className="flex flex-col gap-y-2 px-5">
            <BlurIn
              word="KIIT University"
              duration={2}
              className="text-4xl md:text-5xl text-yellow-500 font-bold"
              hpLink="https://kiit.ac.in/"
            />
            <h3 className="text-xl md:text-2xl text-white font-medium">
              Bachelor of Technology (Computer Engineering - I.T.)
            </h3>
            <h3 className="text-xl md:text-2xl text-gray-500 font-medium">
              July 2018 - May 2022
            </h3>
          </div>
          <Image
            src={KIITIcon}
            alt="Python"
            className="w-48 h-40 hidden md:block"
          />
        </div>
      </div>
    </motion.div>
  );
}
export default EducationSection;
