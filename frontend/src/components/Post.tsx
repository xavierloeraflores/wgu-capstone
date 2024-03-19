import { Card, CardHeader, CardContent } from "./ui/card";
import { PostAvatar } from "./PostAvatar";
import { cn } from "@/lib/utils";

type PostProps = {
  text: string;
  title: string;
  filter: boolean;
};

export const Post: React.FC<PostProps & { className?: string }> = ({
  text,
  title,
  filter,
  className = "",
}) => {
  return (
    <Card className={cn("min-w-96 max-w-md", className)}>
      <CardHeader className="flex flex-row flex-nowrap gap-2">
        <PostAvatar filter={filter} />
        <h1 className="text-lg font-semibold text-primary">{title}</h1>
      </CardHeader>
      <CardContent>
        <p className="">{text}</p>
      </CardContent>
    </Card>
  );
};
