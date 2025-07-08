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
  instructor: IInstructorInfo;
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
  instructorSlug: string;
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

declare interface IAchievements {
  courses: number;
  mentor: number;
  courseEnroll: number;
  activeUsers: number;
}

declare interface IInstructorInfo {
  name: string;
  avatar: string;
  slug: string;
  headline: string;
  summary: string;
  bio: string;
  totalStudents: string;
  totalReviews: string;
  totalCourses: ICourse[];
  social: {
    website: ISocial;
    facebook: ISocial;
    twitter: ISocial;
    linkedin: ISocial;
    youtube: ISocial;
  };
}
interface ISocial{
  url: string;
  icon: React.ReactNode;
}