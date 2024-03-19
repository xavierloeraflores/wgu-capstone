import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export const PostAvatar: React.FC<{ filter: boolean }> = ({ filter }) => {
  const SFW = {
    fallback: "SFW",
    alt: "SFW Avatar",
    image: "",
  };
  const NSFW = {
    fallback: "NSFW",
    alt: "NSFW Avatar",
    image: "",
  };
  const AvatarContent = filter ? SFW : NSFW;

  return (
    <Avatar>
      <AvatarImage src={AvatarContent.image} alt={AvatarContent.alt} />
      <AvatarFallback className="text-sm">
        {AvatarContent.fallback}
      </AvatarFallback>
    </Avatar>
  );
};
