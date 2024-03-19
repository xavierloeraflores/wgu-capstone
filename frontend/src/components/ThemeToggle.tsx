"use client";

import { Toggle } from "./ui/toggle";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();

  const [mode, setMode] = useState("dark");
  useEffect(() => {
    setTheme(mode);
  }, [mode, setTheme]);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <Toggle onClick={toggleMode}>{mode === "dark" ? <Moon /> : <Sun />}</Toggle>
  );
};
