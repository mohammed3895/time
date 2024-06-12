import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./NavItems";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import StopWatch from "../StopWatch";
import Timer from "../clock/Timer";

export function MobilNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <SheetTrigger>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className=" inline-flex md:hidden"
        >
          <CiMenuFries />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="w-full h-full flex flex-col items-start justify-start gap-4 mt-8">
          <NavItems onClick={() => setIsOpen(!isOpen)} />
          <StopWatch />
          <Timer initialSeconds={60} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
