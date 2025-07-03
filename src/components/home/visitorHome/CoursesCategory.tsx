import { BriefcaseMedical, ChartPie, CodeXml, Palette } from "lucide-react";
import CategoryCard from "./CategoryCard";
import ArrowNavigation from "@/components/shared/ArrowNavigation";

const categories: ICategory[] = [
  { id: 1, title: "Business", icon: <ChartPie /> },
  { id: 2, title: "Design", icon: <Palette /> },
  { id: 3, title: "Progamming", icon: <CodeXml /> },
  { id: 4, title: "Health", icon: <BriefcaseMedical /> },
  { id: 5, title: "Health", icon: <BriefcaseMedical /> },
];

const CoursesCategory = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Courses Category</h2>
        <ArrowNavigation />
      </div>
      <div className="flex justify-evenly flex-wrap gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CoursesCategory;
