import Head from "next/head";
import { Feed } from "@/components/Feed";
import { postsData } from "@/lib/data";

export default function Home() {

  return (
    <>
      <Head>
        <title>Racism ML Model</title>
        <meta name="description" content="Racism ML Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feed posts={postsData} />
    </>
  );
}
