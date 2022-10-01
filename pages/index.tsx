import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { Layout } from "../modules/Layout";
import { Cover } from "../modules/Cover";
import { About } from "../modules/About";
import { BlogPreview } from "../modules/BlogPreview";
import { Footer } from "../modules/Footer";

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
        <meta
          name="description"
          content="Hi There! I'm a frontend developer and this is my personal (work in progress) Portfolio!"
        />
        <meta property="og:image" content="/thumbnail.jpg" />
        <meta property="og:url" content="http://rafaelgiro.dev" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      <About />
      <BlogPreview />
      <Footer />
    </Layout>
  );
};

export default Home;
