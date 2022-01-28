//! From Library
import { useContext } from "react";
import Image from "next/image";

//! From local
import AppContext from "../context/AppContext";
import CharacterName from "./CharacterName";
import Age from "./Age";
import QuestionTypes from "./QuestionTypes";

//! Styles
import gameContentStyles from "../styles/gamecontent.module.scss";

//! Images
import displayMap from "../assets/images/volcano/display_map.png";
import backpack from "../assets/images/volcano/backpack.png";

export default function GameContent({ game }) {
  const { index, name } = useContext(AppContext);

  return (
    <div className={gameContentStyles.container}>
      <div className={gameContentStyles.content}>
        <div>
          {index === 3 && <span>{name}, </span>}
          {game.message}
        </div>

        {/* index 2 */}
        {index === 2 && <CharacterName />}

        {/* index 3 */}
        {index === 3 && <Age />}

        {/* index 4 */}
        {index === 4 && <QuestionTypes />}

        {/* index 5 */}
        {index === 5 && (
          <div className={gameContentStyles.mapAndBackpack}>
            <div className={gameContentStyles.image}>
              <Image src={displayMap} />
            </div>
            <div className={gameContentStyles.image}>
              <Image src={backpack} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
