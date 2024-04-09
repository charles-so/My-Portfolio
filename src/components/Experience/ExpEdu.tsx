import Timeline from './Timeline';

const ExpEdu = () => {
  const educationItems = [
    {
      date: "Jan 2017",
      title: "Monash College",
      description: "Foundation Year Program"
    },
    {
      date: "Feb 2018",
      title: "Curtin University",
      description: "Bachelor of Science (Occupational Therapy) (Honours) - unfinished",
    },
    {
      date: "Feb 2021",
      title: "University of Western Australia",
      description: "Bachelor of Science (Computer Science)",
      link: 'https://nextcloud.charleso.site/s/FrKPApMeP5X8tPT'
    }
  ];

  const experienceItems = [
    {
      date: "Jun 2022 - Nov 2022",
      title: "Software Developer - nUWAy Autonomous Shuttle Bus (The REV Project)",
      description: "Improved bus GUI with added features, utilizing React.js and ROS libraries, and promoted teamwork through collaboration with multiple project groups",
    },
    {
      date: "Nov 2022 - Dec 2022",
      title: "Digital Industry Project Completer - WACE Global Challenge",
      description: "Worked with industry experts to grasp the impact of greenhouse issues on software trends, analyzed academic research findings using data analytics for strategy recommendations, and honed project management and collaboration skills to ensure top-notch team performance and deliverables.",
      link: "https://badgr.com/public/assertions/m-JODZzBRXCcFj1KHhJYjA?identity__email=23199336%40student.uwa.edu.au"
    },
    {
      date: "Nov 2022 - Jun 2023",
      title: "UniMentor - The University of Western Australia",
      description: "Organized networking sessions for mentees, underwent mentorship training emphasizing active listening and empathy, and acted as aliaison for students to access university services and guidance.",
    },
    {
      date: "Jun 2023 - Nov 2023",
      title: "Software Developer - Western Australian Marine Science Institution (WAMSI)",
      description: "Implemented an integrated CRM system using Microsoft Data-verse and PowerApp on SharePoint, enhancing functionality and user experience while delivering timely outcomes through Agile methodology with IT collaboration.",
    }
  ];

  return (
    <div className='flex flex-col gap-10'>
      <Timeline sectionTitle="Experience" items={experienceItems} />
      <Timeline sectionTitle="Education" items={educationItems} />
    </div>
    
  );
};

export default ExpEdu;
