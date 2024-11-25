import mySkills from '@/data/techSkills.json';
import VueIcon from '@/icons/skills/Vue.png';
import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import CSSIcon from '../icons/skills/css.png';
import ExtIcon from '../icons/skills/extjs.png';
import HTMLIcon from '../icons/skills/html.png';
import JiraIcon from '../icons/skills/jira.png';
import JSIcon from '../icons/skills/js.png';
import NextIcon from '../icons/skills/nextjs.png';
import ReactIcon from '../icons/skills/react.png';
import TailwindIcon from '../icons/skills/Tailwind.png';
import TypeIcon from '../icons/skills/typescript.png';
import { IconCloud } from './ui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'java',
  'react',
  'html5',
  'css3',
  'cplusplus',
  'mysql',
  'nodedotjs',
  'express',
  'python',
  'vuedotjs',
  'nextdotjs',
  'postgresql',
  'git',
  'jira',
  'visualstudiocode',
  'dotnet',
  'springboot',
  'junit5',
  'unity',
  'figma',
];

const skillIconMap: Record<string, StaticImageData> = {
  NextJs: NextIcon,
  ReactJs: ReactIcon,
  VueJs: VueIcon,
  ExtJs: ExtIcon,
  Typescript: TypeIcon,
  Javascript: JSIcon,
  HTML5: HTMLIcon,
  TailwindCSS: TailwindIcon,
  CSS: CSSIcon,
};

function getSkillIcon(name: string): StaticImageData {
  return skillIconMap[name] || JiraIcon;
}

function SkillsSection() {
  type nestedSkillArrType = {
    iconName: string;
    hyperlink: string;
  };

  type mySkillsType = {
    skillHead: string;
    IconsArray: nestedSkillArrType[];
  };
  const mySkillsArry: mySkillsType[] = mySkills;

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      id="skillSection"
      className="max-h-[70rem] w-full rounded-md flex flex-col item-center justify-center mx-auto mt-20 bg-gradient-to-b from-[rgb(24,24,27)] to-black"
    >
      <div className="pt-20">
        <h3 className="text-center text-gray-400 text-lg md:text-xl font-bold">
          Skillset
        </h3>
        <h1 className="pt-2 text-center text-4xl md:text-6xl font-bold">
          My Technical Skills
        </h1>
        <p className="mt-4 max-w-3xl text-center sm:text-lg text-md mx-auto font-medium text-gray-500">
          With a solid foundation in software development, I’m ready to manage
          full-scale projects. From intuitive frontends to reliable backends, I
          tackle challenges with skill and dedication, delivering the best at
          every stage.{' '}
        </p>
      </div>
      <div className="flex my-10 mx-8 items-center sm:justify-evenly justify-start mb-28">
        <div className="sm:w-1/2 flex flex-col">
          {mySkillsArry.map((item, index) => (
            <div key={`skillset-${index}`} className="my-2">
              <h1 className="py-2 text-start text-2xl md:text-3xl font-semibold text-gray-400">
                {item.skillHead}
              </h1>
              <div className="flex flex-wrap justify-start items-center gap-x-1 gap-y-2">
                {item.IconsArray.map((childitem, index) => (
                  <a
                    href={childitem.hyperlink}
                    key={`icon-${index}-${childitem.iconName}`}
                  >
                    <button className="rounded-lg border-2 border-gray-600 text-gray-400 group/modal-btn flex justify-center  items-center px-2 py-2 relative overflow-hidden hover:scale-125 hover:border-blue-400 transition-all duration-300">
                      <Image
                        src={getSkillIcon(
                          childitem.iconName.replace(/[_\.]/g, '')
                        )}
                        alt="Python"
                        className="-translate-x-40 group-hover/modal-btn:translate-x-0 w-7 h-6 transition duration-500 flex items-center justify-center absolute inset-auto"
                      />
                      <span className="group-hover/modal-btn:translate-x-40 transition duration-500 text-white text-sm sm:text-base">
                        {childitem.iconName.replace('_', ' ')}
                      </span>
                    </button>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsSection;
