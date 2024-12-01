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
  scrollToSection: (sectionId: string) => void;
}) {
  //TODO check url if not homepage then first return to homepage and then scroll to section
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'fixed top-4 md:top-16 inset-x-0 sm:w-md md:max-w-xl mx-auto z-50',
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex sm:space-x-0 md:space-x-5">
          <MenuItem
            setActive={setActive}
            link="/"
            active={active}
            item="Explore"
          >
            <div className="flex flex-col space-y-4 text-sm text-white">
              <button onClick={() => scrollToSection('footerSection')}>
                <div className="flex justify-center items-center w-full text-lg hover:font-bold">
                  About
                </div>
              </button>
              <button onClick={() => scrollToSection('WorkExSection')}>
                <div className="flex justify-center items-center w-full text-lg  hover:font-bold">
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
            </div>
          </MenuItem>

          <Link href={'/Projects'}>
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Socials">
            <div className="flex flex-col space-y-4 text-sm text-white">
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
                    'https://sharmadshanv1.netlify.app/',
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
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
