import { useState } from "react";
import "../styles/globals.css";

import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);

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
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
