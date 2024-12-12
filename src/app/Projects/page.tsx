'use client';
import { HeroParallax } from '@/components/ui/hero-parallax';

export default function HeroParallaxDemo() {
  return (
    <>
      <HeroParallax products={products} />
      <h1 className="h-52 w-full flex items-center justify-center font-bold text-3xl">
        More Soon!
      </h1>
    </>
  );
}
const products = [
  {
    title: 'Roll a Ball',
    link: 'https://github.com/sdikshant89/RollaBall',
    thumbnail: [
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963707/ncdgznb9vmkwz2nnijdt.png',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963702/od5ssdeipq6zbknqh182.png',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963700/gvo8a7jd8q6faqmwk7mw.png',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963696/sxm88zkqo0lenjzukgsk.png',
    ],
  },
  {
    title: 'Render IT',
    link: 'https://github.com/sdikshant89/renderit',
    thumbnail: [
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963696/qmnbxmcqgdso2cmcrmf7.png',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963693/m1bagkua79zenutfzipx.png',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963691/gvxefnq7axs5w4dyimhi.png',
    ],
  },
  {
    title: 'Hybrid Image Compression',
    link: 'https://github.com/sdikshant89/Hybrid-Image-Compression',
    thumbnail: [
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963686/ddvchk3vdzo9peek5pre.png',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963682/pjtne3m5emxjfpjnlndy.png',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963680/qsgdldehfpedwv0dspe4.png',
    ],
  },
  {
    title: 'Historic Ornaments AR',
    link: 'https://github.com/sdikshant89/HistoricOrnaments/tree/main/MyARProject',
    thumbnail: [
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963677/pbvkzep21wkwocz5kwwk.jpg',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963683/ecx5ebnz3kkouqraixj2.jpg',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963683/rl6y1zpf5rnniuq7ycgs.jpg',
    ],
  },
  {
    title: 'VizCOVID-19',
    link: 'https://github.com/sdikshant89/Viz_Covid',
    thumbnail: [
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963682/gruhj7ttrxqecrij3uyj.png',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963680/almucmml5mfu9k6px5aq.png',
    ],
  },
  {
    title: 'Move Around Swipe',
    link: 'https://github.com/sdikshant89/MoveAroundSwipe',
    thumbnail: [
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963682/du6wsiryejreeztkzmgz.jpg',
      'https://res.cloudinary.com/dleeausik/image/upload/v1733963677/pbvkzep21wkwocz5kwwk.jpg',
    ],
  },
];
