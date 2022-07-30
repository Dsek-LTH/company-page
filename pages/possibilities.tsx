import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layout/MainLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Företag | D-Sektionen inom TLTH</title>
        <meta
          name="description"
          content="Lär dig mer om hur du kan på bästa sättet synas inför våra studenter!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Möjligheter
    </>
  );
};

export default Home;
