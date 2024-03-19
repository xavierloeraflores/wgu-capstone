"use client";

import { Toggle } from "./ui/toggle";
import { useContentFilter } from "@/hooks/useContentFilter";

export const ContentFilterToggle: React.FC = () => {
  const { isFiltered, setIsFiltered } = useContentFilter();

  const toggleMode = () => {
    setIsFiltered(!isFiltered);
  };
  return (
    <Toggle
      onClick={toggleMode}
      className="bg-transparent disabled:pointer-events-auto disabled:opacity-100 data-[state=on]:bg-transparent data-[state=on]:text-accent-foreground data-[state=on]:hover:bg-muted data-[state=on]:hover:text-muted-foreground"
    >
      {!isFiltered ? "😀" : "🤬"}
    </Toggle>
  );
};
