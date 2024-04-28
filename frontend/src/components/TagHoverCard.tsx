import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { tagDescriptions } from "@/lib/tags";

type TagHoverCardProps = {
  tag: string;
  children: React.ReactNode;
};

export const TagHoverCard: React.FC<
  TagHoverCardProps & { className?: string }
> = ({ tag, children, className = "" }) => {
  let description = "";
  if (tagDescriptions[tag as keyof typeof tagDescriptions] != undefined) {
    description = tagDescriptions[tag as keyof typeof tagDescriptions];
  }
  return (
    <HoverCard>
      <HoverCardContent>{description}</HoverCardContent>
      <HoverCardTrigger className={cn("", className)}>
        {children}
      </HoverCardTrigger>
    </HoverCard>
  );
};
