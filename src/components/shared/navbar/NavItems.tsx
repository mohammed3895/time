import { NAVITEMS } from "@/constants/headerItems";
import Navlink from "./Navlink";

const NavItems = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full md:w-[300px] flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-start md:items-center md:justify-between justify-start gap-3 flex-col md:flex-row w-full">
        {NAVITEMS.map((item) => (
          <Navlink key={item.href} item={item} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default NavItems;
