import mySkills from '@/data/techSkills.json';
import { motion } from 'framer-motion';
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

function SkillsSection() {
  type mySkillsType = {
    skillHead: string;
    IconsArray: string[];
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
      className="max-h-[60rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto mt-20 bg-gradient-to-b from-[rgb(24,24,27)] to-black"
    >
      <div className="pt-28">
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
      <div className="flex my-14 mx-12 items-center justify-center">
        <div className="w-1/2 flex flex-col">
          {mySkillsArry.map((item, index) => (
            <div>
              <h1 className="pt-2 text-start text-2xl md:text-2xl font-bold">
                {item.skillHead}
              </h1>
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
