import React, { useState } from "react";

import List from "./List";

import styles from "./index.module.scss";
import Empty from "./Empty";
import { RecordTypes } from "./Record";

const RecordPage: React.FC = () => {
  const [isFetching, setFetching] = useState(false);
  const [records, setRecords] = useState<RecordTypes[]>([]);
  return (
    <div className={styles.page}>
      {records.length === 0 && !isFetching ? (
        <Empty />
      ) : (
        <>
          <div className={styles.title}>獎項清單</div>
          <div className={styles.innerWrapper}>
            <List
              records={records}
              viewPrize={() => {}}
              isFetching={isFetching}
            />
            {!isFetching && (
              <div className={styles.bottomMessage}>
                <div className={styles.line}>
                  <span>以上為所有獎項</span>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RecordPage;
