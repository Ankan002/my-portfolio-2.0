import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-3 flex items-center justify-between relative">
      <div className="flex h-full items-center justify-center">
        <Image src="/logo.svg" width={40} height={40} alt="" />
        <h1 className="text-primary-light ml-1 text-2xl tracking-wider font-light">
          nkan
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
