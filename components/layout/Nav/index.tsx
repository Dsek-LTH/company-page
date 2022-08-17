import React from "react";
import Image from "next/image";
import NavMenu from "./Menu";

const MainNav: React.FC = () => {
  return (
    <nav className="absolute z-10     w-screen  bg-lila    font-bold  text-white shadow-lg">
      <div className="container mx-auto flex h-[64px] justify-between gap-4 px-4">
        <div className="flex items-center gap-4 lg:gap-4">
          <div className="relative top-2 h-[80px] w-[80px] self-start   ">
            <Image
              src="/images/logo/sigil.svg"
              alt="d-sektionen logo"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className="inline-lg whitespace-nowrap text-lg md:text-xl  ">
            D-sektionen
          </div>
        </div>
        <NavMenu />
      </div>
    </nav>
  );
};

export default MainNav;
