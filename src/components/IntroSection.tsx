'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CppIcon from '../icons/skills/c-sharp.png';
import GitIcon from '../icons/skills/git.png';
import HTMLIcon from '../icons/skills/html.png';
import JavaIcon from '../icons/skills/java.png';
import JiraIcon from '../icons/skills/jira.png';
import MongoIcon from '../icons/skills/mongodb.png';
import PyIcon from '../icons/skills/py.png';
import ReactIcon from '../icons/skills/react.png';
import TailIcon from '../icons/skills/Tailwind.png';
import TsIcon from '../icons/skills/typescript.png';
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
    <AuroraBackground id="introSection">
      <motion.div className="relative flex flex-col gap-4 items-center justify-center px-4 overflow-hidden">
        <div className="min-h-[55rem] md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <div className="p-4 relative w-full text-center">
            <h1 className="dark:text-white text-black mt-20 md:mt-0 text-6xl md:text-8xl font-bold">
              I&apos;m <FlipWords words={names} />
            </h1>
            <p className="my-12 sm:my-8 sm:text-lg text-md dark:text-white text-blue-600 max-w-xl mx-auto">
              A <b>Full Stack Developer</b> with hands-on experience in crafting
              end to end scalable web applications. Proficient in both frontend
              and backend technologies, committed to continuous learning and
              creating impactful software solutions that meet diverse user
              needs.
            </p>
            <div className="mt-8 flex justify-between sm:justify-center max-w-3xl mx-auto items-center flex-wrap sm:gap-x-14 gap-y-6">
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={PyIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={MongoIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={TsIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={HTMLIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={ReactIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.java.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={JavaIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={CppIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GitIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={TailIcon}
                  alt="Tailwind"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.atlassian.com/software/jira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={JiraIcon}
                  alt="Python"
                  className="w-6 h-6 hover:w-9 hover:h-9 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default IntroSection;
