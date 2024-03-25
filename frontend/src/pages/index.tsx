import Head from "next/head";
import { Post } from "@/components/Post";

export default function Home() {
  return (
    <>
      <Head>
        <title>Racism ML Model</title>
        <meta name="description" content="Racism ML Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Post
          title=""
          filter={false}
          text="Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
        />
      </main>
    </>
  );
}
