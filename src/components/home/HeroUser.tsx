import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroUser = () => {
    return (
      <>
        <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-linear-to-r before:from-[#f0f5ff46] before:to-[#044cdda8]">
          <div className="container mx-auto  space-y-4 flex flex-col justify-center items-center h-full">
            <div className="flex flex-col items-center justify-center gap-4  px-4 relative z-10 h-full">
              <h1 className="text-white text-3xl text-center sm:text-4xl md:text-6xl font-semibold !font-alike">Learn the course you like</h1>
              <p className="text-white text-sm md:text-lg max-w-80 text-center">
                Now you can take the course that you like. Choose the best course and study with a professional mentor
              </p>
              <div className="flex w-full ">
                <Input placeholder="Try Search “UX Researcher”" className="h-12 bg-white dark:bg-slate-800" />
                <Button className="h-12 text-white">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroUser;
