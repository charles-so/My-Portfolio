import React, { useState } from 'react';
import myPorfolio from '../../assets/images/myporfolio.jpeg';
import Homelab from '../../assets/images/proxmox-server.jpeg';
import jackyWebsite from '../../assets/images/jacky-website.jpeg';
import superMario from '../../assets/images/super-mario-bros.jpeg';
import finderWebsite from '../../assets/images/finder.jpeg';

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  sourceCodeUrl: string;
  liveDemoUrl: string;
  description: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1 - My Porfolio (Current)',
    imageUrl: myPorfolio,
    sourceCodeUrl: 'https://github.com/charles-so/My-Portfolio',
    liveDemoUrl: 'https://charleso.site',
    description: ['📌 My personal website',
      '✅ Developed in React.js (Typescript) and Node.js',
      '✅ Styled in Tailwindcss',
      '✅ Building Components with useState and React Hooks',
      '✅ SMTP protocol setup with Node.js',
      '✅ Deploy with Docker for portability and scalability'],
  },
  {
    id: 2,
    title: 'Project 2 - HomeLab (Ongoing)',
    imageUrl: Homelab,
    sourceCodeUrl: 'none',
    liveDemoUrl: 'none',
    description: ['📌 Home server powered by Proxmox.',
      '✅ Virtulized router (pfSense) with VLANs',
      '✅ Basic firewall rules and port forwarding',
      '✅ Reverse Proxy',
      '✅ Automated backup and update',
      '✅ Redundency for data integrity (RAID1)',
      '❌ Source code and live demo are unavailable. Contact me to learn more!',],
  },
  {
    id: 3,
    title: 'Project 3 - Personal eCommerce',
    imageUrl: jackyWebsite,
    sourceCodeUrl: 'https://github.com/charles-so/Jackie-Portfolio-eCommerce',
    liveDemoUrl: 'https://jktradings.charleso.site',
    description: ['📌 A dynamic website serves as a hub for managing appointments with mentees and selling specialised notion templates for a friend pursuing a Master of Finance at UWA.',
      '✅ Developed in Django',
      '✅ Stripe payment gateway integration for secure online transactions',
      '✅ Automated scheduling system (Cal.com) for seamless appointment management with email notification integrated with Google Calendar and Google Meet sync',
      '✅ SMTP protocol setup for contact functionality',
      '✅ Deploy with Docker for portability and scalability'],
  },
  {
    id: 4,
    title: 'Project 4 - Q Learning Super Mario Bro Agent',
    imageUrl: superMario, // Use local image
    sourceCodeUrl: 'https://github.com/charles-so/SuperMarioBros-AI-Strategies',
    liveDemoUrl: 'none',
    description: ['📌 Implemented combined Q learning and rule based AI strategies for Super Mario Bros game.',
      '✅ Developed in Python',
      '✅ Utitlized OpenCV for computer vision',
      '✅ Hand implemented Q learning rules and tables',
      '❌ Currently no live demo, build is required (training data and guides are provided on the Github)',
    ],
  },
  {
    id: 5,
    title: 'Project 5 - Matcher-Maker Online Dating Site',
    imageUrl: finderWebsite, // Use local image
    sourceCodeUrl: 'https://github.com/EdiFoo/Matcher-Maker',
    liveDemoUrl: 'https://finder.charleso.site',
    description: ['📌 A responsive website for user matchmaking through chat rooms and subsequent connections based on mutual interest',
      '✅ Developed in Flask',
      '✅ Implemented flask socketIO to dynamically create chat rooms',
      '✅ Model for storing chat logs and user data',
    ],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`border border-grey border-opacity-50 rounded-lg ${isHovered ? 'blur-sm' : 'blur-none'} object-cover w-full h-48`}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 rounded-lg">
          <div className="text-white text-center">
            <div className="flex justify-start mt-2"> {/* Changed justify-center to justify-start */}
              {project.sourceCodeUrl !== 'none' ? (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-white font-bold hover:underline"
                >
                  Source Code
                </a>
              ) : (
                <span className="mr-2 text-white font-bold line-through">
                  Source Code
                </span>
              )}
              {project.liveDemoUrl !== 'none' ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:underline"
                >
                  Live Demo
                </a>
              ) : (
                <span className="text-white font-bold line-through">
                  Live Demo
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-1">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <ul className="list-disc ml-6">
          {project.description.map((point, index) => (
            <li key={index} className="text-gray-600">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectView: React.FC = () => (
  <div className="px-10 md:px-20 flex justify-center">
    <div className="flex">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectView;
