import React from 'react';
import Typewriter from "typewriter-effect";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex-1 w-full flex flex-col">
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <h1 className="text-primary-light lg:text-4xl md:text-3xl text-2xl tracking-widest font-thin text-center">
          Hello, 👋 I am Ankan Bhattacharya, a
        </h1>
        <h1 className="text-transparent lg:text-8xl md:text-6xl text-4xl  bg-clip-text bg-gradient-to-r from-primary-yellow via-vermillion to-purple mt-4 py-2 tracking-widest font-thin">
          <Typewriter
            options={{
              strings: [
                "Developer",
                "Engineer",
                "Gamer"
              ],
              autoStart: true,
              loop: true
            }}
          />
        </h1>
      </div>
      <div className="w-full flex items-center justify-center px-2 py-1 mb-10">
        <button>
          <IoIosArrowDown size={30} className="text-vermillion hover:text-purple transition-all ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default Hero;