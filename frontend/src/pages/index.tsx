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
      <Post
        title=""
        isNSFW={false}
        text="Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
      />
      <Post
        title=""
        isNSFW={true}
        text="NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
      />
    </>
  );
}
