import Image from "next/image";
import { useState } from "react";

import MusicOff from "../assets/images/volcano/music_off.png";
import MusicOn from "../assets/images/volcano/music_on.png";
import SoundOn from "../assets/images/volcano/sound_effects_on.png";
import SoundOff from "../assets/images/volcano/sound_effects_off.png";
import Menu from "../assets/images/volcano/Menu.png";
import NavbarStyles from "../styles/navbar.module.scss";

export default function Navbar() {
  const [mute, setMute] = useState(false);
  const [sound, setSound] = useState(false);

  const MusicOnOffHandler = () => {
    setMute(!mute);
  };

  const SoundOnOffHander = () => {
    setSound(!sound);
  };

  return (
    <nav className={NavbarStyles.container}>
      {/* Music control --------------------------------------*/}
      <div className={NavbarStyles.musicControl}>
        <div className={NavbarStyles.margin}>
          {mute ? (
            <div onClick={MusicOnOffHandler}>
              <Image src={MusicOff} alt="music off" />
            </div>
          ) : (
            <div onClick={MusicOnOffHandler}>
              <Image src={MusicOn} alt="music on" />
            </div>
          )}
        </div>
        <div className={NavbarStyles.margin}>
          {sound ? (
            <div onClick={SoundOnOffHander}>
              <Image src={SoundOff} alt="sound off" />
            </div>
          ) : (
            <div onClick={SoundOnOffHander}>
              <Image src={SoundOn} alt="sound on" />
            </div>
          )}
        </div>
      </div>

      {/* Menu setting ------------------------------- */}
      <div className={`${NavbarStyles.menu} ${NavbarStyles.margin}`}>
        <Image src={Menu} />
      </div>
    </nav>
  );
}
