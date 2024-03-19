import { useState, useEffect } from "react";

export function useContentFilter() {
  const [isFiltered, setIsFiltered] = useState(true);
  useEffect(() => {
    function handleFiltered() {
      setIsFiltered(true);
    }
    function handleNotFiltered() {
      setIsFiltered(false);
    }
    window.addEventListener("filtered", handleFiltered);
    window.addEventListener("not-filtered", handleNotFiltered);
    return () => {
      window.removeEventListener("filtered", handleFiltered);
      window.removeEventListener("not-filtered", handleNotFiltered);
    };
  }, []);
  return { isFiltered, setIsFiltered };
}
