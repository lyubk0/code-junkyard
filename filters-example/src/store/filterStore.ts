import { create } from "zustand";

interface FilterState {
  category: string;
  searchQuery: string;
  setCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: "",
  searchQuery: "",
  setCategory: (category) => set({ category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
