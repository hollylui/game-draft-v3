import { useState } from "react";
import "../styles/globals.css";

import AppContext from "../context/AppContext";
import GameProvider from "../context/GameProvider";

function MyApp({ Component, pageProps }) {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [expand, setExpand] = useState(false);
  const [branchOne, setBranchOne] = useState(null);
  const [branchIndex, setBranchIndex] = useState(0);
  const [branchData, setBranchData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        index,
        setIndex,
        start,
        setStart,
        data,
        setData,
        name,
        setName,
        expand,
        setExpand,
        branchOne,
        setBranchOne,
        branchIndex,
        setBranchIndex,
        branchData,
        setBranchData,
      }}
    >
      <GameProvider>
        <Component {...pageProps} />
      </GameProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
