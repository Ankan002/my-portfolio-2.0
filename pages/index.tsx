import type { NextPage } from "next";
import { CustomHead } from "components/elements";
import { Navbar } from "components/navbar";
import { getGraphQLClient } from "config/graphql-client";
import { allTestimonialsQuery } from "query/testimonials";
import { Testimonial } from "types/testimonial";
import { useEffect } from "react";

interface Props {
  testimonials: Array<Testimonial>;
}

const Home: NextPage<Props> = (props) => {

  useEffect(() => {
    console.log(props.testimonials);
  }, [props])

  return (
    <div>
      <CustomHead title="Ankan" />

      <main className="min-h-screen w-full flex flex-col bg-primary-dark font-manrope">
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="w-full flex-grow">

          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async() => {

  const graphQLClient = getGraphQLClient();

  const testimonialsData = await graphQLClient.request(allTestimonialsQuery);

  return {
    props: {
      testimonials: testimonialsData.testimonials,
    },
    revalidate: 12 * 60 * 60
  }
}

export default Home;
