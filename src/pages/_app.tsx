import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

globalStyles(); // This is the line that is causing the error

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
