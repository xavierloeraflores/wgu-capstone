import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type TagProps = {
  tag: string;
};

export const Tag: React.FC<TagProps & { className?: string }> = ({
  tag,
  className = "",
}) => {
  if (tag === "") return <></>;
  if (tag === "user" || tag === "dataset") {
    return (
      <Badge className={cn("", className)} variant="secondary">
        {tag}
      </Badge>
    );
  }
  return (
    <Badge className={cn("", className)} variant="default">
      {tag}
    </Badge>
  );
};
