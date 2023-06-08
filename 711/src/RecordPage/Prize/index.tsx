import React, { useMemo, useState } from "react";
import moment from "moment";
import get from "lodash/get";
import cx from "classnames";

import {
  BAR_CODE_FORMAT,
  RECORD_SUBTYPE,
  REDEEM_TYPE,
} from "~/constants/campaign";
import { checkIsAndroid } from "~/utils/device";
import Button from "~/WebviewCommon/Button";
import Barcode from "~/WebviewCommon/Barcode";

import copyIcon from "./copy.svg";
import copiedIcon from "./copied.svg";
import defaultImage from "./default-image.png";
import styles from "./index.module.scss";

interface props {
  prize: {
    historyId: string;
    name: string;
    needRedeem: number;
    subtype?: string;
    value?: string;
    expired: boolean;
    redeemTime?: number;
    redeemPeriod?: {
      end: number;
    };
  };
  redeem: () => void;
}

const Prize: React.FC<props> = ({ prize, redeem }) => {
  const redeemType = useMemo(() => {
    if (prize.subtype === RECORD_SUBTYPE.URL) return REDEEM_TYPE.URL;
    if (prize.subtype && Object.keys(BAR_CODE_FORMAT).includes(prize.subtype))
      return REDEEM_TYPE.BAR_CODE;
    if (prize.value && !prize.subtype) return REDEEM_TYPE.SERIAL_NUMBER;
    if (prize.needRedeem === 1) return REDEEM_TYPE.PHYSICAL;
    return REDEEM_TYPE.MESSAGE;
  }, [prize]);

  const [textCopied, setTextCopied] = useState(false);
  const isAndroid = useMemo(() => {
    return checkIsAndroid();
  }, []);

  const handleCopySerialNumber = () => {
    navigator.clipboard.writeText(prize.value || "").then(() => {
      setTextCopied(true);
    });
  };

  const renderButton = () => {
    if (prize.expired) {
      return (
        <Button disabled className={styles.redeemButton}>
          已過期
        </Button>
      );
    }

    return (
      <>
        {redeemType === REDEEM_TYPE.BAR_CODE && (
          <div className={styles.barcode}>
            <Barcode
              value={prize.value}
              format={BAR_CODE_FORMAT[prize.subtype || ""]}
              displayValue
              fontSize={12}
            />
          </div>
        )}
        {redeemType === REDEEM_TYPE.SERIAL_NUMBER && (
          <div className={styles.snWrapper}>
            <div
              className={cx(styles.text, { [styles.alignCenter]: isAndroid })}
            >
              {prize.value}
            </div>
            {!isAndroid && (
              <>
                {textCopied ? (
                  <img className={styles.icon} src={copiedIcon} />
                ) : (
                  <img
                    className={styles.icon}
                    src={copyIcon}
                    onClick={handleCopySerialNumber}
                  />
                )}
              </>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <div className={styles.PageWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.imageBox}>
          <img src={get(prize, "image.url") || defaultImage} />
        </div>
        <div className={styles.title}>恭喜！</div>
        <div className={styles.name}>{prize.name}</div>
        {renderButton()}
        {get(prize, "redeemPeriod.end", undefined) && (
          <div className={styles.expirationDate}>
            {`有效期限： ${moment(prize?.redeemPeriod?.end).format(
              "YYYY-MM-DD"
            )}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Prize;
