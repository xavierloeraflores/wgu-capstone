import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";

export const PostAvatar: React.FC<{ isNSFW: boolean, className?: string }> = ({ isNSFW, className='' }) => {
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
  const AvatarContent = isNSFW ? NSFW: SFW;

  return (
    <Avatar className={cn('', className)}>
      <AvatarImage src={AvatarContent.image} alt={AvatarContent.alt} />
      <AvatarFallback className="text-sm">
        {AvatarContent.fallback}
      </AvatarFallback>
    </Avatar>
  );
};
