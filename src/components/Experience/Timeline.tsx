import React from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  link?: string;
}

interface TimelineProps {
  sectionTitle: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ sectionTitle, items }) => {
  return (
    <div className="flex flex-col items-start justify-center md:justify-between gap-10 lg:gap-10 md:gap-10 px-10">
      <h2 className="text-3xl font-bold mb-4">{sectionTitle}</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {items.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border rounded-lg hover:bg-blue-500 hover:text-white">
                View Certificate
                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
