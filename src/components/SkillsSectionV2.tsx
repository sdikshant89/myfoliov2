import { Timeline } from '@/components/ui/timeline';
import contentJson from '@/data/workEx.json';

type content = {
  title: string;
  description: string;
  org: string;
  orgLink: string;
  src: string;
  skills: string[];
};

function createJobDesc(itemIndex: number) {
  const contentArr: content[] = contentJson;
  const item = contentArr[itemIndex];
  return (
    <>
      <div className="relative">
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
        <p className="text-base sm:text-md dark:text-slate-300 text-blue-600 mt-4">
          {item.description}
        </p>
        <div className="pt-4 justify-start items-center">
          {item.skills.map((skill, skillIndex) => (
            <button
              disabled
              key={`${item.title}-skill-${skillIndex}`}
              className="px-3 py-1 mr-2 mt-2 rounded-lg border border-gray-600 dark:text-white text-black"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </>
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
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
