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
    <Toggle
      className="bg-transparent disabled:pointer-events-auto disabled:opacity-100 data-[state=on]:bg-transparent data-[state=on]:text-accent-foreground data-[state=on]:hover:bg-muted data-[state=on]:hover:text-muted-foreground"
      onClick={toggleMode}
    >
      {mode === "dark" ? <Moon /> : <Sun />}
    </Toggle>
  );
};
