"use client";

import React from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

interface Props {
  className?: string;
}

export const ToggleThemeButton: React.FC<Props> = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute hover:bg-transparent top-4 right-4 text-[#0e0f11] dark:text-white"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};
