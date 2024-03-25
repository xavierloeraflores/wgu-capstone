import { Post } from "@/components/Post";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

type PostProps = {
  text: string;
  title: string;
  isNSFW: boolean;
};
type FeedProps = {
  posts: PostProps[];
};

export const Feed: React.FC<FeedProps & { className?: string }> = ({
    posts,
    className = "",
}) => {
    return (
        <ScrollArea className={cn("p-4 rounded-md border h-[75vh]", className)}>
            <div className="p-4">
                <h4 className="mb-4  font-medium leading-none">Posts</h4>
                {posts.map((post, idx) => (
                    <Post key={idx} {...post} className="mt-4" />
                    ))}
                </div>
        </ScrollArea>
    );
};
