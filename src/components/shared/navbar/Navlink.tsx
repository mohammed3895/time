import { buttonVariants } from "@/components/ui/button";
import { NAVITEMS } from "@/constants/headerItems";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
interface ItemProps {
  item: (typeof NAVITEMS)[number];
  onClick: () => void;
}

const Navlink = ({ item, onClick }: ItemProps) => {
  return (
    <Link
      to={item.href}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "w-full flex gap-2 capitalize justify-start md:justify-center"
      )}
      onClick={onClick}
    >
      <item.icon className="w-5 h-5 text-primary" />
      {item.name}
    </Link>
  );
};

export default Navlink;
