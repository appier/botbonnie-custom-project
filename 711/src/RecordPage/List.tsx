import React, { useMemo, useState } from "react";
import cx from "classnames";

import styles from "./List.module.scss";

import Record, { RecordTypes } from "./Record";
import RowLoading from "./RowLoading";

import convertibleActive from "./convertible-active.svg";
import convertibleInactive from "./convertible-inactive.svg";

import redeemedActive from "./redeemed-active.svg";
import redeemedInactive from "./redeemed-inactive.svg";

import expiredActive from "./expired-active.svg";
import expiredInactive from "./expired-inactive.svg";

interface Props {
  records: RecordTypes[];
  viewPrize: (id: string) => void;
  isFetching: boolean;
}

const List: React.FC<Props> = ({ records = [], viewPrize, isFetching }) => {
  const [activeTab, setActiveTab] = useState("convertible");

  const tabs = useMemo(() => {
    return [
      {
        label: "可兌換",
        value: "convertible",
        activeIcon: convertibleActive,
        inactiveIcon: convertibleInactive,
      },
      {
        label: "已兌換",
        value: "redeemed",
        activeIcon: redeemedActive,
        inactiveIcon: redeemedInactive,
      },
      {
        label: "已過期",
        value: "expired",
        activeIcon: expiredActive,
        inactiveIcon: expiredInactive,
      },
    ];
  }, []);

  const displayRecords = useMemo(() => {
    return records.filter((record) => {
      switch (activeTab) {
        case "redeemed": {
          return record.redeemTime;
        }
        case "expired": {
          return record.expired && !record.redeemTime;
        }
        case "convertible":
          return !record.expired && !record.redeemTime;
        default:
          return true;
      }
    });
  }, [records, activeTab]);

  return (
    <div className={styles.list}>
      <div className={styles.tapContainer}>
        {tabs.map((tab) => (
          <div
            className={cx(styles.tap, {
              [styles.active]: activeTab === tab.value,
            })}
            onClick={() => {
              setActiveTab(tab.value);
            }}
          >
            <div className={styles.icon}>
              <img
                src={
                  activeTab === tab.value ? tab.activeIcon : tab.inactiveIcon
                }
              />
            </div>
            <div className={styles.name}>{tab.label}</div>
            {activeTab === tab.value && <div className={styles.bottomLine} />}
          </div>
        ))}
      </div>
      {isFetching ? (
        <RowLoading />
      ) : (
        displayRecords.map((record) => (
          <Record data={record} key={record.historyId} viewPrize={viewPrize} />
        ))
      )}
    </div>
  );
};

export default List;
