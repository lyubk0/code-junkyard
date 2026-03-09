"use client";
import { Api } from "@/services/api-client";
import { Trash2 } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

interface Props {
  id: number;
  feature: { title: string; quote: string };
  index: number;
  onHover: (index: number | null) => void;
  featureRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export const FeatureItemServer = ({
  id,
  feature,
  index,
  onHover,
  featureRefs,
}: Props) => {
  const onRemove = (id: number) => {
    const promise = Api.quotes.removeQuote(id);
    toast.promise(promise, {
      loading: "Deleting quote...",
      success: "Quote deleted successfully!",
      error: "Error deleting quote",
    });
  };

  return (
    <div
      ref={(el) => {
        featureRefs.current[index] = el;
        return;
      }}
      className="inline-block px-3 py-3 rounded-[10px] transition-colors duration-300 relative group"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="pr-8">
        {" "}
        <div className="text-sm text-[#0e0e10] dark:text-white font-[var(--www-mattmannucci-me-geist-regular-font-family)] leading-5 whitespace-nowrap">
          {feature.title}
        </div>
        <div className="text-sm text-[#0e0f1199] dark:text-[#ffffff99] font-[var(--www-mattmannucci-me-geist-regular-font-family)] leading-5 whitespace-nowrap">
          {feature.quote}
        </div>
      </div>
      {Number(id) > 10 && (
        <button
          onClick={() => onRemove(id)}
          className="absolute top-1/2 -translate-y-1/2 right-3 p-1.5 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-100 dark:hover:bg-red-900"
          aria-label="Delete feature"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
