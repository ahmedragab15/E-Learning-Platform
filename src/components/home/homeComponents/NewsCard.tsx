import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
type NewsCardProps = {
  News: INews;
};

const NewsCard = ({ News }: NewsCardProps) => {
  return (
    <div className="flex flex-col bg-slate-100 w-80 pb-4 gap-4 rounded-md shadow hover:shadow-xl duration-200">
      <Image src={News.image} alt="news image" width={400} height={400} className="rounded-md" />
      <div className="space-y-2 px-4">
        <Badge className={` text-white ${News.badgeBg}`}>{News.category}</Badge>
        <h3 className="text-lg font-medium line-clamp-2">{News.title}</h3>
        <p className="text-gray-600 text-xs line-clamp-2" >{News.description}</p>
        <div className="flex items-center justify-between gap-2 mt-4">
          <div>
            <span className="text-xs font-semibold">{News.reads} Reads | </span>
            <span className="text-xs font-semibold">{News.publishDate}</span>
          </div>
            <Button>Read Now</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
