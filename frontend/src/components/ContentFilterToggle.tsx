"use client";

import { Toggle } from "./ui/toggle";
import { useAtom } from "jotai";
import { ContentFilterAtom } from "@/pages/_app";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "./ui/alert-dialog";

export const ContentFilterToggle: React.FC = () => {
  const [isNSFW, setIsNSFW] = useAtom(ContentFilterAtom);

  const toggleMode = () => {
    setIsNSFW(!isNSFW);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Toggle className="bg-transparent disabled:pointer-events-auto disabled:opacity-100 data-[state=on]:bg-transparent data-[state=on]:text-accent-foreground data-[state=on]:hover:bg-muted data-[state=on]:hover:text-muted-foreground">
          {isNSFW ? "😀" : "🤬"}
        </Toggle>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Change Content Filter</AlertDialogTitle>
          <AlertDialogDescription>
            <p>Are you sure you want to change the content filter?</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={toggleMode}>Change</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
