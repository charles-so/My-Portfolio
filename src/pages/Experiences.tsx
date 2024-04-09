import React from 'react';
import Navbar from '../components/common/Navbar';
import ExpEdu from '../components/Experience/ExpEdu';

const ExperiencesPage: React.FC = () => {
  return (
    <div className="max-w-screen-lg container mx-auto flex gap-20 flex-col pb-20">
      <Navbar />
      <ExpEdu />
    </div>
  );
};

export default ExperiencesPage;