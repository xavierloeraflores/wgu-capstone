import Head from "next/head";
import { Feed } from "@/components/Feed";
import { SkeletonFeed } from "@/components/SkeletonFeed";
import { postsData } from "@/lib/data";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState(postsData);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Head>
        <title>Racism ML Model</title>
        <meta name="description" content="Racism ML Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading? <SkeletonFeed/>:<Feed posts={posts} />}
    </>
  );
}
