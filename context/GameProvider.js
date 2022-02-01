import { useEffect, useState } from "react";
import GameContext from "./GameContext";

const GameProvider = ({ children }) => {
  const [gameOn, setGameOn] = useState(false);
  const [currentGame, setCurrentGame] = useState("0");
  const [progressValue, setProgressValue] = useState(10);
  const [userItems, setUserItems] = useState([]);

  const [showItems, setShowItems] = useState(true);
  const showNHideItems = () => {
    setShowItems(!showItems);
  };
  return (
    <GameContext.Provider
      value={{
        gameOn,
        setGameOn,
        currentGame,
        setCurrentGame,
        progressValue,
        setProgressValue,
        userItems,
        setUserItems,
        showItems,
        showNHideItems,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
