import React, { useState } from "react";
import Image from "next/image";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
// import Link from "next/link";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const onMobileNavToggleClick = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const onNavLinkClick = () => setIsOpen(false);

  return (
    <div className="w-full px-5 py-3 flex items-center justify-between relative">
      <div className="flex h-full items-center justify-center">
        <Image src="/logo.svg" width={40} height={40} alt="" />
        <h1 className="text-primary-light ml-1 text-2xl tracking-wider font-light">
          nkan
        </h1>
      </div>

      {/* <div
        className={`z-10 md:relative absolute flex-grow md:ml-5 md:h-full h-screen w-full left-0 top-0 md:flex md:flex-row md:items-center md:justify-end ${
          isOpen ? "flex" : "hidden"
        } flex-col items-center justify-center md:bg-transparent ${
          isOpen ? "bg-primary-dark" : "bg-transparent"
        } md:p-0 p-5`}
      >
        <p className="md:h-full md:mx-3 md:my-0 my-2 text-primary-light flex justify-center items-center lg:text-xl md:text-base text-2xl tracking-wider font-light hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary-yellow hover:via-vermillion hover:to-purple transition-all ease-in-out" onClick={onNavLinkClick}>
          <Link href="#achievements">Achievements</Link>
        </p>

        <p className="md:h-full md:mx-3 md:my-0 my-2 text-primary-light flex justify-center items-center lg:text-xl md:text-base text-2xl tracking-wider font-light hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary-yellow hover:via-vermillion hover:to-purple transition-all ease-in-out" onClick={onNavLinkClick}>
          <Link href="#technologies">Technologies</Link>
        </p>

        <p className="md:h-full md:mx-3 md:my-0 my-2 text-primary-light flex justify-center items-center lg:text-xl md:text-base text-2xl tracking-wider font-light hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary-yellow hover:via-vermillion hover:to-purple transition-all ease-in-out" onClick={onNavLinkClick}>
          <Link href="#projects">Projects</Link>
        </p>

        <p className="md:h-full md:mx-3 md:my-0 my-2 text-primary-light flex justify-center items-center lg:text-xl md:text-base text-2xl tracking-wider font-light hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary-yellow hover:via-vermillion hover:to-purple transition-all ease-in-out" onClick={onNavLinkClick}>
          <Link href="#testimonials">Testimonials</Link>
        </p>
      </div>

      {isOpen ? (
        <IoClose
          size={30}
          className="z-20 md:hidden text-purple"
          onClick={onMobileNavToggleClick}
        />
      ) : (
        <HiOutlineMenuAlt3
          size={30}
          className="z-20 md:hidden text-purple"
          onClick={onMobileNavToggleClick}
        />
      )} */}
    </div>
  );
};

export default Navbar;
