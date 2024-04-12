import Head from "next/head";
import { Feed } from "@/components/Feed";
import { SkeletonFeed } from "@/components/SkeletonFeed";
import { postsData } from "@/lib/data";
import { useEffect, useState } from "react";
import { Composer } from "@/components/Composer";
import { getPosts } from "@/api/posts";
import { toast } from "sonner";
import { type Post } from "@/types";
import { FeedPagination } from "@/components/FeedPagination";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const result = await getPosts();
      if (result.error) {
        console.error("Failed to get posts");
        toast.error("Failed to get posts");
        setIsLoading(false);
        return;
      }
      setPosts(result.posts);
      setLastPage(result.lastPage);
      setIsLoading(false);
    };
    void fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Racism ML Model</title>
        <meta name="description" content="Racism ML Detector" />
      </Head>
      <Composer className="my-4" />
      {isLoading ? <SkeletonFeed /> : <Feed posts={posts} />}
      <FeedPagination lastPage={lastPage} />
    </>
  );
}
