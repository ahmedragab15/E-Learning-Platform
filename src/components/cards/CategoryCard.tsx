"use client";
import { cn } from "@/lib/utils";
import { Prisma } from "@/generated/prisma/client";
import { IconsMap } from "../shared/Icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CategoryCardProps = {
  category: Prisma.CategoryGetPayload<{ include: { courses: true } }>;
  selectedCategory: string;
};

const CategoryCard = ({ category, selectedCategory }: CategoryCardProps) => {
  const IconComponent = IconsMap[category.iconName as keyof typeof IconsMap];
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== "/courses-category") {
      router.push(`/courses-category?category=${category.title}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", category.title);
      router.push(`?${params.toString()}`);
    }
  };

  return (
    <div
      className={cn(
        `flex flex-col items-center gap-8 bg-slate-100 w-54 py-6 rounded-md shadow group hover:shadow-lg hover:bg-primary duration-200 ${
          selectedCategory === category.title ? "bg-primary" : ""
        }`
      )}
      onClick={handleClick}
    >
      <span
        className={cn(
          `bg-primary text-white group-hover:text-primary group-hover:bg-white rounded-full p-3 ${
            selectedCategory === category.title ? "text-primary bg-white" : ""
          }`
        )}
      >
        {IconComponent ? <IconComponent /> : null}
      </span>
      <h3 className={cn(`font-medium group-hover:text-white ${selectedCategory === category.title ? "text-white" : ""}`)}>{category.title}</h3>
    </div>
  );
};

export default CategoryCard;
