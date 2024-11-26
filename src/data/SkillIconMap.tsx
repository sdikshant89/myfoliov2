import AgileIcon from '@/icons/skills/agile.png';
import DotNetIcon from '@/icons/skills/dotnet.png';
import ExpIcon from '@/icons/skills/express.png';
import HibernateIcon from '@/icons/skills/hibernate.png';
import JavaIcon from '@/icons/skills/java.png';
import MongoDBIcon from '@/icons/skills/mongodb.png';
import NodeIcon from '@/icons/skills/node.png';
import PostGreIcon from '@/icons/skills/postgre.png';
import PyIcon from '@/icons/skills/py.png';
import TestIcon from '@/icons/skills/testingg.png';
import UnityIcon from '@/icons/skills/unity.png';
import VSCodeIcon from '@/icons/skills/visualStudio.png';
import VueIcon from '@/icons/skills/Vue.png';
import type { StaticImageData } from 'next/image';
import CSSIcon from '../icons/skills/css.png';
import ExtIcon from '../icons/skills/extjs.png';
import FigmaIcon from '../icons/skills/figma.png';
import GitIcon from '../icons/skills/git.png';
import HTMLIcon from '../icons/skills/html.png';
import JiraIcon from '../icons/skills/jira.png';
import JSIcon from '../icons/skills/js.png';
import MatlabIcon from '../icons/skills/matlab.png';
import NextIcon from '../icons/skills/nextjs.png';
import ReactIcon from '../icons/skills/react.png';
import ReduxIcon from '../icons/skills/redux.png';
import SpIcon from '../icons/skills/springBoot.png';
import TailwindIcon from '../icons/skills/Tailwind.png';
import TypeIcon from '../icons/skills/typescript.png';

export const skillIconMap: Record<string, StaticImageData> = {
  //Frontend
  NextJs: NextIcon,
  ReactJs: ReactIcon,
  Redux: ReduxIcon,
  VueJs: VueIcon,
  Typescript: TypeIcon,
  Figma: FigmaIcon,
  HTML5: HTMLIcon,
  TailwindCSS: TailwindIcon,
  CSS: CSSIcon,
  ExtJs: ExtIcon,

  //Backend
  Express: ExpIcon,
  NodeJs: NodeIcon,
  SpringBoot: SpIcon,
  'JPA/Hibernate': HibernateIcon,
  'C#Net': DotNetIcon,
  Java: JavaIcon,
  Junit: TestIcon,
  Postgresql: PostGreIcon,
  MongoDB: MongoDBIcon,

  //Misc
  Javascript: JSIcon,
  Python: PyIcon,
  Unity: UnityIcon,
  Git: GitIcon,
  Agile: AgileIcon,
  Scrum: AgileIcon,
  VisualStudio: VSCodeIcon,
  MATLAB: MatlabIcon,
  Jira: JiraIcon,
};
