import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { atom } from "jotai";
import Head from "next/head";
import { type ReactNode } from "react";

import "@/styles/globals.css";
export const ContentFilterAtom = atom(true);
export const ContentPageAtom = atom(1);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main
        className={`font-sans ${inter.variable} justify-center" flex min-h-screen flex-col items-center bg-background py-8`}
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16 32x32"
          href="favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicon-152-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicon-144-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicon-120-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicon-114-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon-180-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicon-72-precomposed.png"
        />
        <link rel="apple-touch-icon" sizes="57x57" href="favicon-57.png" />
        <link rel="icon" sizes="32x32" href="favicon-32.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="favicon-144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" sizes="192x192" href="favicon-192.png" />
      </Head>
      <Header />
      {children}
      <Toaster />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
