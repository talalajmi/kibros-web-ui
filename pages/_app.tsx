import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, AdminNavbar, Navbar, PublicFooter } from "../components";
import { useRouter } from "next/router";
import { AuthorizationRoutes, publicRoutes } from "../routes";
import { ThemeProvider } from "@mui/material/styles";
import { materialUiTheme } from "../constants/MaterialUiTheme";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { customPages } from "../routes/PublicRoutes";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (
    Object.values(AuthorizationRoutes).includes(router.pathname) ||
    Object.values(customPages).includes(router.pathname)
  ) {
    return (
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Component {...pageProps} />;
      </Provider>
    );
  } else if (Object.values(publicRoutes).includes(router.pathname)) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={materialUiTheme}>
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="flex h-screen flex-col justify-between font-sans">
          <AdminNavbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
