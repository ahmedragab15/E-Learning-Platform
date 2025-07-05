"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";
const RatingProgress = ({ count }: { count: number }) => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(count), 500);
    return () => clearTimeout(timer);
  }, [count]);
  return <Progress value={progress} className=" h-5 bg-gray-200" />;
};
export default RatingProgress;
