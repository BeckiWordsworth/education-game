import { createGlobalStyle } from "styled-components";
import Header from "../components/header/Header";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;
