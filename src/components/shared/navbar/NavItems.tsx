"use client";
import { NAVITEMS } from "@/constants/headerItems";
import Navlink from "./Navlink";
import StopWatch from "../StopWatch";

const NavItems = () => {
  return (
    <div className="w-full md:w-[300px] flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-start md:items-center md:justify-between justify-start gap-3 flex-col md:flex-row w-full">
        {NAVITEMS.map((item) => (
          <Navlink key={item.href} item={item} />
        ))}
        <StopWatch />
      </div>
    </div>
  );
};

export default NavItems;
