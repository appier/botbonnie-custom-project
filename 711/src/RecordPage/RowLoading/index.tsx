import React from "react";
import Lottie from "react-lottie";
import cx from "classnames";

import RowAnimation from "./Row.json";
import styles from "./index.module.scss";

interface Props {
  numOfRow?: number;
  className?: string;
}

const RowLoading: React.FC<Props> = ({ numOfRow = 3, className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      {Array(numOfRow)
        .fill(0)
        .map(() => (
          <>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: RowAnimation,
                rendererSettings: {
                  preserveAspectRatio: "none",
                },
              }}
              height="92px"
            />
            <div className={styles.divider} />
          </>
        ))}
    </div>
  );
};

export default RowLoading;
