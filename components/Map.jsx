//! From library
import Image from "next/image";
import { useContext } from "react";

//! From local
import DisplayMap from "../assets/images/volcano/display_map.png";

import AppContext from "../context/AppContext";

//! Styles
import MapStyles from "../styles/map.module.scss";

export default function Map() {
  const { expand, setExpand } = useContext(AppContext);

  const expandHandler = () => {
    setExpand(!expand);
  };

  return (
    <div className={MapStyles.container}>
      <div className={MapStyles.map}>
        <Image src={DisplayMap} alt="map" />
        <div className={MapStyles.expand} onClick={expandHandler}></div>
      </div>
    </div>
  );
}
