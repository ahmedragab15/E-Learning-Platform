import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const ArrowNavigation = () => {
  return (
    <>
      <div className="flex gap-4 justify-center">
        <MoveLeft />
        <MoveRight />
      </div>
    </>
  );
};

export const ButtonArrowNavigation = () => {
  return (
    <div className="flex gap-4 justify-center">
      <Button size={"icon"} variant={"outline"} className="border-primary text-primary hover:text-white hover:bg-primary" asChild>
        <ChevronLeft />
      </Button>
      <Button size={"icon"} variant={"outline"} className="border-primary text-primary hover:text-white hover:bg-primary" asChild>
        <ChevronRight />
      </Button>
    </div>
  );
};
