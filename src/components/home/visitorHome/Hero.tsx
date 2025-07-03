import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { images } from '@/components/shared/Images';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-[700px] text-pretty">
          Learn New Skills <span className="text-primary">Anytime</span> and <span className="text-primary">Anywhere</span>
        </h1>
        <p className="max-w-96 text-pretty text-gray-700">
          Take advantage of this moment, let&apos;s join us. You will get many benefits and can study anywhere and anytime
        </p>
        <div className="space-x-4">
          <Button className=" md:text-lg md:p-6">Get Started</Button>
          <Button variant="outline" className=" md:text-lg md:p-6 border-gray-300">
            Join Now
          </Button>
        </div>
      </div>
      <div>
        <Image src={images.HeroImage} alt="hero image" className="md:w-[600px] max-w-full" width={400} height={400} />
      </div>
    </>
  );
}

export default Hero