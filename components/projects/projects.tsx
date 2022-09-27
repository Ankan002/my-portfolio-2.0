import { ProjectCard, SectionHeader } from 'components/elements';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { projectsAtom } from 'atoms/projects-atom';
import { Project } from 'types/project';

const Projects = () => {

  const projects = useRecoilValue<Array<Project>>(projectsAtom);

  return (
    <div className="px-5 py-3 flex flex-col font-manrope items-center">
        <SectionHeader title="Projects" />

        <div className="md:w-4/5 w-full flex flex-wrap justify-center mt-5">

          {
            projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))
          }
          
        </div>
    </div>
  );
};

export default Projects;