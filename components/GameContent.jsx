//! From Library
import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
import largeMap from "../assets/images/volcano/Large_map.png";
import mainBackpack from "../assets/images/volcano/Main_backpack.png";
import stick from "../assets/images/volcano/stick.png";
import icicle from "../assets/images/volcano/geology-g599597b68_1280.png";
import animalCounter from "../assets/images/volcano/Animal_counter.png";
import sign from "../assets/images/volcano/sign.png";
import cave from "../assets/images/volcano/cave-gd28422ff0_1280.png";
import bridge from "../assets/images/volcano/bridge-ge07550da5_1920.png";
import cube from "../assets/images/volcano/rubiks-cube-157058_1280.png";

export default function GameContent({ game }) {
  const router = useRouter();
  const { index, name, expand, setExpand, setBranchOne } =
    useContext(AppContext);

  const closeHandler = () => {
    setExpand(!expand);
  };

  const branchOneHandler = () => {
    setBranchOne("branch1_1");

    router.push("/volcano/branchone");
  };

  const branchTwoHandler = () => {
    setBranchOne("branch1_2");

    router.push("/volcano/branchone");
  };

  return (
    <div className={gameContentStyles.container}>
      <div className={gameContentStyles.content}>
        <div>{index === 6 && <h3>{game.title}</h3>}</div>
        <div
          className={index === 12 ? gameContentStyles.indexTwelveMessage : ""}
        >
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
        {index === 5 ||
          (index === 6 && (
            <div className={gameContentStyles.mapAndBackpack}>
              <div className={gameContentStyles.image}>
                <Image src={displayMap} />
              </div>
              <div className={gameContentStyles.image}>
                <Image src={backpack} />
              </div>
            </div>
          ))}

        {/* index 6 */}
        {index === 6 && (
          <div className={gameContentStyles.hint}>Hint: {game.hint}</div>
        )}

        {/* large map */}
        {expand && (
          <div className={gameContentStyles.largeMap}>
            <Image src={largeMap} />
            <div
              className={gameContentStyles.close}
              onClick={closeHandler}
            ></div>
          </div>
        )}

        {/* index 8 */}
        {index === 8 && (
          <div className={gameContentStyles.indexEight}>
            <div className={gameContentStyles.mainBackpack}>
              <Image src={mainBackpack} />
            </div>
            <div className={gameContentStyles.stick}>
              <Image src={stick} />
            </div>
            <div className={gameContentStyles.icicle}>
              <Image src={icicle} />
            </div>
          </div>
        )}

        {/* index 9 */}
        {index === 9 && (
          <div className={gameContentStyles.indexNine}>
            <Image src={animalCounter} />
          </div>
        )}

        {/* index 11 */}
        {index === 11 && (
          <div className={gameContentStyles.indexEleven}>
            <Image src={sign} />
          </div>
        )}

        {/* index 12 */}
        {index === 12 && (
          <div className={gameContentStyles.indexTwelve}>
            <div
              className={gameContentStyles.crossroad}
              onClick={branchOneHandler}
            >
              <Image src={bridge} />
            </div>
            <div
              className={gameContentStyles.crossroad}
              onClick={branchTwoHandler}
            >
              <Image src={cave} />
            </div>
          </div>
        )}

        {/* index 13 */}
        {index === 13 && (
          <div className={gameContentStyles.indexThirdteen}>
            <Image src={cube} />
          </div>
        )}
      </div>
    </div>
  );
}
