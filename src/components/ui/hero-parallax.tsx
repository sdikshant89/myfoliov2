'use client';
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string[];
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[250vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-36 pb-20 md:pb-40 md:pt-56 px-4 w-full  left-0 top-0">
      <h1 className="text-5xl md:text-7xl font-bold text-white">
        Turning Coffee into Code
      </h1>
      <h2 className="text-2xl md:text-4xl mt-5 md:mt-3 font-bold text-gray-500">
        My Projects
      </h2>
      <p className="max-w-2xl text-base md:text-xl mt-2 md:mt-8 dark:text-neutral-200">
        Here’s what happens when you mix caffeine, creativity, and a keyboard.
      </p>
    </div>
  );
};

const getRandomInterval = () => {
  const intervals = [
    4200, 5100, 6300, 7400, 4600, 5900, 7100, 5300, 6500, 7600,
  ];
  return intervals[Math.floor(Math.random() * intervals.length)];
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string[];
  };
  translate: MotionValue<number>;
}) => {
  const [currentImage, setCurrentImage] = useState<string>(
    product.thumbnail[0]
  );
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [interval, setIntervalState] = useState<number>(getRandomInterval());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = product.thumbnail.indexOf(prevImage);
          return product.thumbnail[
            (currentIndex + 1) % product.thumbnail.length
          ];
        });
        setIsTransitioning(false);
      }, 500);
    }, interval);

    return () => clearInterval(intervalId);
  }, [product.thumbnail, interval]);

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={product.link}
        className="flex group-hover/product:shadow-2xl justify-center items-center"
      >
        <Image
          src={currentImage}
          fill={true}
          style={{ objectPosition: '50% 50%' }}
          className={`object-cover object-left-top absolute h-full w-full inset-0 transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
