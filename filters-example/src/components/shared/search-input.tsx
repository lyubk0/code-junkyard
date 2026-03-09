import React from "react";
import { useFilterStore } from "../../store/filterStore";
import { Search } from "lucide-react";

export const SearchInput: React.FC = () => {
  const { setSearchQuery } = useFilterStore();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchQuery(value);
  };
  return (
    <div className="relative">
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 mt-5 bg-[rgba(39,39,42,0.5)] text-white placeholder:text-zinc-400 rounded-full px-5 py-3 ring-1 ring-inset ring-[hsla(0,0%,100%,0.06)] focus:outline-none focus:ring-[#ff9066] transition-all"
      />
      <Search
        size={20}
        className="absolute text-gray-400 left-0 top-1/2  translate-x-1/2 "
      />
    </div>
  );
};
