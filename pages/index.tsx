import Head from "next/head";

import { Cover } from "../modules/Cover";
import { Layout } from "../modules/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rafael Giro</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main> */}
      <Cover />
      {/* </main> */}
    </Layout>
  );
}
