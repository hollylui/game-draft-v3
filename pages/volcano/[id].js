//! From library

//! From local
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Map from "../../components/Map";
import GameContent from "../../components/GameContent";

//! Style
import idStyles from "../../styles/id.module.scss";

export default function GameStart({ game }) {
  return (
    <div className={idStyles.container}>
      <Navbar />
      <div className={idStyles.content}>
        <Map />
        <GameContent game={game} />
      </div>
      <Footer />
    </div>
  );
}

// ---------------------------------------------------------------------
export const getStaticProps = async (context) => {
  const data = await fetch(
    `http://localhost:3000/api/volcanos/${context.params.id}`
  );

  const game = await data.json();

  return {
    props: { game },
  };
};

export const getStaticPaths = async () => {
  const data = await fetch(`http://localhost:3000/api/volcanos/`);
  const games = await data.json();

  const ids = games.map((game) => game._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
