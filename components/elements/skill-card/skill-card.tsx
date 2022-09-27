import React from "react";
import { Skill } from "types/skill";
import Image from "next/image";

interface Props {
  skill: Skill;
}

const SkillCard = (props: Props) => {
  const { skill } = props;

  return (
    <div
      className="p-2 bg-secondary-dark border-2 rounded border-primary-yellow/40 hover:border-vermillion hover:cursor-pointer transition-all ease-in-out m-1 flex items-center justify-center relative hover:shadow-[0_1px_12px_2px_rgba(199,27,219,0.7)]"
      key={skill.id}
    >
      <Image src={skill.image} alt="" height={80} width={80} />
      <div className="absolute bg-primary-dark/90 opacity-0 hover:opacity-100 w-full h-full justify-center items-center rounded-xl p-2 flex text-xs">
        <p className="text-center bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow via-vermillion to-purple font-manrope break-words text-lg">{skill.name}</p>
      </div>
    </div>
  );
};

export default SkillCard;
