'use client';
//import { Card } from './ui/skills-card';
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
      className="min-h-[80rem] md:min-h-[60rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto mt-20 bg-gradient-to-b from-[rgb(24,24,27)] to-black"
    >
      <div className="pt-28 z-30">
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
      <div className="flex w-full my-14 mx-16 items-center justify-between">
        <IconCloud iconSlugs={slugs} />
        {/* <Card
          title="Sheetal is Nisha"
          icon={
            <h2 className="font-semibold text-3xl text-orange-500">
              Languages and Frameworks
            </h2>
          }
        ></Card>
        <Card
          title="Nisha is Munni"
          icon={
            <h2 className="font-semibold text-3xl text-blue-500">Backend</h2>
          }
        ></Card>
        <Card
          title="Munni is Aditi"
          icon={
            <h2 className="font-semibold text-3xl text-yellow-500">Frontend</h2>
          }
        ></Card> */}
      </div>
    </motion.div>
  );
}

export default SkillsSection;
