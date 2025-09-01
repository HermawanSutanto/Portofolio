
import React from 'react';
import { PROJECTS } from '../constants';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Proyek Unggulan Saya">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
