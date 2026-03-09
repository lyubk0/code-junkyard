"use client";

import React from "react";
import { useSearchStore } from "../store/search";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const { value, setValue } = useSearchStore((state) => state);
  return (
    <input
      className="border-gray-300 border-solid border rounded-lg  h-full w-[50%] outline-none px-4"
      value={value}
      placeholder="Search breed..."
      onChange={(e) => setValue(e.target.value)}
      type="text"
    />
  );
};
