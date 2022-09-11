import type { NextPage } from "next";
import { CustomHead } from "components/elements";
import { Navbar, Hero, AboutMe } from "components";
import { getGraphQLClient } from "config/graphql-client";
import { allTestimonialsQuery, allSkillsQuery, profileQuery } from "query";
import { Testimonial } from "types/testimonial";
import { Skill } from "types/skill";
import { useEffect } from "react";
import { Profile } from "types/profile";
import { useSetRecoilState } from "recoil";
import { profileAtom, skillsAtom, testimonialsAtom } from "atoms";

interface Props {
  testimonials: Array<Testimonial>;
  skills: Array<Skill>;
  profile: Profile;
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
      </main>
    </div>
  );
};

export const getStaticProps = async() => {

  const graphQLClient = getGraphQLClient();

  const profileData = await graphQLClient.request(profileQuery);
  const testimonialsData = await graphQLClient.request(allTestimonialsQuery);
  const skillsData = await graphQLClient.request(allSkillsQuery);

  const aboutMe = {
    ...profileData.profile,
    profile_picture: profileData.profile.profile_picture?.url
  }

  return {
    props: {
      testimonials: testimonialsData?.testimonials,
      skills: skillsData?.skills,
      profile: aboutMe
    },
    revalidate: 12 * 60 * 60
  }
}

export default Home;
