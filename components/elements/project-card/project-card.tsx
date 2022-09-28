import React from "react";
import { Project } from "types/project";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const { project } = props;

  const onLivePreviewClick = () => {
    if(project.live){
        window.open(
            project.live,
            "_blank"
        );
    }
  };

  const onFrontendCodeClick = () => {
    if(project.frontend_code){
      window.open(
        project.frontend_code,
        "_blank"
      );
    }
  };

  return (
    <div
      className="p-[2px] bg-gradient-to-r from-primary-yellow via-vermillion to-purple rounded-md m-2 flex"
    >
      <div className="bg-primary-dark p-2 rounded-md flex flex-col items-center justify-between lg:max-w-[280px] md:max-w-[264px] sm:max-w-[232px] max-w-[264px]">
        <div className="lg:w-60 lg:h-60 md:w-56 md:h-56 sm:w-48 sm:h-48 w-56 h-56 flex items-center justify-center relative rounded-md">
          <Image
            src={project.image}
            alt=""
            objectFit="contain"
            layout="fill"
            className="rounded-md"
            priority={true}
          />
        </div>

        <h1 className="mt-2 text-transparent bg-clip-text bg-gradient-to-r text-center from-primary-yellow to-vermillion lg:text-2xl md:text-xl text-lg tracking-wider">
          {project.title}
        </h1>

        <p className="mt-2 text-primary-light/80 text-start md:text-lg text-base md:font-light">
            {project.small_description}
        </p>

        <div className="w-full flex-1 flex flex-col justify-end">
            <div className="w-full flex flex-wrap mt-1">  
                {
                    project.technologies.map((tech, index) => (
                        <div key={index} className="p-1 border-[1px] rounded-sm m-1 border-vermillion bg-vermillion/50 flex items-center justify-center hover:cursor-pointer">
                            <p className="text-xs tracking-wider text-primary-light/80">
                                {tech}
                            </p>
                        </div>
                    ))
                }
            </div>

            <div className="w-full flex items-center justify-center">
              <button className="flex justify-center items-center p-1 border-2 border-vermillion mt-2 rounded-md hover:shadow-[0_1px_12px_2px_rgba(199,27,219,0.7)]" onClick={onFrontendCodeClick}>
                <BsGithub color="#FF5968" size={20} />
              </button>

              <button className="w-full flex-1 items-center justify-center mt-2 ml-1 py-1 px-2 rounded-md bg-gradient-to-r from-primary-yellow to-vermillion text-primary-dark hover:bg-gradient-to-l tracking-widest md:text-lg text-base transition-all ease-in-out delay-1000" onClick={onLivePreviewClick}>
                  LIVE
              </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
