import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About the Racism ML Model" />
      </Head>
      <div className="w-full space-y-6 py-6">
        <div className="container flex flex-col gap-1 space-y-2 px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            About
          </h1>
        </div>
        <div className="container w-full flex-1 px-4 md:px-6">
          <div className="prose mx-auto flex w-full max-w-3xl flex-col gap-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed">
            <p>
              The purpose of this project was to create a machine learning model
              that can automatically categorize social media posts with racism.
              A machine learning model that can automatically categorize social
              media posts with racism can be used in a content moderation system
              to help prevent the spread of offensive speech online.
            </p>
            <p>
              Using large datasets containing social media posts and by
              implementing natural language processing techniques, the machine
              learning model could be trains so that it can accurately
              categorize social media posts with racism.
            </p>
            <p>
              The model is then deployed as a withing a FastApi web server and
              can be interfaced via an API. This website utilizes that API to
              demonstrate the model in action. Users can post a message and the
              model will automatically categorize it as either racist or not
              racist. Alternatively, users may also simply validate their posts
              for racism without posting to the platform.
            </p>
          </div>
        </div>
        <div className="container w-full flex-1 px-4 md:px-6">
          <div
            className="flex flex-col justify-center gap-2 min-[600px]:flex-row"
            id="link-buttons"
          ></div>
        </div>
      </div>
    </>
  );
}
