declare interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

declare interface ICategory {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface IwhatYouWillLearn {
  title: string;
  description: string;
  list: string[];
}

declare interface ICourseDetails {
  detailDescription: string;
  whatYouWillLearn: IwhatYouWillLearn[];
  courseRating: {
    average: number;
    totalReviews: number;
    breakdown: { stars: number; count: number }[];
  };
}

interface ILesson {
  title: string;
  duration: string;
}

declare interface Ilessons {
  topic: ILesson;
  lesson: ILesson[];
}

declare interface ICourse {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  duration: string;
  instructor: string;
  translation: string;
  price: string;
  ratingCount: string;
  ratingTotal: string;
  badgeBg: string;
}

declare interface IReview {
  id: number;
  name: string;
  avatar: string;
  university: string;
  rating: string;
  review: string;
}

declare interface INews {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  reads: string;
  publishDate: string;
  badgeBg: string;
}
