import React from "react";
import Head from "next/head";

const HeadName = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </>
  );
};

export default HeadName;
