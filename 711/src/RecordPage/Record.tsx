import React, { useMemo, useState } from "react";
import cx from "classnames";
import get from "lodash/get";

import DirectionIcon from "./direction.svg";
import styles from "./List.module.scss";
import moment from "moment";

import defaultGift from "./default-gift.png";

const RECORD_STATUS = {
  TO_BE_REDEEMED: "TO_BE_REDEEMED",
  ONLY_CHECK: "ONLY_CHECK",
  ALREADY_REDEEMED: "ALREADY_REDEEMED",
  NO_NEED_TO_REDEEM: "NO_NEED_TO_REDEEM",
  EXPIRED: "EXPIRED",
};

export interface RecordTypes {
  historyId: string;
  name: string;
  redeemPeriod: number;
  redeemTime: number;
  expired: boolean;
  timestamp: number;
  needRedeem: number;
  value?: string;
  image?: {
    url: string;
  };
}

interface Props {
  data: RecordTypes;
  viewPrize: () => void;
}

const Record: React.FC<Props> = ({ data, viewPrize }) => {
  const { historyId, name, timestamp, redeemPeriod, image = {} } = data;

  const buttonStatus = useMemo(() => {
    if (data.needRedeem !== 1 && !data.value) {
      return RECORD_STATUS.NO_NEED_TO_REDEEM;
    }
    if (data.redeemTime) {
      return RECORD_STATUS.ALREADY_REDEEMED;
    }
    if (data.expired) {
      return RECORD_STATUS.EXPIRED;
    }
    return data.value ? RECORD_STATUS.ONLY_CHECK : RECORD_STATUS.TO_BE_REDEEMED;
  }, [data]);

  const button = useMemo(() => {
    return (
      <div
        className={styles.button}
        onClick={(e) => {
          e.stopPropagation();
          // viewPrize({
          //   kitId: get(campaign, "id", ""),
          //   historyId,
          // });
        }}
      >
        查看
      </div>
    );
  }, [buttonStatus, viewPrize, historyId]);

  return (
    <div className={styles.record}>
      <div className={styles.innerContainer}>
        <div className={styles.informationWrapper}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${get(image, "url") || defaultGift})`,
            }}
          />
          <div className={styles.information}>
            <div className={styles.prizeName}>{name}</div>

            <div className={styles.tagInfo}>
              <div className={cx(styles.tag, { [styles.purple]: true })}>
                有效期限
              </div>
              <span className={styles.info}>
                {redeemPeriod
                  ? moment(get(redeemPeriod, "end")).format("YYYY-MM-DD")
                  : "無期限"}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>{button}</div>
      </div>
      <div className={styles.bottomLine} />
    </div>
  );
};

export default Record;
