import LinkedinIcon from '@/icons/LI-In-Bug.png';
import GitIcon from '@/icons/github-color.svg';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

function Footer({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) {
  const [showAlert, setShowAlert] = useState(false);
  const phoneNumber = '+17807168714';
  const handleClick = () => {
    navigator.clipboard.writeText(phoneNumber);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  function NavButton({ name, sectionId }: { name: string; sectionId: string }) {
    return (
      <button
        onClick={() => scrollToSection(sectionId)}
        className="p-1 text-left hover:scale-110 transition-all duration-300"
      >
        {name}
      </button>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        id="footerSection"
      >
        <div className="relative h-70 md:h-90 w-full rounded-md flex flex-col md:flex-row item-center justify-between px-10 pt-16 md:pt-24 bg-[rgb(24,24,35)]">
          <div className="flex flex-col w-1/2">
            <h1 className="font-bold text-white text-7xl">Dikshant S.</h1>
            <h1 className="font-semibold text-gray-500 text-lg px-1">
              (He/Him)
            </h1>
            <div className="flex justify-start items-center gap-x-2 px-2 py-2">
              <a
                href="https://github.com/sdikshant89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GitIcon}
                  alt="Python"
                  className="w-7 h-7 hover:scale-110"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/dikshant-sharma-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={LinkedinIcon}
                  alt="Python"
                  className="w-8 h-8 hover:scale-110"
                />
              </a>
            </div>
          </div>
          <div className="my-16 md:my-0 md:pr-20 flex items-start justify-center md:justify-end md:w-1/2 gap-x-36 text-white text-md font-medium">
            <div className="flex flex-col gap-y-6 md:gap-y-16 text-left">
              <NavButton name="Home" sectionId="introSection" />
              <NavButton name="WorkEx." sectionId="WorkExSection" />
              <NavButton name="Projects" sectionId="introSection" />
              <NavButton name="Skills" sectionId="skillSection" />
            </div>
            <div className="flex flex-col gap-y-6 md:gap-y-16 items-start justify-start">
              <a href="mailto:sharma.dshan@gmail.com">
                <button className="p-1 text-left hover:scale-110 transition-all duration-300">
                  Email
                </button>
              </a>
              <button
                onClick={handleClick}
                className="p-1 text-left hover:scale-110 transition-all duration-300"
              >
                Phone
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-70 md:h-90 w-full rounded-md flex item-center justify-between px-10 pb-5 bg-[rgb(24,24,35)]">
          <div className="flex flex-col pt-2 pb-8 text-white text-lg font-medium">
            <h1 className="text-gray-500 font-bold">No Copyright 2024</h1>
            <h1>Created by Dikshant Sharma</h1>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0.0, x: 20 }}
            animate={showAlert ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            exit={{ opacity: 0.0, x: -20 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
            className="fixed p-3 m-4 md:m-6 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full inline-flex z-20 bottom-14 left-auto whitespace-nowrap"
            role="alert"
          >
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              Info
            </span>
            <span className="font-semibold mr-2 text-left">
              Phone number copied to clipboard
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Footer;
