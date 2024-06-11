import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./NavItems";
import { CiMenuFries } from "react-icons/ci";

export function MobilNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className=" inline-flex md:hidden">
          <CiMenuFries />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="w-full h-full flex flex-col items-start justify-start gap-4 mt-8">
          <NavItems />
        </div>
      </SheetContent>
    </Sheet>
  );
}
