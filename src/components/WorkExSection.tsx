import contentJson from '../data/workEx.json';
import { StickyScroll } from './ui/sticky-scroll-reveal';

function WorkExSection({ parentRef }: { parentRef: any }) {
  type content = {
    title: string;
    description: string;
    org: string;
    orgLink: string;
    src: string;
    skills: string[];
  };
  const content: content[] = contentJson;

  return (
    // <div className="min-h-[60rem] md:h-[40rem] w-full rounded-md flex flex-col overflow-hidden mx-auto py-10 md:py-0">
    //   <div className="h-3/10 pt-60">
    //     <h1 className="text-left pl-8 text-3xl md:text-6xl font-bold">Hello</h1>
    //   </div>
    //   <div className="h-7/10">
    <StickyScroll content={content} />
    //   </div>
    // </div>
  );
}

export default WorkExSection;
