import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
import "react-lazy-load-image-component/src/effects/blur.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
    </main>
  );
}
