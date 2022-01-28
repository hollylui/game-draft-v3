//! From Libarary
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";

//! From local
import BackBtn from "../assets/images/volcano/back.png";
import NextBtn from "../assets/images/volcano/next.png";
import AppContext from "../context/AppContext";

//! Styles
import FooterStyles from "../styles/footer.module.scss";

export default function Footer() {
  const router = useRouter();
  const { index, setIndex, data, name } = useContext(AppContext);

  const nextHandler = () => {
    //store _id into localstorage
    localStorage.setItem("_id", `${data[index + 1]._id}`);

    //setTimeout on index update as it is faster than router.push
    setTimeout(() => {
      setIndex(index + 1);
    }, 400);

    //save name into localstore
    if (index === 2) {
      localStorage.setItem("name", name);
    }
    router.push(`/volcano/${data[index + 1]._id}`);
  };

  const backHandler = () => {
    //store _id into localstorage
    localStorage.setItem("_id", `${data[index - 1]._id}`);

    //setTimeout on index update as it is faster than router.push
    setTimeout(() => {
      setIndex(index - 1);
    }, 400);

    if (index === 1) {
      router.push(`/volcano/`);
    } else {
      router.push(`/volcano/${data[index - 1]._id}`);
    }
  };

  return (
    <div className={FooterStyles.container}>
      {/* back button ---------------------------- */}
      <div className={FooterStyles.btnSize}>
        <Image src={BackBtn} alt="back button" onClick={backHandler} />
      </div>
      <div></div>

      {/* next button ------------------------- */}
      <div className={FooterStyles.btn}>
        <Image src={NextBtn} alt="next button" onClick={nextHandler} />
      </div>
    </div>
  );
}
