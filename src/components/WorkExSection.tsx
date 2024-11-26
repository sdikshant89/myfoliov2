import contentJson from '../data/workEx.json';
import { StickyScroll } from './ui/sticky-scroll-reveal';

function WorkExSection() {
  type content = {
    title: string;
    description: string;
    org: string;
    orgLink: string;
    src: string;
    skills: string[];
  };
  const content: content[] = contentJson;

  return <StickyScroll content={content} />;
}

export default WorkExSection;
