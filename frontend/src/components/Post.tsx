import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { PostAvatar } from "./PostAvatar";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { ContentFilterAtom } from "@/pages/_app";
import { type Post as PostType } from "@/types";
import { Tag } from "./Tag";
import { TagHoverCard } from "./TagHoverCard";

type PostProps = {
  post: PostType;
};

export const Post: React.FC<PostProps & { className?: string }> = ({
  post,
  className = "",
}) => {
  const { text, isNSFW, tags, date } = post;
  const [isFiltered] = useAtom(ContentFilterAtom);
  const isUserGenerated = tags.includes("user");
  const dateObj = new Date(date);
  return (
    <Card className={cn("min-h-48 min-w-64 max-w-md", className)}>
      <CardHeader className="flex flex-row flex-nowrap items-center gap-4 border-b-2">
        <PostAvatar isNSFW={isNSFW} />
        <h1 className="text-md text-center font-semibold">
          {isUserGenerated && date.length > 0
            ? `Posted ${dateObj.toDateString()}`
            : ""}
        </h1>
      </CardHeader>
      <CardContent
        className={`py-2 ${isFiltered && isNSFW ? "overflow-hidden blur-xl filter" : ""}`}
      >
        <p className={isFiltered && isNSFW ? "select-none" : "select-text"}>
          {text}
        </p>
      </CardContent>
      <CardFooter className="gap-4 p-4">
        {tags.map((tag, idx) => {
          return (
            <TagHoverCard key={idx} tag={tag}>
              <Tag tag={tag} />
            </TagHoverCard>
          );
        })}
      </CardFooter>
    </Card>
  );
};
