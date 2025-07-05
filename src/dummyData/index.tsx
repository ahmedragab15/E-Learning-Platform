import { BriefcaseMedical, ChartPie, CodeXml, Palette } from "lucide-react";

export const isUser = true;

export const news: INews[] = [
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

export const courses: ICourse[] = [
  {
    id: 1,
    title: "Product Manager",
    description: "Learn how to become a product manager and how to create a product that is successful.",
    slug: "product-manager",
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Business",
    instructor: "Robert Anderson",
    translation: "English",
    duration: "3 Months (20 Hours/Week)",
    price: "89",
    ratingCount: "3.5",
    ratingTotal: "239",
    badgeBg: "bg-blue-500",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "UIUX design aims to enhance the appearance of the product and also provide an attractive experience for users. many companies need a UIUX Designer. What are you waiting for, let's join us and study the material now",
    slug: "ui-ux-design",
    image:
      "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Design",
    instructor: "Robert Anderson",
    translation: "English",
    duration: "3 Months (20 Hours/Week)",
    price: "89",
    ratingCount: "4.5",
    ratingTotal: "239",
    badgeBg: "bg-orange-500",
  },
  {
    id: 3,
    title: "Next Framework",
    description: "Learn how to become a product manager and how to create a product that is successful.",
    slug: "next-framework",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Progamming",
    instructor: "Robert Anderson",
    translation: "English",
    duration: "3 Months (20 Hours/Week)",
    price: "89",
    ratingCount: "4.5",
    ratingTotal: "239",
    badgeBg: "bg-purple-500",
  },
  {
    id: 4,
    title: "Cloud Computing",
    description: "Learn how to become a product manager and how to create a product that is successful.",
    slug: "cloud-computing",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
    instructor: "Robert Anderson",
    translation: "English",
    duration: "3 Months (20 Hours/Week)",
    price: "89",
    ratingCount: "4.5",
    ratingTotal: "239",
    badgeBg: "bg-green-500",
  },
];

export const reviews: IReview[] = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of London",
    rating: "4.5",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    name: "John Doe",
    avatar:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of London",
    rating: "4.5",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of London",
    rating: "3.5",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const categories: ICategory[] = [
  { id: 1, title: "Business", icon: <ChartPie /> },
  { id: 2, title: "Design", icon: <Palette /> },
  { id: 3, title: "Progamming", icon: <CodeXml /> },
  { id: 4, title: "Health", icon: <BriefcaseMedical /> },
  { id: 5, title: "Health", icon: <BriefcaseMedical /> },
];

export const selectedCat = "Business";
