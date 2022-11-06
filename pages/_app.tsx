import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme";
import { Footer, Navbar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex h-screen flex-col justify-between">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
