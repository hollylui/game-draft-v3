//! From Library

//! From local

//! Styles
import ageStyles from "../styles/age.module.scss";

export default function Age() {
  return (
    <div>
      <div>
        <button className={ageStyles.button}>1</button>
        <button className={ageStyles.button}>2</button>
        <button className={ageStyles.button}>3</button>
      </div>
      <div>
        <button className={ageStyles.button}>4</button>
        <button className={ageStyles.button}>5</button>
        <button className={ageStyles.button}>6</button>
      </div>
      <div>
        <button className={ageStyles.button}>7</button>
        <button className={ageStyles.button}>8</button>
        <button className={ageStyles.button}>9+</button>
      </div>
    </div>
  );
}
