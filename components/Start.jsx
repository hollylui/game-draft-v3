import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import StartStyles from "../styles/start.module.scss";
import AppContext from "../context/AppContext";

export default function Start() {
  const { index, setIndex, setStart, data } = useContext(AppContext);

  const router = useRouter();

  const startHandler = () => {
    setStart(true);
    setTimeout(() => {
      setIndex(index + 1);
    }, 1000);
    router.push(`volcano/${data[index + 1]._id}`);
  };

  return (
    <div className={StartStyles.btn} onClick={startHandler}>
      Start
    </div>
  );
}
