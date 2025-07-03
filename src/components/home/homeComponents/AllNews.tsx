import Heading from "@/components/shared/Heading";
import NewsCard from "./NewsCard";
import ArrowNavigation from "@/components/shared/ArrowNavigation";

const news: INews[] = [
  {
    id: 1,
    title: "How is business during a pandemic?",
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Business",
    description: "How do businesses survive during a pandemic in order to remain stable and efficient",
    reads: "300",
    publishDate: "16 May, 2023",
    badgeBg: "bg-blue-500",
  },
  {
    id: 2,
    title: "You must know about Artificial Intelligence",
    image:
      "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
    description: "The development of industrial technology that is getting faster is currently a trend regarding artificial intelligence",
    reads: "400",
    publishDate: "16 May, 2023",
    badgeBg: "bg-orange-500",
  },
  {
    id: 3,
    title: "How is business during a pandemic?",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Progamming",
    description: "How do businesses survive during a pandemic in order to remain stable and efficient",
    reads: "150",
    publishDate: "16 May, 2023",
    badgeBg: "bg-purple-500",
  },
  {
    id: 4,
    title: "The Importance of Design Thinking",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Design",
    description: "Now the design thinking method is not only used for a designer but can be used by business people",
    reads: "350",
    publishDate: "16 May, 2023",
    badgeBg: "bg-green-500",
  },
];

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
