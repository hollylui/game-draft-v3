//! From Libarary
import Image from "next/image";
import { useContext } from "react";

//! From local

//! Images
import crossBridge from "../assets/images/volcano/crossing_bridge.png";
import AppContext from "../context/AppContext";
import largeMap from "../assets/images/volcano/Large_map.png";
import monkeyInTree from "../assets/images/volcano/monkey_in_tree.png";
import scorionGuard from "../assets/images/volcano/scorion_guard.png";
import monkey from "../assets/images/volcano/monkey.png";

//! Styles
import BranchStyles from "../styles/branch.module.scss";

export default function Branch() {
  const { expand, setExpand, branchIndex, branchData } = useContext(AppContext);

  const closeHandler = () => {
    setExpand(!expand);
  };
  return (
    <div className={BranchStyles.container}>
      <div className={BranchStyles.content}>
        {/* branch index 0 */}
        {branchIndex === 0 && (
          <div className={BranchStyles.branchIndexZero}>
            <Image src={crossBridge} />
          </div>
        )}

        {/* branch index 1 */}

        {branchIndex > 0 && branchIndex < 5 ? (
          <div className={BranchStyles.branchIndexZero}>
            {/* index 2 */}
            {branchIndex === 2 && (
              <div>
                <Image src={monkeyInTree} />
              </div>
            )}

            {/* index 3 */}
            {branchIndex === 3 && (
              <div>
                <Image src={scorionGuard} />
              </div>
            )}

            {/* message */}
            <p
              className={BranchStyles.message}
              style={{
                top: branchData[branchIndex].position.top,
                left: branchData[branchIndex].position.left,
                right: branchData[branchIndex].position.right || 0,
              }}
            >
              {branchData[branchIndex].message}
            </p>
          </div>
        ) : null}

        {/* index 5 */}
        {branchIndex === 5 && (
          <div className={BranchStyles.branchIndexFive}>
            <div className={BranchStyles.message}>
              Hurray! You have saved the {branchData[branchIndex].savedAnimal},
              and rescued 1 of 5 animals.
            </div>
            <div className={BranchStyles.animal}>
              <Image
                src={`/${branchData[branchIndex].savedAnimal}.png`}
                width={200}
                height={250}
              />
            </div>
          </div>
        )}

        {/* large map */}
        {expand && (
          <div className={BranchStyles.largeMap}>
            <Image src={largeMap} />
            <div className={BranchStyles.close} onClick={closeHandler}></div>
          </div>
        )}
      </div>
    </div>
  );
}
