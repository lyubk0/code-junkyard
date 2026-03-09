import React from "react";
import { Skeleton } from "../ui/skeleton";

export const FeatureItemSkeleton: React.FC = () => {
  return (
    <div className="inline-block px-3 py-3 rounded-[10px] transition-colors duration-300 w-full">
      <Skeleton className="h-5 w-3/4 mb-2" />
      <Skeleton className="h-5 w-full" />
    </div>
  );
};
