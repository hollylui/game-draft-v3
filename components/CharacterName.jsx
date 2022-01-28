//! From Library
import { useContext } from "react";

//! From local
import AppContext from "../context/AppContext";

//! Styles
import nameformStyles from "../styles/nameform.module.scss";

export default function CharacterName() {
  const { setName } = useContext(AppContext);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <input
      className={nameformStyles.input}
      type="text"
      id="name"
      name="name"
      placeholder="Type name here"
      onChange={nameHandler}
    />
  );
}
