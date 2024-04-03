import { Post } from "@/components/Post";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { type Post as PostType } from "@/types";

type FeedProps = {
  posts: PostType[];
};

export const Feed: React.FC<FeedProps & { className?: string }> = ({
  posts,
  className = "",
}) => {
  return (
    <ScrollArea className={cn("h-[75vh] rounded-md border p-4", className)}>
      <div className="p-4">
        <h4 className="mb-4  font-medium leading-none">Posts</h4>
        {posts.map((post) => (
          <Post key={post.id} post={post} className="mt-4" />
        ))}
      </div>
    </ScrollArea>
  );
};
