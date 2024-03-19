import { Card, CardHeader, CardContent } from "./ui/card";
import { PostAvatar } from "./PostAvatar";
import { cn } from "@/lib/utils";

export const Post:React.FC<{  className?: string }> = ({  className='' }) => {
  const title = "Post Title";
  const content =
    "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter";
  const filter = false;
  return (
    <Card className={cn("min-w-96 max-w-md", className)}>
      <CardHeader className="flex flex-row flex-nowrap gap-2">
        <PostAvatar filter={filter} />
        <h1 className="text-lg font-semibold text-primary">{title}</h1>
      </CardHeader>
      <CardContent>
        <p className="">{content}</p>
      </CardContent>
    </Card>
  );
};
