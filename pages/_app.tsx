import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme";
import { Footer, Navbar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
