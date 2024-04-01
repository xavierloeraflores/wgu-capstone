import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { type JSX, type SVGProps } from "react";

export function Composer() {
  const AvatarSrc = "/smiley.png";
  const AvatarAlt = "Avatar";
  const AvatarFall = "Me";
  return (
    <Card className="min-w-96 max-w-md">
      <CardContent className="grid gap-2 p-4">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={AvatarSrc} alt={AvatarAlt} />
            <AvatarFallback className="text-sm">{AvatarFall}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <p className="font-semibold">Create a post</p>
          </div>
        </div>
        <Textarea
          className="min-h-[100px] rounded-lg"
          id="tweet"
          placeholder="What's on your mind?"
        />
        <div className="flex items-center space-x-2">
          <Button aria-label="post" className="h-8">
            Post
          </Button>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <TextIcon className="-translate-y-px-5 h-4 w-4" />
            <span className="font-semibold" id="char-count">
              280
            </span>
            <span>Characters remaining</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
