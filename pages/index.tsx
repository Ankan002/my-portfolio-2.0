import type { NextPage } from "next";
import { CustomHead } from "components/elements";
import { Navbar, Hero } from "components";
import { getGraphQLClient } from "config/graphql-client";
import { allTestimonialsQuery, allSkillsQuery } from "query";
import { Testimonial } from "types/testimonial";
import { Skill } from "types/skill";
import { useEffect } from "react";

interface Props {
  testimonials: Array<Testimonial>;
  skills: Array<Skill>;
}

const Home: NextPage<Props> = (props) => {

  useEffect(() => {
    console.log(props);
  }, [props])

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
      </main>
    </div>
  );
};

export const getStaticProps = async() => {

  const graphQLClient = getGraphQLClient();

  const testimonialsData = await graphQLClient.request(allTestimonialsQuery);
  const skillsData = await graphQLClient.request(allSkillsQuery);

  return {
    props: {
      testimonials: testimonialsData?.testimonials,
      skills: skillsData?.skills
    },
    revalidate: 12 * 60 * 60
  }
}

export default Home;
