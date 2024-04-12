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
import { type PrimitiveAtom, useAtom } from "jotai";
import { ContentPageAtom } from "@/pages/_app";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(10);
  const [page, setPage] = useAtom<number>(
    ContentPageAtom as PrimitiveAtom<number>,
  );

  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("fetching posts", { page });
      setIsLoading(true);
      const result = await getPosts(page);
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
  }, [page]);

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
