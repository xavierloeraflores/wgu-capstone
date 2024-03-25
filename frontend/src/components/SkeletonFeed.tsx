import { Post } from "@/components/Post";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";
import { SkeletonPost } from "./SkeletonPost";


export const SkeletonFeed: React.FC< { className?: string, count?:number }> = ({
    className = "",
    count = 10
}) => {
    return (
        <ScrollArea className={cn("p-4 rounded-md border h-[75vh]", className)}>
            <div className="p-4">
                <h4 className="mb-4  font-medium leading-none">Posts</h4>

                {
                    Array.from({ length: count }).map((_, idx) => (
                        <SkeletonPost key={idx} className="mt-4" />
                    ))
                }
                </div>
        </ScrollArea>
    );
};
