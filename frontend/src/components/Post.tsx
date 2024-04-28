import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { PostAvatar } from "./PostAvatar";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { ContentFilterAtom } from "@/pages/_app";
import { type Post as PostType } from "@/types";
import { Badge } from "./ui/badge";

type PostProps = {
  post: PostType;
};

export const Post: React.FC<PostProps & { className?: string }> = ({
  post,
  className = "",
}) => {
  const { text, isNSFW, tags } = post;
  const [isFiltered] = useAtom(ContentFilterAtom);
  return (
    <Card className={cn("min-h-48 min-w-96 max-w-md", className)}>
      <CardHeader className="flex flex-row flex-nowrap gap-2 border-b-2">
        <PostAvatar isNSFW={isNSFW} />
        <h1 className="text-lg font-semibold text-primary">{}</h1>
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
          if (tag === "") return null;
          if (tag === "user" || tag === "dataset") {
            return (
              <Badge key={idx} variant="secondary">
                {tag}
              </Badge>
            );
          }
          return (
            <Badge key={idx} variant="default">
              {tag}
            </Badge>
          );
        })}
      </CardFooter>
    </Card>
  );
};
