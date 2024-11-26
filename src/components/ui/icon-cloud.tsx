'use client';

import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from 'react-icon-cloud';

export const useResponsiveMaxWidth = () => {
  const [maxWidth, setMaxWidth] = useState('35vh');

  useEffect(() => {
    const updateMaxWidth = () => {
      if (window.innerWidth > 1300) {
        setMaxWidth('45vh');
      } else {
        setMaxWidth('35vh');
      }
    };

    updateMaxWidth();
    window.addEventListener('resize', updateMaxWidth);

    return () => {
      window.removeEventListener('resize', updateMaxWidth);
    };
  }, []);

  return maxWidth;
};

export const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 3,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.025,
    minSpeed: 0.01,
    dragControl: true,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const vbColors = ['#FF5733', '#FFC300', '#28B463', '#8E44AD', '#3498DB'];
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = vbColors[Math.floor(Math.random() * vbColors.length)];
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();
  const maxWidth = useResponsiveMaxWidth();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'dark')
    );
  }, [data, theme]);

  return (
    // @ts-expect-error: Should expect string
    <Cloud
      {...cloudProps}
      canvasProps={{
        style: { maxWidth },
      }}
    >
      <>{renderedIcons}</>
    </Cloud>
  );
}
