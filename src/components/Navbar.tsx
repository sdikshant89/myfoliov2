'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, MenuItem } from './ui/navbar-menu';

function Navbar({
  className,
  scrollToSection,
}: {
  className?: string;
  scrollToSection: any;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'fixed top-16 inset-x-0 sm:w-md md:max-w-xl mx-auto z-50',
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex sm:space-x-0 md:space-x-5">
          <MenuItem setActive={setActive} active={active} item="Explore">
            <div className="flex flex-col space-y-4 text-sm">
              <button>
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  <Link href={'/'}>Home</Link>
                </div>
              </button>
              <button onClick={() => scrollToSection('WorkExSection')}>
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  Work Ex
                </div>
              </button>
              <button onClick={() => scrollToSection('skillSection')}>
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  Skills
                </div>
              </button>
              <button onClick={() => scrollToSection('educationSection')}>
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  School
                </div>
              </button>
              <button>
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  Certificates
                </div>
              </button>
            </div>
          </MenuItem>
          <Link href={'/Projects'}>
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Socials">
            <div className="flex flex-col space-y-4 text-sm">
              <button
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/dikshant-sharma-/',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  Linkedin
                </div>
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://github.com/sdikshant89',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  Github
                </div>
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://github.com/sdikshant89',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  Old Portfolio
                </div>
              </button>
            </div>
          </MenuItem>
          <Link href={'/Contact'}>
            <MenuItem setActive={setActive} active={active} item="Say Hi!" />
          </Link>
          {/* <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Image src={LinkIcon} alt="Python" className="w-7 h-6" />
          </a>

          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Image src={GitIcon} alt="Python" className="w-6 h-6" />
          </a> */}
        </div>
      </Menu>
      {/* <div className="absolute flex flex-row -right-full justify-end top-1/2 transform -translate-y-1/2 w-[200px]">
        <span className="flex items-center justify-center w-[75px] h-[75px] rounded-full bg-black mx-5">
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GitIcon}
              alt="Python"
              className="w-[20px] h-[20px] hover:w-9 hover:h-9 transition-all duration-300"
            />
          </a>
        </span>
        <span className="flex items-center justify-center w-[75px] h-[75px] rounded-full bg-black">
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GitIcon}
              alt="Python"
              className="w-[20px] h-[20px] hover:w-9 hover:h-9 transition-all duration-300"
            />
          </a>
        </span>
      </div> */}
    </div>
  );
}

export default Navbar;
