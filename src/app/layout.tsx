import "./globals.css";
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import { childrenType } from "@/interFace/interFace";
export default function RootLayout({ children }: childrenType) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Generated by create next app" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Xiaoyang Mall</title>
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </head>

        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
            <ToastContainer
              position="top-left"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
