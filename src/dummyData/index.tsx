import { BriefcaseMedical, ChartPie, CodeXml, Cpu, Facebook, Link, Linkedin, Palette, Twitter, Youtube } from "lucide-react";

export const isUser = false;

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

export const allCourses: ICourse[] = [
  {
    id: 1,
    title: "Product Manager",
    description: "Learn how to become a product manager and how to create a product that is successful.",
    slug: "product-manager",
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Business",
    instructor: "Robert Anderson",
    instructorSlug: "robert-anderson",
    translation: "English",
    duration: "3 Months (20 Hours/Week)",
    lectures: 100,
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
    instructorSlug: "robert-anderson",
    translation: "English",
    duration: "3 Months (20 Hours/Week)",
    lectures: 100,
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
    category: "Programming",
    instructor: "Robert Anderson",
    instructorSlug: "robert-anderson",
    translation: "English",
    duration: "3 Months (20 Hours/Week)",
    lectures: 100,
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
    instructorSlug: "robert-anderson",
    translation: "English",
    duration: "3 Months (20 Hours/Week)",
    lectures: 100,
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
  { id: 3, title: "Programming", icon: <CodeXml /> },
  { id: 4, title: "Health", icon: <BriefcaseMedical /> },
  { id: 5, title: "Technology", icon: <Cpu /> },
];

export const courseDetails: ICourseDetails = {
  detailDescription:
    "UI design on a product aims to enhance the appearance of the product. While the UX design is designed to provide a pleasant experience when using the product. The focus of UI design is the beauty of the appearance, while the focus of UX design is the satisfaction of using the product.",
  instructor: {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Robert Anderson",
    slug: "robert-anderson",
    headline: "Senior UIUX Designer at Microsoft",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
    totalStudents: "1,200",
    totalReviews: "7400",
    totalCourses: [
      {
        id: 1,
        title: "Product Manager",
        description: "Learn how to become a product manager and how to create a product that is successful.",
        slug: "product-manager",
        image:
          "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Business",
        instructor: "Robert Anderson",
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        category: "Programming",
        instructor: "Robert Anderson",
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

        price: "89",
        ratingCount: "4.5",
        ratingTotal: "239",
        badgeBg: "bg-green-500",
      },
    ],
    social: {
      website: {
        url: "https://www.instagram.com/",
        icon: <Link />,
      },
      facebook: {
        url: "https://www.facebook.com/",
        icon: <Facebook />,
      },
      twitter: {
        url: "https://twitter.com/",
        icon: <Twitter />,
      },
      linkedin: {
        url: "https://www.linkedin.com/",
        icon: <Linkedin />,
      },
      youtube: {
        url: "https://www.youtube.com/",
        icon: <Youtube />,
      },
    },
  },
  whatYouWillLearn: [
    {
      title: "User Research",
      description:
        "someone who works to find information from target users (users) about their behavior and needs which is then analyzed to produce a design that fits the user's needs. in this section you will learn about:",
      list: ["Empathize", "Problem solving method", "Usability Testing"],
    },
    {
      title: "Wireframe",
      description:
        "a framework that serves to make the layout of a website to suit the client's wishes before entering the design or coding process.",
      list: ["Lo Fidelity", "Hight Fidelity"],
    },
    {
      title: "Figma Basic",
      description: "A tool for a UIUX Designer to do their job",
      list: ["Get to know the tools", "Try out tools"],
    },
  ],
  courseRating: {
    average: 4.7,
    totalReviews: 100,
    breakdown: [
      { stars: 5, count: 80 },
      { stars: 4, count: 15 },
      { stars: 3, count: 5 },
      { stars: 2, count: 2 },
      { stars: 1, count: 1 },
    ],
  },
};

export const lessons: Ilessons[] = [
  {
    topic: { title: "User Research", duration: "3 Hours, 30 Minutes" },
    lesson: [
      { title: "Lesson 1", duration: "20 min" },
      { title: "Lesson 2", duration: "30 min" },
      { title: "Lesson 3", duration: "30 min" },
      { title: "Lesson 4", duration: "30 min" },
    ],
  },
  {
    topic: { title: "Wireframe", duration: "3 Hours, 30 Minutes" },
    lesson: [
      { title: "Lesson 5", duration: "20 min" },
      { title: "Lesson 6", duration: "30 min" },
      { title: "Lesson 7", duration: "30 min" },
      { title: "Lesson 8", duration: "30 min" },
    ],
  },
  {
    topic: { title: "Figma Basic", duration: "3 Hours, 30 Minutes" },
    lesson: [
      { title: "Lesson 9", duration: "20 min" },
      { title: "Lesson 10", duration: "30 min" },
      { title: "Lesson 11", duration: "30 min" },
      { title: "Lesson 12", duration: "30 min" },
    ],
  },
];

export const achievements: IAchievements = {
  courses: 549,
  mentor: 120,
  courseEnroll: 498,
  activeUsers: 1200,
};

export const instructorInfo: IInstructorInfo = {
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Robert Anderson",
  slug: "robert-anderson",
  headline: "Senior UIUX Designer at Microsoft",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
  totalStudents: "1,200",
  totalReviews: "7400",
  totalCourses: [
    {
      id: 1,
      title: "Product Manager",
      description: "Learn how to become a product manager and how to create a product that is successful.",
      slug: "product-manager",
      image:
        "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Business",
      instructor: "Robert Anderson",
      instructorSlug: "robert-anderson",
      translation: "English",
      duration: "3 Months (20 Hours/Week)",
      lectures: 100,

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
      instructorSlug: "robert-anderson",
      translation: "English",
      duration: "3 Months (20 Hours/Week)",
      lectures: 100,

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
      category: "Programming",
      instructor: "Robert Anderson",
      instructorSlug: "robert-anderson",
      translation: "English",
      duration: "3 Months (20 Hours/Week)",
      lectures: 100,

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
      instructorSlug: "robert-anderson",
      translation: "English",
      duration: "3 Months (20 Hours/Week)",
      lectures: 100,

      price: "89",
      ratingCount: "4.5",
      ratingTotal: "239",
      badgeBg: "bg-green-500",
    },
  ],
  social: {
    website: {
      url: "https://www.instagram.com/",
      icon: <Link />,
    },
    facebook: {
      url: "https://www.facebook.com/",
      icon: <Facebook />,
    },
    twitter: {
      url: "https://twitter.com/",
      icon: <Twitter />,
    },
    linkedin: {
      url: "https://www.linkedin.com/",
      icon: <Linkedin />,
    },
    youtube: {
      url: "https://www.youtube.com/",
      icon: <Youtube />,
    },
  },
};

export const instructors: IInstructorInfo[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Robert Anderson",
    slug: "robert-anderson",
    headline: "Senior UIUX Designer at Microsoft",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
    totalStudents: "1200",
    totalReviews: "7400",
    totalCourses: [
      {
        id: 1,
        title: "Product Manager",
        description: "Learn how to become a product manager and how to create a product that is successful.",
        slug: "product-manager",
        image:
          "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Business",
        instructor: "Robert Anderson",
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        category: "Programming",
        instructor: "Robert Anderson",
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

        price: "89",
        ratingCount: "4.5",
        ratingTotal: "239",
        badgeBg: "bg-green-500",
      },
    ],
    social: {
      website: {
        url: "https://www.instagram.com/",
        icon: <Link />,
      },
      facebook: {
        url: "https://www.facebook.com/",
        icon: <Facebook />,
      },
      twitter: {
        url: "https://twitter.com/",
        icon: <Twitter />,
      },
      linkedin: {
        url: "https://www.linkedin.com/",
        icon: <Linkedin />,
      },
      youtube: {
        url: "https://www.youtube.com/",
        icon: <Youtube />,
      },
    },
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    slug: "john-doe",
    headline: "Senior UIUX Designer at Microsoft",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
    totalStudents: "1200",
    totalReviews: "7400",
    totalCourses: [
      {
        id: 1,
        title: "Product Manager",
        description: "Learn how to become a product manager and how to create a product that is successful.",
        slug: "product-manager",
        image:
          "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Business",
        instructor: "Robert Anderson",
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        category: "Programming",
        instructor: "Robert Anderson",
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

        price: "89",
        ratingCount: "4.5",
        ratingTotal: "239",
        badgeBg: "bg-green-500",
      },
    ],
    social: {
      website: {
        url: "https://www.instagram.com/",
        icon: <Link />,
      },
      facebook: {
        url: "https://www.facebook.com/",
        icon: <Facebook />,
      },
      twitter: {
        url: "https://twitter.com/",
        icon: <Twitter />,
      },
      linkedin: {
        url: "https://www.linkedin.com/",
        icon: <Linkedin />,
      },
      youtube: {
        url: "https://www.youtube.com/",
        icon: <Youtube />,
      },
    },
  },
  {
    avatar:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Smith",
    slug: "emily-smith",
    headline: "Senior UIUX Designer at Microsoft",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
    totalStudents: "1200",
    totalReviews: "7400",
    totalCourses: [
      {
        id: 1,
        title: "Product Manager",
        description: "Learn how to become a product manager and how to create a product that is successful.",
        slug: "product-manager",
        image:
          "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Business",
        instructor: "Robert Anderson",
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        category: "Programming",
        instructor: "Robert Anderson",
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

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
        instructorSlug: "robert-anderson",
        translation: "English",
        duration: "3 Months (20 Hours/Week)",
        lectures: 100,

        price: "89",
        ratingCount: "4.5",
        ratingTotal: "239",
        badgeBg: "bg-green-500",
      },
    ],
    social: {
      website: {
        url: "https://www.instagram.com/",
        icon: <Link />,
      },
      facebook: {
        url: "https://www.facebook.com/",
        icon: <Facebook />,
      },
      twitter: {
        url: "https://twitter.com/",
        icon: <Twitter />,
      },
      linkedin: {
        url: "https://www.linkedin.com/",
        icon: <Linkedin />,
      },
      youtube: {
        url: "https://www.youtube.com/",
        icon: <Youtube />,
      },
    },
  },
];

export const user: IUser = {
  name: "John Doe",
  email: "0zY6H@example.com",
  avatar:
    "https://images.unsplash.com/photo-1558730234-d8b2281b0d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  allCourses: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Next Framework",
      slug: "next-framework",
      category: "Programming",
      allLessons: 10,
      finishedLessons: 7,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Next Framework",
      slug: "next-framework",
      category: "Programming",
      allLessons: 10,
      finishedLessons: 7,
    },
  ],
};

export const progressCourse: IProgressCourse[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Next Framework",
    slug: "next-framework",
    category: "Programming",
    allLessons: 10,
    finishedLessons: 7,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Next Framework",
    slug: "next-framework",
    category: "Programming",
    allLessons: 10,
    finishedLessons: 7,
  },
];

export const VAT_RATE: number = 0.1;
