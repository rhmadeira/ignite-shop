import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";
import logoImg from "../assets/Logo.svg";
import Image from "next/image";

globalStyles(); // This is the line that is causing the error

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
