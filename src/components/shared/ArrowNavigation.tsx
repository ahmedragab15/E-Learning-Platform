import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const ArrowNavigation = () => {
  return (
    <>
      <div className="flex gap-1 justify-center">
        <Button size={"icon"} variant={"ghost"} className="w-8 h-8 p-1 hover:bg-primary hover:text-white" >
          <MoveLeft />
        </Button>
        <Button size={"icon"} variant={"ghost"} className="w-8 h-8 p-1 hover:bg-primary hover:text-white" >
          <MoveRight />
        </Button>
      </div>
    </>
  );
};

export const ChevronNavigation = () => {
  return (
    <div className="flex gap-4 justify-center">
      <Button size={"icon"} variant={"outline"} >
        <ChevronLeft />
      </Button>
      <Button size={"icon"} variant={"outline"} >
        <ChevronRight />
      </Button>
    </div>
  );
};
