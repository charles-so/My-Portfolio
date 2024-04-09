import React from 'react';

interface Skill {
  name: string;
  proficiency: number;
  description: string;
}

const skillsList: Skill[] = [
  { name: "HTML", proficiency: 5, description: "Proficient in creating structured and accessible web content with semantic markup. Experienced in integrating multimedia elements and ensuring cross-browser compatibility." },
  { name: "CSS", proficiency: 5, description: "Strong understanding of CSS for crafting visually appealing and responsive web interfaces across diverse devices and screen sizes." },
  { name: "Python", proficiency: 5, description: "Extensive proficiency in Python, specializing in data analysis and manipulation using libraries such as NumPy and Pandas. Well-versed in backend web frameworks." },
  { name: "JavaScript", proficiency: 4, description: "Experienced in frontend and backend logic implementation including DOM manipulation, event handling, and basic asynchronous operations." },

  { name: "React.js", proficiency: 3, description: "Familiar with React's component-based architecture and virtual DOM for building interactive user interfaces. Continuously learning to leverage its full potential." },
  { name: "Tailwind CSS", proficiency: 4, description: "Skilled in Tailwind CSS for efficient and scalable styling. Utilizes its utility-first approach to streamline development and ensure maintainable code." },
  { name: "TypeScript", proficiency: 3, description: "Proficient in using TypeScript for tasks typically performed with JavaScript. Currently expanding expertise in type declarations for enhanced code robustness." },
  { name: "Django / Flask", proficiency: 4, description: "Familiar with Django and Flask for backend development, including handling requests, user authentication, database management, and more." },
  { name: "Docker", proficiency: 4, description: "Proficient in Docker for containerizing applications, managing dependencies, and optimizing deployment workflows for enhanced efficiency and consistency." },
  { name: "C/C++", proficiency: 3, description: "Experienced in developing high-performance applications and systems software with C/C++, leveraging its low-level capabilities for efficient memory management and optimal performance." },
  { name: "Java", proficiency: 3, description: "Moderately skilled in Java, with a strong understanding of syntax and object-oriented programming principles including inheritance, polymorphism, and encapsulation." },
  // Add more skills as needed
];

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxRating = 5;
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-1 text-yellow-500 ${index < rating ? 'fill-current' : 'stroke-current'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="px-10">
      <h2 className="text-3xl font-semibold mb-4">My Skills 🍥</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {skillsList.map((skill, index) => (
          <div key={index} className="py-4 border rounded-md border-transparent">
            <div className="grid gap-2">
              <div className="grid grid-cols-auto-1fr">
                <span className="text-lg font-semibold">{skill.name}</span>
                <StarRating rating={skill.proficiency} />
              </div>
              <p className="text-lg text-gray-600">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
