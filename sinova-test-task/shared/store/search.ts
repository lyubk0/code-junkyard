import { create } from "zustand";

interface State {
  value: string;
  setValue: (value: string) => void;
}

export const useSearchStore = create<State>((set) => ({
  value: "",
  setValue: (value: string) => set({ value }),
}));
