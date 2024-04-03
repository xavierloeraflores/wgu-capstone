import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About the Racism ML Model" />
      </Head>
      <h1>About</h1>
      <p>
        This is a machine learning model that detects racism in text. It is
        trained on a dataset of tweets that are labeled as racist or not racist.
        The model is being served via a REST API and can be accessed by sending
        a POST request to the FastApi server.
      </p>
    </>
  );
}
