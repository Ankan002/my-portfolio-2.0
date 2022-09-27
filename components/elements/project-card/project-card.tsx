import React from "react";
import { Project } from "types/project";
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
        )
    }
  }

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
          />
        </div>

        <h1 className="mt-2 text-transparent bg-clip-text bg-gradient-to-r text-center from-primary-yellow to-vermillion lg:text-2xl md:text-xl sm:text-lg text-base tracking-wider">
          {project.title}
        </h1>

        <p className="mt-2 text-primary-light/80 text-center lg:text-lg md:text-base md:font-light text-xs">
            {project.small_description}
        </p>

        <div className="w-full flex-1 flex flex-col justify-end">
            <button className="w-full flex items-center justify-center mt-2 py-1 px-2 rounded-md bg-gradient-to-r from-primary-yellow to-vermillion text-primary-dark hover:bg-gradient-to-l tracking-widest lg:text-lg md:text-base text-xs" onClick={onLivePreviewClick}>
                LIVE
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
