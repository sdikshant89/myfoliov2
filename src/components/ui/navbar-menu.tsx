'use client';
import HandWave from '@/icons/hi.gif';
import ProfileIcon from '@/icons/profile.png';
import ProjectIcon from '@/icons/project_icon.png';
import SearchIcon from '@/icons/search.png';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

function getIcon(item: string): StaticImageData {
  if (item === 'Explore') return SearchIcon;
  else if (item === 'Projects') {
    return ProjectIcon;
  } else if (item === 'Socials') {
    return ProfileIcon;
  } else if (item === 'Say Hi!') {
    return HandWave;
  }
  return SearchIcon;
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const [isWideScreen, setIsWideScreen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkScreenWidth = () => setIsWideScreen(window.innerWidth > 500);
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.div
        transition={{ duration: 0.3 }}
        className="sm:w-28 w-20 cursor-pointer text-black hover:opacity-[0.9] hover:font-bold dark:text-white font-medium text-lg flex justify-evenly items-center hover:scale-[1.05] transition-all duration-300"
      >
        <div>{item}</div>
        {isWideScreen && (
          <Image src={getIcon(item)} className="w-5 h-5" alt="icon" />
        )}
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="backdrop-blur-dropdown rounded-2xl overflow-hidden shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative scale-245 rounded-full backdrop-blur-nav shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: LinkProps & { children: React.ReactNode }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
