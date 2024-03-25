import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <main className={`font-sans ${inter.variable} bg-background`}>
        <Component {...pageProps} />
        <Toaster />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
