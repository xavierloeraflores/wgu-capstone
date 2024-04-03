import { Post } from "@/components/Post";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { type Post as PostType } from "@/types";

type FeedProps = {
  posts: PostType[];
};
const PostError: PostType = {
  text: "No posts were found",
  id: -1,
  isNSFW: false,
};

export const Feed: React.FC<FeedProps & { className?: string }> = ({
  posts,
  className = "",
}) => {
  console.log({ feedPosts: posts });
  return (
    <ScrollArea className={cn("h-[75vh] rounded-md border p-4", className)}>
      <div className="p-4">
        <h4 className="mb-4  font-medium leading-none">Posts</h4>
        {posts.map((post) => (
          <Post key={post.id} post={post} className="mt-4" />
        ))}
        {posts.length === 0 && <Post post={PostError} />}
      </div>
    </ScrollArea>
  );
};
