import Image from "next/image";

import DisplayMap from "../assets/images/volcano/display_map.png";

export default function Map() {
  return (
    <div>
      <Image src={DisplayMap} alt="map" />
    </div>
  );
}
