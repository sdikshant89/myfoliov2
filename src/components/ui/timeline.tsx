'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[rgb(24,24,27)] font-sans md:px-24"
      ref={containerRef}
    >
      <div className="pt-60">
        <h3 className="text-center text-gray-400 text-lg md:text-xl font-bold">
          Work Experience
        </h3>
        <h1 className="pt-2 text-center text-white text-4xl md:text-6xl font-bold">
          Companies I worked for in the past
        </h1>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pt-20 md:pt-40">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pb-28 md:pb-44 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3.5 md:left-3.5 w-8 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full border bg-blue-400 border-black p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-gray-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-3xl mb-4 text-left font-bold text-gray-400">
                {item.title}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-7 left-7 top-0 overflow-hidden w-[5px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[5px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
