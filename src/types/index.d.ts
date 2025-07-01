declare interface ICategory {
  id: number;
  title: string;
  icon: React.ReactNode;
}

declare interface ICourse {
  id: number;
  image: string;
  title: string;
  category: string;
  duration: string;
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
