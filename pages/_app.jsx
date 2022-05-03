import React from "react";
import LayOut from "../components/LayOut";
import "../styles/globals.css";

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </>
  );
};

export default _app;
