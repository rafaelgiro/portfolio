import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { Cover } from "../modules/Cover";
import { Layout } from "../modules/Layout";

import { ThemesType } from "../modules/Layout/interfaces";

interface Props {
  initialTheme: ThemesType;
}

const Home: NextPage<Props> = ({ initialTheme }) => {
  return (
    <Layout initialTheme={initialTheme}>
      <Head>
        <title>Rafael Giro</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover />
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  console.log(req?.headers["x-real-ip"]);
  return { initialTheme: "morning" };
};

export default Home;
