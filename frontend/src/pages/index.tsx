import Head from "next/head";
import { Post } from "@/components/Post";
import { Feed } from "@/components/Feed";

export default function Home() {
  const posts = [
    {
      title: "Post Title",
      isNSFW: false,
      text: "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    },
    {
      title: "NSFW Post Title",
      isNSFW: true,
      text: "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    },
    {
      title: "Post Title",
      isNSFW: false,
      text: "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    },
    {
      title: "NSFW Post Title",
      isNSFW: true,
      text: "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    },
    {
      title: "Post Title",
      isNSFW: false,
      text: "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    },
    {
      title: "NSFW Post Title",
      isNSFW: true,
      text: "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    },
  ];

  return (
    <>
      <Head>
        <title>Racism ML Model</title>
        <meta name="description" content="Racism ML Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feed posts={posts} />
    </>
  );
}
