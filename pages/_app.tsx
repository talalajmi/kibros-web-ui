import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, AdminNavbar, Navbar, PublicFooter } from "../components";
import { useRouter } from "next/router";
import { AuthorizationRoutes, customPages, publicRoutes } from "../routes";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { materialUiTheme } from "../constants/MaterialUiTheme";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (
    Object.values(AuthorizationRoutes).includes(router.pathname) ||
    Object.values(customPages).includes(router.pathname)
  ) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    );
  } else if (Object.values(publicRoutes).includes(router.pathname)) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={materialUiTheme}>
          <Navbar />
          <Toaster
            position="top-right"
            toastOptions={{ className: "react-hot-toast" }}
          />
          <Component {...pageProps} />
          <PublicFooter />
        </ThemeProvider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
