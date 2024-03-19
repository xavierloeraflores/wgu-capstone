import Head from "next/head";
import Link from "next/link";
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
        <Post />
      </main>
    </>
  );
}
