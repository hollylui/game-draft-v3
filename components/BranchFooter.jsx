//! From Libarary
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";

//! From local

//! Images
import BackBtn from "../assets/images/volcano/back.png";
import NextBtn from "../assets/images/volcano/next.png";
import Main_Backpack from "../assets/images/volcano/Main_Backpack.png";
import AnimalCounter from "../assets/images/volcano/Animal_counter.png";
import AppContext from "../context/AppContext";

//! Styles
import BranchFooterStyles from "../styles/branchFooter.module.scss";

export default function BranchFooter() {
  const router = useRouter();
  const { branchIndex, setBranchIndex, data, setIndex } =
    useContext(AppContext);

  const backHandler = () => {
    if (branchIndex === 0) {
      setIndex(12);
      router.push(`/volcano/${data[12]._id}`);
    }
    setBranchIndex(branchIndex - 1);
  };

  const nextHandler = () => {
    if (branchIndex === 5) {
      setIndex(13);
      router.push(`/volcano/${data[13]._id}`);
    }
    setBranchIndex(branchIndex + 1);
  };

  return (
    <div className={BranchFooterStyles.container}>
      {/* back button ------------------------------------- */}
      <div className={BranchFooterStyles.btn} onClick={backHandler}>
        <Image src={BackBtn} alt="back button" />
      </div>

      {/* content ---------------------------------------------- */}
      <div className={BranchFooterStyles.collection}>
        <span className={BranchFooterStyles.backpack}>
          <Image src={Main_Backpack} width={350} height={90} />
        </span>
        <Image src={AnimalCounter} width={110} height={80} />
      </div>

      {/* next button ------------------------------------- */}
      <div className={BranchFooterStyles.btn}>
        <Image src={NextBtn} alt="next button" onClick={nextHandler} />
      </div>
    </div>
  );
}
