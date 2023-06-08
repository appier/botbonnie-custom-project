import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import List from "./List";

import styles from "./index.module.scss";
import Empty from "./Empty";
import { RecordTypes } from "./Record";
import { getHistory } from "~/api/campaign";
import useAuth from "~/hooks/useAuth";
import Prize from "./Prize";
import useNavigate from "~/hooks/useNavigate";
import { ROUTE_KEY } from "~/constants/route";

const RecordPage: React.FC = () => {
  const { kitId } = useAuth();
  const navigate = useNavigate();
  const { search } = useLocation();
  const [isFetching, setFetching] = useState(false);
  const [records, setRecords] = useState<RecordTypes[]>([]);

  const selectedRecordId = useMemo(() => {
    const { historyId } = queryString.parse(search);
    return historyId;
  }, [search]);

  const displayRecord = useMemo(() => {
    return records.find(
      (record) => String(record.historyId) === selectedRecordId
    );
  }, [records, selectedRecordId]);

  const viewPrize = useCallback((id: string) => {
    navigate(ROUTE_KEY.HISTORY, {
      historyId: id,
    });
  }, []);

  useEffect(() => {
    setFetching(true);
    getHistory({
      kitId,
    }).then((data) => {
      if (data) setRecords(data);
      setFetching(false);
    });
  }, [kitId]);

  if (displayRecord) return <Prize prize={displayRecord} redeem={() => {}} />;
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
              viewPrize={viewPrize}
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
