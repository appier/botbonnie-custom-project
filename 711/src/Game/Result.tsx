import { useCallback } from "react";
import { useAtom } from "jotai";

import { RecordTypes } from "~/RecordPage/Record";
import { ROUTE_KEY } from "~/constants/route";
import useNavigate from "~/hooks/useNavigate";
import { quotaAtom } from "~/Home";

interface Props {
  data: RecordTypes;
  onRetry: () => void;
}

const Result: React.FC<Props> = ({ data, onRetry }) => {
  const navigate = useNavigate();
  const [quota] = useAtom(quotaAtom);

  const goToHomePage = useCallback(() => {
    navigate(ROUTE_KEY.HOME);
  }, [navigate]);
  return (
    <>
      <div className="prize">
        <div>
          <div className="prize-box">
            <img src={data?.image?.url} alt="" />
          </div>
          <p>
            恭喜獲得
            <br />
            <span>{data.name || ""}</span>
            <br />
            請至{" "}
            <a href="notexist.html?act=GoMyRewards">
              <span className="note">我的好康</span> {">"}{" "}
              <span className="note">活動贈獎</span>
            </a>{" "}
            查詢中獎條碼
          </p>
          <div className="flex w-full flex-row">
            {quota > 0 && (
              <div className="btn btn-style1 flex-1" onClick={onRetry}>
                <div>再試一次</div>
              </div>
            )}
            <div className="btn btn-style2 flex-1" onClick={goToHomePage}>
              <div>回首頁</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
