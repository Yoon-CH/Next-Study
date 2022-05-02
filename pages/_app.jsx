import React from "react";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </>
  );
};

export default _app;
