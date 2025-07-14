import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const ArrowNavigation = () => {
  return (
    <>
      <div className="flex gap-1 justify-center relative">
        <Button size={"icon"} variant={"ghost"} className="w-8 h-8 p-1 hover:bg-primary hover:text-white swiper-button-prev ">
          <MoveLeft />
        </Button>
        <Button size={"icon"} variant={"ghost"} className="w-8 h-8 p-1 hover:bg-primary hover:text-white swiper-button-next ">
          <MoveRight />
        </Button>
      </div>
    </>
  );
};

export const ChevronNavigation = () => {
  return (
    <div className="flex gap-4 justify-center">
      <Button size={"icon"} variant={"outline"} className="swiper-button-prevv">
        <ChevronLeft />
      </Button>
      <Button size={"icon"} variant={"outline"} className="swiper-button-nextt ">
        <ChevronRight />
      </Button>
    </div>
  );
};
