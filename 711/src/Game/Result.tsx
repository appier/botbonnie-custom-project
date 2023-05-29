import { useMemo } from "react";
import Prize1 from "~/assets/images/prize_01.png";
import Prize2 from "~/assets/images/prize_02.png";
import Prize3 from "~/assets/images/prize_03.png";
import Prize4 from "~/assets/images/prize_03.png";

interface Props {
  prizeKey: string;
}

const Result: React.FC<Props> = ({ prizeKey }) => {
  const prizes = useMemo(() => {
    return [
      {
        id: "prize_01",
        text: "指定冰品任2件0元",
        imageUrl: Prize1,
      },
      {
        id: "prize_02",
        text: "指定冰品任2件5折",
        imageUrl: Prize2,
      },
      {
        id: "prize_03",
        text: "指定冰品任2件7折",
        imageUrl: Prize3,
      },
      {
        id: "prize_04",
        text: "指定冰品任2件9折",
        imageUrl: Prize4,
      },
    ];
  }, []);

  const result = useMemo(() => {
    return prizes.find((prize) => prize.id === prizeKey);
  }, [prizeKey]);
  return (
    <>
      <div className="prize">
        <div>
          <div className="prize-box">
            <img src={Prize1} alt="" />
          </div>
          <p>
            恭喜獲得
            <br />
            <span>{result?.text || ""}</span>
            <br />
            請至{" "}
            <a href="notexist.html?act=GoMyRewards">
              <span className="note">我的好康</span> {">"}{" "}
              <span className="note">活動贈獎</span>
            </a>{" "}
            查詢中獎條碼
          </p>
          <div className="flex w-full flex-row">
            <div className="btn btn-style1 flex-1">
              <div>再試一次</div>
            </div>
            <div className="btn btn-style2 flex-1">
              <div>回首頁</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
