import type { NextPage } from "next";
import { CustomHead } from "components/elements";
import { Navbar } from "components/navbar";

const Home: NextPage = () => {
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

export default Home;
