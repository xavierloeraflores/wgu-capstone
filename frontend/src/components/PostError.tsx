import { Card, CardHeader, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";

export const PostError: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const text = "No posts were found";
  return (
    <Card className={cn("min-h-48 min-w-96 max-w-md", className)}>
      <CardHeader className="flex flex-row flex-nowrap gap-2 border-b-2">
        <PostErrorAvatar />
        <h1 className="text-lg font-semibold text-destructive">Error</h1>
      </CardHeader>
      <CardContent className={`py-2`}>
        <p>{text}</p>
      </CardContent>
    </Card>
  );
};

export const PostErrorAvatar: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const PostErrorAvatarData = {
    fallback: "Err",
    alt: "Error Avatar",
    image: "/smiley.png",
  };

  return (
    <Avatar className={cn("", className)}>
      <AvatarImage
        src={PostErrorAvatarData.image}
        alt={PostErrorAvatarData.alt}
      />
      <AvatarFallback className="text-sm">
        {PostErrorAvatarData.fallback}
      </AvatarFallback>
    </Avatar>
  );
};
