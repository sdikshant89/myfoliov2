import { Timeline } from '@/components/ui/timeline';
import { skillIconMap } from '@/data/SkillIconMap';
import contentJson from '@/data/workEx.json';
import ExIcon from '@/icons/exclamation.png';
import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type content = {
  title: string;
  description: string;
  org: string;
  orgLink: string;
  src: string;
  skills: nestedSkillArrType[];
};

type nestedSkillArrType = {
  iconName: string;
  hyperlink: string;
};

function getSkillIcon(name: string): StaticImageData {
  return skillIconMap[name] || ExIcon;
}

function createJobDesc(itemIndex: number) {
  const contentArr: content[] = contentJson;
  const item = contentArr[itemIndex];
  return (
    <motion.div
      initial={{ opacity: 0.0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 3,
        type: 'spring',
        bounce: 0.5,
      }}
      className="relative pr-8 md:pr-10"
    >
      <h1 className="text-2xl font-bold dark:text-white text-black">
        {item.title}
      </h1>
      <h3 className="text-lg font-semibold dark:text-blue-500 text-red-500">
        <a
          href={item.orgLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {item.org}
        </a>
      </h3>
      <p className="text-md dark:text-slate-300 text-blue-600 mt-4">
        {item.description}
      </p>
      <div className="pt-4 w-full flex flex-wrap justify-start items-center">
        {item.skills.map((skillItem, skillIndex) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={skillItem.hyperlink}
            className="mx-6 my-3"
          >
            <Image
              src={getSkillIcon(skillItem.iconName.replace(/[_\.]/g, ''))}
              alt="Python"
              className="w-6 h-6 hover:w-8 hover:h-8 transition-all duration-300"
            />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export function WorkExSectionV2() {
  const data = [
    {
      title: 'Present - 2024',
      content: createJobDesc(0),
    },
    {
      title: '2023 - 2022',
      content: createJobDesc(1),
    },
    {
      title: '2022 - 2021',
      content: createJobDesc(2),
    },
  ];
  return (
    <div className="w-full" id="WorkExSection">
      <Timeline data={data} />
    </div>
  );
}
