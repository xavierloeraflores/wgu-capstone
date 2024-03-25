import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Header />
      <main
        className={`font-sans ${inter.variable} justify-center" flex min-h-screen flex-col items-center bg-background`}
      >
        <Component {...pageProps} />
        <Toaster />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
