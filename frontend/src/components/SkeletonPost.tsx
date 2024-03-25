import { Card, CardHeader, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";


export const SkeletonPost: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <Card className={cn("min-w-96 max-w-md min-h-48", className)}>
      <CardHeader className="flex flex-row flex-nowrap gap-2 border-b-2">
        <Skeleton className="w-8 h-8 rounded-full" />
      <Skeleton className="h-4 w-[250px]" />
      </CardHeader>
      <CardContent className="flex flex-col pt-2 gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
  );
};
