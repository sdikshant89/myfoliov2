'use client';
import DownDouble from '@/icons/arrow_down_icon.png';
import { cn } from '@/utils/cn';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    org: string;
    orgLink: string;
    src: string;
    skills: string[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    //target: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const handleScrollDown = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 580,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className="relative min-h-[60rem] md:h-[50rem] bg-[rgb(24,24,27)] w-full rounded-md flex flex-col items-center justify-center top-0 overflow-hidden"
    >
      <div className="pt-60 pb-4">
        <h3 className="text-center text-gray-400 text-lg md:text-xl font-bold">
          Work Experience
        </h3>
        <h1 className="pt-2 text-center text-white text-4xl md:text-6xl font-bold">
          Companies I worked for in the past
        </h1>
      </div>
      <motion.div
        className="h-[35rem] sm:h-[50rem] w-full overflow-y-auto flex justify-evenly relative space-x-20 mx-20 mt-10"
        ref={ref}
      >
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="mb-56 sm:mb-10 h-[30rem] px-6 sm:px-4 relative"
            >
              <motion.h1
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="pt-10 text-2xl font-bold dark:text-white text-black"
              >
                {item.title}
              </motion.h1>
              <motion.h3
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg font-semibold dark:text-blue-500 text-red-500"
              >
                <a
                  href={item.orgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {item.org}
                </a>
              </motion.h3>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base sm:text-md dark:text-slate-300 text-blue-600 mt-4"
              >
                {item.description}
              </motion.p>
              <div className="pt-4 justify-start items-center">
                {item.skills.map((skill, skillIndex) => (
                  <button
                    disabled
                    key={`${item.title}-skill-${skillIndex}`}
                    className="px-3 py-1 mr-2 mt-2 rounded-lg border border-gray-600 dark:text-white text-black"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className={cn(
            'hidden xl:block h-[290px] w-[490px] rounded-lg bg-white sticky top-24 overflow-hidden',
            contentClassName
          )}
        >
          <Image
            src={content[activeCard].src}
            alt="Description of the image"
            width={500}
            height={900}
            className="h-full w-full overflow-hidden"
          />
        </div>
      </motion.div>
      <button
        onClick={handleScrollDown}
        className="sticky h-28 px-3 py-1 rounded-lg flex flex-col justify-start"
      >
        <motion.div
          animate={{
            y: [0, -20, 0], // Moves up and down
          }}
          transition={{
            duration: 1.5, // Adjust for speed
            repeat: Infinity, // Loop the animation
            repeatType: 'loop', // Ensures continuous looping
          }}
        >
          <Image src={DownDouble} alt="Down arrow" width={50} height={50} />
        </motion.div>
      </button>
    </motion.div>
  );
};
