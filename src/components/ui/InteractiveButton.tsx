import WaveHand from '@/icons/hi.gif';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import React from 'react';

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  hoverText: string;
  link: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text, hoverText, link, className, ...props }, ref) => {
  const handleClick = () => {
    const rootUrl = window.location.origin;
    window.location.href = `${rootUrl}${link}`;
  };
  return (
    <button
      ref={ref}
      className={cn(
        'group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-white p-2 text-center font-semibold',
        className
      )}
      {...props}
      onClick={handleClick}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-500 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{hoverText}</span>
        <Image src={WaveHand} className="w-5 h-5" alt="icon" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-500 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = 'InteractiveHoverButton';

export default InteractiveHoverButton;
