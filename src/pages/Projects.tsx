import React from 'react';
import Navbar from '../components/common/Navbar';
import ProjectView from '../components/Project/ProjectView'

const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-screen-lg container mx-auto flex gap-20 flex-col pb-20">
      <Navbar />
      <ProjectView />
    </div>

  );
};

export default ProjectsPage;