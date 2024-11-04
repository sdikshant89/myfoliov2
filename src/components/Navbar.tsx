'use client';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn('fixed top-16 inset-x-0 max-w-md mx-auto z-50', className)}
    >
      <Menu setActive={setActive}>
        <div className="flex space-x-10">
          <MenuItem setActive={setActive} active={active} item="Explore">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">
                <div className="flex justify-center items-center w-full text-lg">
                  About
                </div>
              </HoveredLink>
              <HoveredLink href="/web-dev">
                <div className="flex justify-center items-center w-full text-lg">
                  Work Ex
                </div>
              </HoveredLink>
              <HoveredLink href="/web-dev">
                <div className="flex justify-center items-center w-full text-lg">
                  School
                </div>
              </HoveredLink>
              <HoveredLink href="/web-dev">
                <div className="flex justify-center items-center w-full text-lg">
                  Certificates
                </div>
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Say Hi!"
          ></MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
