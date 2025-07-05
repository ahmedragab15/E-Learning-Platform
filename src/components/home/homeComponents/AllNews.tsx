import Heading from "@/components/shared/Heading";
import NewsCard from "./NewsCard";
import { ArrowNavigation } from "@/components/shared/ArrowNavigation";
import { news } from "@/dummyData";

const AllNews = () => {
  return (
    <>
      <Heading title="News for you" />
      <div className="flex justify-evenly flex-wrap gap-6 my-6">
        {news.map((n) => (
          <NewsCard key={n.id} News={n} />
        ))}
      </div>
      <ArrowNavigation />
    </>
  );
};

export default AllNews;
