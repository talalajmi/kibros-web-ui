import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, AdminNavbar, Navbar, PublicFooter } from "../components";
import { useRouter } from "next/router";
import { AuthorizationRoutes, customPages, publicRoutes } from "../routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { materialUiTheme } from "../constants/MaterialUiTheme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (
    Object.values(AuthorizationRoutes).includes(router.pathname) ||
    Object.values(customPages).includes(router.pathname)
  ) {
    return <Component {...pageProps} />;
  } else if (Object.values(publicRoutes).includes(router.pathname)) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={materialUiTheme}>
          <Navbar />
          <Toaster
            position="top-right"
            toastOptions={{ className: "react-hot-toast" }}
          />
          <Component {...pageProps} />
          <PublicFooter />
        </ThemeProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={materialUiTheme}>
        <div className="flex h-screen flex-col justify-between font-sans">
          <header className="sticky top-0 z-50">
            <AdminNavbar />
          </header>
          <main>
            <Toaster
              position="top-right"
              toastOptions={{ className: "react-hot-toast" }}
            />
            <Component {...pageProps} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
