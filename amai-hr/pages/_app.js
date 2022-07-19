import Layout from "../pages/Components/Layout";
import { AuthProvider } from "../context/auth";
import LastSeen from "./Components/LastSeen";
import "../public/assets/pages/css/todo.css";
import "../styles/global-styles.css";
import Router from "next/router";
import Spinner from "react-spinner-material";
import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
const Dot = styled.span`
  margin: 0;
  position: absolute;
  top: 10%;
  left: 60%;
  margin-right: -50%;
`;

export default function MyApp({ Component, pageProps, datar }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  const { asPath } = useRouter();

  return (
    <>
      {loading ? (
        <AuthProvider>
          {" "}
          <LastSeen>
            <Layout>
              <Dot>
                <Spinner
                  size={350}
                  spinnerColor={"red"}
                  spinnerWidth={2}
                  visible={true}
                  color={"#3498DB"}
                />{" "}
              </Dot>
            </Layout>
          </LastSeen>{" "}
        </AuthProvider>
      ) : (
        <AuthProvider>
          {" "}
          {asPath === "/login" ? (
            <LastSeen>
              {" "}
              <Component {...pageProps} />{" "}
            </LastSeen>
          ) : (
            <LastSeen>
              <Layout>
                <Component {...pageProps} />{" "}
              </Layout>
            </LastSeen>
          )}{" "}
        </AuthProvider>
      )}
    </>
  );
}
