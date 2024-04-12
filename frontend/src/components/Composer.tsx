import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { type JSX, type SVGProps } from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { createPost, classifyPost } from "@/api/posts";
import { toast } from "sonner";
import { type PostInput } from "@/types";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export const Composer: React.FC<{
  className?: string;
  refreshPosts: () => void;
}> = ({ className, refreshPosts }) => {
  const [characterCount, setCharacterCount] = useState(144);
  const [post, setPost] = useState("");
  const [isPostDisabled, setIsPostDisabled] = useState(true);
  useEffect(() => {
    const charCount = 144 - post.length;
    setCharacterCount(charCount);
    setIsPostDisabled(charCount <= 0 || charCount === 144);
  }, [post]);

  const handlePost = async () => {
    const inputPost: PostInput = {
      text: post,
    };

    setIsPostDisabled(true);
    const result = await createPost(inputPost);
    if (result.error) {
      console.error("Failed to create post");
      toast.error("Failed to create post");
      setIsPostDisabled(false);
      return;
    }
    toast.success("Post created successfully");
    setPost("");
    refreshPosts();
  };

  const handleValidate = async () => {
    const inputPost: PostInput = {
      text: post,
    };

    setIsPostDisabled(true);
    const result = await classifyPost(inputPost);
    if (result.error) {
      console.error("Failed to classify post");
      toast.error("Failed to classify post");
      setIsPostDisabled(false);
      return;
    }
    toast.success("Post classified successfully");
    setIsPostDisabled(false);
    setTimeout(() => {
      if (!result.classification) return;
      toast.info(`Post classified using Model-V2`);
    }, 1000);

    setTimeout(() => {
      if (!result.classification) return;
      toast.info(`Post is classified as: ${result.classification}`);
    }, 2000);
  };
  return (
    <Card className={cn("min-w-96 max-w-md", className)}>
      <CardContent className="grid gap-2 p-4">
        <div className="flex items-center space-x-2">
          <NeutralAvatar />
          <div className="grid gap-0.5">
            <p className="font-semibold">Create a post</p>
          </div>
        </div>
        <Textarea
          className="min-h-[100px] rounded-lg"
          id="tweet"
          placeholder="What's on your mind?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <ClassifyHoverCard>
            <Button
              aria-label="post"
              className="h-8"
              disabled={isPostDisabled}
              onClick={handleValidate}
            >
              Classify
            </Button>
          </ClassifyHoverCard>
          <PostHoverCard>
            <Button
              aria-label="post"
              className="h-8"
              disabled={isPostDisabled}
              onClick={handlePost}
            >
              Post
            </Button>
          </PostHoverCard>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <TextIcon className="-translate-y-px-5 h-4 w-4" />
            <div
              className={`flex flex-row justify-between space-x-1 ${characterCount < 0 ? "text-red-500" : ""}`}
            >
              <span className="w-7 font-semibold" id="char-count">
                {characterCount}
              </span>
              <span>Characters remaining</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const NeutralAvatar = () => {
  const AvatarSrc = "/blanky.png";
  const AvatarAlt = "Neutral Faced Emoji Avatar";
  const AvatarFall = "Me";
  return (
    <Avatar>
      <AvatarImage src={AvatarSrc} alt={AvatarAlt} />
      <AvatarFallback className="text-sm">{AvatarFall}</AvatarFallback>
    </Avatar>
  );
};

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

const ClassifyHoverCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <HoverCard openDelay={5} closeDelay={20}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="flex h-32 flex-col bg-card text-center text-card-foreground">
        <h3>Classify Draft</h3>
        <p className="text-sm text-muted-foreground">
          Classify your draft post as offensive or safe. This will not save or
          post your draft publicly.
        </p>
      </HoverCardContent>
    </HoverCard>
  );
};

const PostHoverCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <HoverCard openDelay={5} closeDelay={20}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="flex h-32 flex-col bg-card text-center text-card-foreground">
        <h3>Post Draft</h3>
        <p className="text-sm text-muted-foreground">
          Post your draft to the public feed with an automatic classification
          based on the content.
        </p>
      </HoverCardContent>
    </HoverCard>
  );
};
