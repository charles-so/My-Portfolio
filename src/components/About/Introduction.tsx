import React from 'react';
import ProfilePic from '../../assets/images/profile.jpg';

interface IntroductionProps {
  scrollToBackground: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ scrollToBackground }) => {
  const profilePicture: string = ProfilePic;
  const introHeader: string = "Hi 👋, I'm Charles";
  const introMessage: string =
    'I am a passionate software developer with a recent degree in computer science, specializing in areas such as computer networks, web development, and deployments.';

  return (
    <div className='flex flex-col items-center gap-32 pb-48'>
      <div className='flex flex-col lg:flex-row items-center justify-center md:justify-between gap-10 lg:gap-32 md:gap-10 px-10'>
        <div className='shrink-0'>
          <img
            src={profilePicture}
            alt='ProfilePic'
            className='rounded-full h-80 w-50'
          />
        </div>
        <div className='text-center lg:text-left'>
          <h2 className='text-3xl font-bold mb-4'>{introHeader}</h2>
          <p className='text-lg pb-5'>{introMessage}</p>
          <a
            href='https://nextcloud.charleso.site/s/Kf9RcRWnfx9PZnJ'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            View My Resume
          </a>
        </div>
      </div>
      <div>
        <div className='animate-bounce relative'>
          <div
            className='hover:bg-black hover:text-white hover:rounded-lg py-2 px-6'
            onClick={scrollToBackground}
          >
            <svg
              className='w-8 h-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
