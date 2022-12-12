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
import "../styles/react-dataTable-component.scss";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (
    Object.values(AuthorizationRoutes).includes(router.pathname) ||
    Object.values(customPages).includes(router.pathname)
  ) {
    return (
      <AuthProvider>
        <Provider store={store}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
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
      </AuthProvider>
    );
  } else if (Object.values(publicRoutes).includes(router.pathname)) {
    return (
      <AuthProvider>
        <Provider store={store}>
          <ThemeProvider theme={materialUiTheme}>
            <Navbar />
            <ToastContainer
              position="top-right"
              autoClose={3000}
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
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <Provider store={store}>
          <ThemeProvider theme={materialUiTheme}>
            <ToastContainer
              position="top-right"
              autoClose={3000}
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
      </AuthProvider>
    );
  }
}

export default MyApp;
