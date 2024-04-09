import React, { useRef } from 'react';
import Navbar from '../components/common/Navbar';
import Introduction from '../components/About/Introduction';
import Background from '../components/About/Background';
import Hobbies from '../components/About/Hobbies';
import Skills from '../components/About/Skills';

const AboutPage: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const scrollToBackground = () => {
    if (backgroundRef.current) {
      const backgroundElement = backgroundRef.current;
      const paddingTop = 50;
      const targetPosition = backgroundElement.getBoundingClientRect().top + window.pageYOffset - paddingTop;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-screen-lg container mx-auto flex flex-col gap-36 md:gap-36 lg:gap-60 pb-20">
      <Navbar />
      <div className='flex flex-col gap-40'>
        <Introduction scrollToBackground={scrollToBackground} />
        <Background ref={backgroundRef} />
        <Hobbies />
        <Skills />
      </div>
    </div>
  );
};

export default AboutPage;