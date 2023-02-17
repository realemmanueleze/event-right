import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Head>
      <title>Event Right</title>
      <meta name="description" content="All your event in a single place" />
    </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
