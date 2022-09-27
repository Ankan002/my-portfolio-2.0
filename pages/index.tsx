import type { NextPage } from "next";
import { CustomHead } from "components/elements";
import { Navbar, Hero, AboutMe, Skills, Projects } from "components";
import { getGraphQLClient } from "config/graphql-client";
import { allTestimonialsQuery, allSkillsQuery, profileQuery, projectQuery } from "query";
import { Testimonial } from "types/testimonial";
import { Skill } from "types/skill";
import { Project } from "types/project";
import { useEffect } from "react";
import { Profile } from "types/profile";
import { useSetRecoilState } from "recoil";
import { DecodedSkill, DecodedProject } from "types/query-response";
import { profileAtom, skillsAtom, testimonialsAtom } from "atoms";

interface Props {
  testimonials: Array<Testimonial>;
  skills: Array<Skill>;
  profile: Profile;
  projects: Array<Project>;
}

const Home: NextPage<Props> = (props) => {

  const setProfile = useSetRecoilState<Profile>(profileAtom);
  const setSkils = useSetRecoilState<Array<Skill>>(skillsAtom);
  const setTestimonials = useSetRecoilState<Array<Testimonial>>(testimonialsAtom);

  useEffect(() => {
    console.log(props);

    const { testimonials, skills, profile } = props;

    if(profile){
      setProfile(profile);
    }

    if(testimonials){
      setTestimonials(testimonials);
    }

    if(skills){
      setSkils(skills);
    }
  }, [props]);

  return (
    <div>
      <CustomHead title="Ankan" />

      <main className="min-h-screen w-full flex flex-col bg-primary-dark font-manrope">
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="w-full flex-grow flex flex-col">
            <Hero />
          </div>
        </div>

        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export const getStaticProps = async() => {

  const graphQLClient = getGraphQLClient();

  const profileData = await graphQLClient.request(profileQuery);
  const testimonialsData = await graphQLClient.request(allTestimonialsQuery);
  const skillsData = await graphQLClient.request(allSkillsQuery);
  const projectsData = await graphQLClient.request(projectQuery);

  const aboutMe = {
    ...profileData.profile,
    profile_picture: profileData.profile.profile_picture?.url
  }

  const skills = skillsData.skills.map((skill: DecodedSkill) => {
    return {
      ...skill,
      image: skill.image.url
    };
  });

  const projects = projectsData.projects.map((project: DecodedProject) => {
    return {
      ...project,
      image: project.image.url
    };
  });

  return {
    props: {
      testimonials: testimonialsData?.testimonials,
      skills,
      profile: aboutMe,
      projects
    },
    revalidate: 12 * 60 * 60
  }
}

export default Home;
