import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";

export const PostAvatar: React.FC<{ filter: boolean, className?: string }> = ({ filter, className='' }) => {
  const SFW = {
    fallback: "SFW",
    alt: "SFW Avatar",
    image: "/smiley.png",
  };
  const NSFW = {
    fallback: "NSFW",
    alt: "NSFW Avatar",
    image: "/frowny.png",
  };
  const AvatarContent = filter ? SFW : NSFW;

  return (
    <Avatar className={cn('', className)}>
      <AvatarImage src={AvatarContent.image} alt={AvatarContent.alt} />
      <AvatarFallback className="text-sm">
        {AvatarContent.fallback}
      </AvatarFallback>
    </Avatar>
  );
};
