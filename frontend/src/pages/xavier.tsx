import Head from "next/head";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Xavier</title>
        <meta name="description" content="About Xavier's background" />
        <a rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full space-y-6 py-6">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meet Xavier.
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Software Engineer. Lifelong Learner. Educator.
            </p>
          </div>
          <div className="flex w-full grid-cols-1 items-stretch justify-center gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="flex flex-col gap-2">
              <Image
                alt="Xavier Loera Flores"
                className="mx-auto overflow-hidden rounded-full border border-gray-200 object-cover object-center dark:border-gray-800 dark:ring-gray-800"
                height="200"
                src="/xavier.jpeg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <p className="text-center font-medium">
                Xavier Alejandro Loera Flores
              </p>
              <div className="mx-auto w-10 border-t border-gray-200 dark:border-gray-800" />
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Dedicated software engineer with 3 years of hands-on experience
                in developing robust and scalable applications.
              </p>
            </div>
          </div>
        </div>
        <div
          className="container flex justify-center gap-2"
          id="personal-links"
        >
          <a
            className={buttonVariants({ variant: "default" })}
            href="https://www.loeraflores.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            className={buttonVariants({ variant: "default" })}
            href="https://www.linkedin.com/in/xavierloeraflores/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={buttonVariants({ variant: "default" })}
            href="https://github.com/xavierloeraflores"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
