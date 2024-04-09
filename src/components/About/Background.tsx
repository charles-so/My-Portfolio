import React from 'react';

const introHeader: string = "Background 🇭🇰";
const introMessage1: string = "I'm a fun-loving, easy-going, and disciplined young adult from Hong Kong, currently residing in Perth, Western Australia. I'm on a graduation visa with full working rights for five years (until 2029) and intend to settle here afterward. I completed my Bachelor of Science in Computer Science at The University of Western Australia in December 2023, with a minor in Data Science and additional elective courses in Finance. The aim was to grasp the fundamentals of statistics and budgeting, and to enhance collaboration with individuals from diverse backgrounds.";
const introMessage2: string = "During my academic journey, I actively participated in various computer clubs and societies such as UWA Competition Society, Coder for Causes, Data Science Club, and other sports clubs to broaden my exposure to computer technologies and engage with people from different backgrounds. In my second year, I volunteered as a UniMentor, aiding the integration of first-year students into university life by sharing my experiences and connections with these clubs. In addition to theoretical learning, I pursued internships to gain hands-on experience with real clients. In my first internship, I contributed to designing and developing the frontend interface of an autonomous bus. In the second internship, I collaborated with a team to develop a CRM (Customer Relationship Management) system using Microsoft PowerApps with Azure Database, deploying it on SharePoint.";
const introMessage3: string = "Beyond academia, I pursued self-learning through Udemy courses and other free online tutorials, acquainting myself with advanced technologies for application development and deployment. This enabled me to create deployable products and services for my peers.";

const Background: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-start justify-center md:justify-between gap-10 lg:gap-10 md:gap-10 px-10">
      <div className="">
        <h2 className="text-3xl font-bold mb-6">{introHeader}</h2>
        <p className="text-lg mb-4">{introMessage1}</p>
        <p className="text-lg mb-4">{introMessage2}</p>
        <p className="text-lg">{introMessage3}</p>
      </div>
    </div>
  );
};

export default React.forwardRef(Background);
