"use client";

import { Toggle } from "./ui/toggle";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();
  if (!theme) {
    setTheme("dark");
  }
  const [mode, setMode] = useState(theme);
  const toggleMode = () => {
    if (mode === "dark") {
      setTheme("light");
      setMode("light");
    } else {
      setTheme("dark");
      setMode("dark");
    }
  };
  return (
    <Toggle onClick={toggleMode}>{mode === "dark" ? <Moon /> : <Sun />}</Toggle>
  );
};
