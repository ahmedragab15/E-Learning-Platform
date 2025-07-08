import { cn } from "@/lib/utils";
import React from "react";
type CategoryCardProps = {
  category: ICategory;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryCard = ({ category, selectedCategory, setSelectedCategory }: CategoryCardProps) => {
  return (
    <div className={cn(`flex flex-col items-center gap-8 bg-slate-100 w-54 py-6 rounded-md shadow group hover:shadow-lg hover:bg-primary duration-200 ${selectedCategory === category.title ? "bg-primary" : ""}`)} onClick={() => setSelectedCategory(category.title)}>
      <span className={cn(`bg-primary text-white group-hover:text-primary group-hover:bg-white rounded-full p-3 ${selectedCategory === category.title ? "text-primary bg-white" : ""}`)}>{category.icon}</span>
      <h3 className={cn(`font-medium group-hover:text-white ${selectedCategory === category.title ? "text-white" : ""}`)}>{category.title}</h3>
    </div>
  );
};

export default CategoryCard;
