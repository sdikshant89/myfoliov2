'use client';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/background-beams';

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        'font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]',
        className
      )}
    >
      {word}
    </motion.h1>
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
      className="relative max-h-[70rem] w-full rounded-md flex flex-col item-center justify-center mx-auto py-20 bg-black"
    >
      <div className="py-20">
        <h3 className="text-center text-gray-400 text-lg md:text-xl font-bold">
          Schooling
        </h3>
        <h1 className="pt-2 text-center text-4xl md:text-6xl font-bold">
          The Chapters of My Education
        </h1>
      </div>
      <div className="h-40"></div>
      <BackgroundBeams />
    </motion.div>
  );
}
export default EducationSection;
