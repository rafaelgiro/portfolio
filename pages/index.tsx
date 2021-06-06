import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { Cover } from "../modules/Cover";
import { Layout } from "../modules/Layout";

import { ThemesType } from "../modules/Layout/interfaces";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Rafael Giro</title>
        <meta property="og:title" content="Rafael Giro" />
        <meta
          property="og:description"
          content="Hi There! I'm a frontend developer and this is my personal (work in progress) Portfolio!"
        />
        <meta property="og:image" content="/thumbnail.jpg" />
        <meta property="og:url" content="http://rafaelgiro.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover />
    </Layout>
  );
};

export default Home;
