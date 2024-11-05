'use client';
import { cn } from '@/utils/cn';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

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
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
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

  const backgroundColors = ['rgb(24, 24, 27)', 'var(--black)'];
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="min-h-[60rem] md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center scroll-pb-20"
    >
      <div className="pt-60 pb-4">
        <h3 className="text-center text-gray-400 text-md md:text-xl font-bold">
          Work Experience
        </h3>
        <h1 className="pt-2 text-center text-2xl md:text-6xl font-bold">
          Companies I worked for in the past
        </h1>
      </div>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[35rem] w-full overflow-y-auto flex justify-evenly relative space-x-10 rounded-md m-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20 h-[30rem]">
                <motion.h1
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className=" pt-10 text-2xl font-bold text-slate-100"
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
                  className="text-lg font-semibold text-gray-400"
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
                  className="text-kg text-slate-300 max-w-md mt-4"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        {/* <div
          className={cn(
            'justify-start items-start 2xl:block top-2 sticky overflow-hidden',
            contentClassName
          )}
        >
          <Image
            src="/Company-Overview-OG.png"
            alt="Description of the image"
            width={500}
            height={200}
            className="mt-20 rounded-lg"
          />
        </div> */}
        <div
          className={cn(
            'hidden xl:block h-[290px] w-[480px] rounded-lg bg-white sticky top-24 overflow-hidden',
            contentClassName
          )}
        >
          <Image
            src={content[activeCard].src}
            alt="Description of the image"
            width={500}
            height={900}
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
