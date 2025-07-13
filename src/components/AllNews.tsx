import Heading from "@/components/shared/Heading";
import NewsCard from "./cards/NewsCard";
import { ArrowNavigation } from "@/components/shared/ArrowNavigation";
import { getAllNewsAction } from "@/actions/newsActions";

const AllNews = async() => {
    const news = await getAllNewsAction();
  
  return (
    <>
      <Heading title="News for you" />
      <div className="flex justify-evenly flex-wrap gap-6 my-6">
        {news.slice(0, 4).map((n) => (
          <NewsCard key={n.id} News={n} />
        ))}
      </div>
      <ArrowNavigation />
    </>
  );
};

export default AllNews;
