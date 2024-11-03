'use client';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-lg mx-auto z-50', className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Know More!">
          <HoveredLink href="/web-dev">About</HoveredLink>
          <HoveredLink href="/web-dev">Work Exp.</HoveredLink>
          <HoveredLink href="/web-dev">Schooling</HoveredLink>
          <HoveredLink href="/web-dev">Certificates</HoveredLink>
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
      </Menu>
    </div>
  );
}

export default Navbar;
