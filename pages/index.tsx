import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layout/MainLayout";
import styles from "../styles/Home.module.css";
import bg from "../public/images/landing-header.jpg";

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
      <div className="absolute left-0 top-0 right-0 ">
        <div
          className="relative h-[50vh] min-h-[400px] w-[calc(100vw)]"
          style={{
            backgroundImage: `url('./images/landing-header.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
