import { Button } from "@/components/ui/button";
const HomeBanner = () => {
  return (
    <div className="max-w-full h-[349px] mx-auto relative">
      <div className="banner-image absolute inset-0 z-0 before:absolute before:inset-0 before:bg-[#0F4ABD]/20">
        <div className="flex flex-col items-center justify-center gap-4 text-white px-4 relative z-10 h-full">
          <h3 className="text-2xl md:text-3xl font-semibold">Prove it right now</h3>
          <p className="text-sm md:text-base max-w-80 text-center">
            What are you waiting for? let&apos;s join us and get new knowledge and prove it now
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
