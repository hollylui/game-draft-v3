import Head from "next/head";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK: Education App</title>
        <meta name="description" content="Generated by GK" />

        {/*THis is our icon, it can be changed later */}
        <link rel="icon" href="/children.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Welcome to GK Education App</h1> */}
        <Navbar />
      </main>
    </div>
  );
}
