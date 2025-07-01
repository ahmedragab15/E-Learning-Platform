import React from "react";
type CategoryCardProps = {
  category: ICategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="flex flex-col items-center gap-8 bg-slate-100 w-54 py-6 rounded-md shadow hover:shadow-lg duration-200">
      <span className="bg-primary text-white rounded-full p-3">{category.icon}</span>
      <h3 className="font-medium">{category.title}</h3>
    </div>
  );
};

export default CategoryCard;
