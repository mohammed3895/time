import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

interface AddButtonProps {
  btnTitle: string;
  children: React.ReactNode;
  btnVariant?:
    | "default"
    | "secondary"
    | "link"
    | "outline"
    | "destructive"
    | "ghost";
  title: string;
}

const AddButton = ({
  btnTitle,
  btnVariant,
  title,
  children,
}: AddButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={btnVariant}
          className="w-full md:w-[200px] font-normal capitalize"
        >
          {btnTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogTitle className="uppercase text-primary">{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;
