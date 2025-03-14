"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Api } from "../../services/api-client";
import { FilterItem } from "./filter-item";
import { FilterItemSkeleton } from "./skeletons";
import { useFilterStore } from "../../store/filterStore";

export const FiltersSelector = () => {
  const { category: selected, setCategory: setSelected } = useFilterStore();
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toggleCategory = (category: string) => {
    if (selected === category) {
      return setSelected("");
    }
    setSelected(category);
  };

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const categories = await Api.categories.getAllCategories();
        setCategories(categories || []);
      } catch (error) {
        console.error("GET_ALL_CATEGORIES_ERROR", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <h1 className="text-white text-3xl font-semibold mb-12 text-center">
        What are your favorite category?
      </h1>
      <motion.div
        className="flex flex-wrap justify-center gap-3 overflow-visible"
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.5,
        }}
      >
        {isLoading ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <FilterItemSkeleton key={index} />
            ))}
          </>
        ) : (
          categories.map((category) => {
            const isSelected = category === selected;
            return (
              <FilterItem
                key={category}
                title={category}
                isSelected={isSelected}
                toggleItem={toggleCategory}
              />
            );
          })
        )}
      </motion.div>
    </>
  );
};
