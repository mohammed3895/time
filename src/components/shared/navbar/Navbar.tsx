import React from "react";
import NavItems from "./NavItems";
import Logo from "./Logo";
import { MobilNav } from "./MobileNav";

const Navbar = () => {
  return (
    <div className="w-full h-16 p-4 flex justify-between items-center md:justify-center gap-8">
      <Logo />
      <div className="hidden md:flex">
        <NavItems />
      </div>
      <MobilNav />
    </div>
  );
};

export default Navbar;
