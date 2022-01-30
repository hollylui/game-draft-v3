//! From library
import { useContext, useEffect } from "react";
import Image from "next/image";

//! From local
import AppContext from "../../context/AppContext";
import clientPromise from "../../lib/mongodb";
import gameLandingImg from "../../assets/images/volcano/landing.jpg";
import Start from "../../components/Start";
import Navbar from "../../components/Navbar";

//! Styles
import gameLandingStyles from "../../styles/gamelanding.module.scss";

export default function GameLanding({ games }) {
  const { index, setIndex, setData } = useContext(AppContext);

  useEffect(() => {
    setData(games);
  }, []);

  return (
    <div className={gameLandingStyles.container}>
      <Navbar />
      <div className={gameLandingStyles.landing}>
        <Image src={gameLandingImg} alt="game background" layout="responsive" />
        <div className={gameLandingStyles.position}>
          <h1>{games[index].title}</h1>
          <Start />
        </div>
      </div>
    </div>
  );
}

//! Data Fetching----------------------------------------------------
export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("final_project");

    const data = await db.collection("volcano_v2").find({}).toArray();
    const games = JSON.parse(JSON.stringify(data));

    return {
      props: { games },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
