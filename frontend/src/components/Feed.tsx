import { Post } from "@/components/Post";
import { cn } from "@/lib/utils";
import { type Post as PostType } from "@/types";
import { PostError } from "./PostError";

type FeedProps = {
  posts: PostType[];
};

export const Feed: React.FC<FeedProps & { className?: string }> = ({
  posts,
  className = "",
}) => {
  console.log({ feedPosts: posts });
  return (
    <div className={cn(" mb-4 rounded-md border p-4", className)}>
      <div className="p-4">
        <h4 className="mb-4  font-medium leading-none">Posts</h4>
        {posts.map((post) => (
          <Post key={post.id} post={post} className="mt-4" />
        ))}
        {posts.length === 0 && <PostError />}
      </div>
    </div>
  );
};
