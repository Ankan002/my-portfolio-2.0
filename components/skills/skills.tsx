import { SectionHeader } from "components/elements";
import React from "react";
import Image from "next/image";
import { Skill } from "types/skill";
import { skillsAtom } from "atoms";
import { useRecoilValue } from "recoil";
import {SkillCard} from "components/elements";

const Skills = () => {
  const skills = useRecoilValue<Array<Skill>>(skillsAtom);

  return (
    <div className="px-5 py-3 flex flex-col font-manrope items-center">
      <SectionHeader title="Skills" />

      {skills.length > 0 && (
        <div className="lg:w-1/3 sm:w-2/3 w-full mt-5 flex flex-wrap justify-center items-center">
          {
            skills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))
          }
          
        </div>
      )}
    </div>
  );
};

export default Skills;
