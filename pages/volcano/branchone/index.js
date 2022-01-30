//! From library
import { useContext, useState, useEffect } from "react";

//! From local
import clientPromise from "../../../lib/mongodb";
import Navbar from "../../../components/Navbar";
import Map from "../../../components/Map";
import Branch from "../../../components/Branch";
import BranchFooter from "../../../components/BranchFooter";
import AppContext from "../../../context/AppContext";

//! From images

//! Styles
import BranchOneStyles from "../../../styles/branchOne.module.scss";

export default function BranchOne({ branch1_1, branch1_2 }) {
  const { branchOne, setBranchIndex, branchData, setBranchData } =
    useContext(AppContext);

  const data = async () => {
    if (branchOne === "branch1_1") await setBranchData(branch1_1);
    if (branchOne === "branch1_2") await setBranchData(branch1_2);
  };

  useEffect(() => {
    data();
    setBranchIndex(0);
  }, []);

  return (
    <div className={BranchOneStyles.container}>
      <Navbar />
      <div className={BranchOneStyles.content}>
        <Map />
        {branchData && <Branch />}
      </div>
      <BranchFooter />
    </div>
  );
}

// ----------------------------------------------------------------------
export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("final_project");

    const branch1_1_data = await db.collection("branch1_1").find({}).toArray();
    const branch1_2_data = await db.collection("branch1_2").find({}).toArray();
    const branch1_1 = JSON.parse(JSON.stringify(branch1_1_data));
    const branch1_2 = JSON.parse(JSON.stringify(branch1_2_data));
    return {
      props: { branch1_1, branch1_2 },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
