"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SelectMenu from "@/components/shared/SelectMenu";
import { categories } from "@/dummyData";

export default function CoursesFilter({ selected }: { selected: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    router.push(`?${params.toString()}`);
  };

  return <SelectMenu label="Select a Category" options={["All", ...categories.map((c) => c.title)]} selected={selected} setSelected={handleSelect} />;
}
