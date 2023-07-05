import { useCallback, useState } from "react";
import { atom, useAtom } from "jotai";

import idolLin from "~/assets/images/idol-lin.png";
import missionPic from "~/assets/images/mission-idx-pic.png";
import useNavigate from "~/hooks/useNavigate";
import { ROUTE_KEY } from "~/constants/route";

import { checkUserQuota, getShareLink } from "../api/campaign";
import useAuth from "../hooks/useAuth";

export const quotaAtom = atom(0);

const Home = () => {
  const user = useAuth();
  const navigate = useNavigate();
  const [, setQuota] = useAtom(quotaAtom);
  const [isFetching, setFetching] = useState(false);

  const goToDraw = useCallback(() => {
    checkUserQuota({ kitId: user.kitId })
      .then((res) => {
        setQuota(res?.remaining ?? 0);
        if (res?.remaining > 0) {
          navigate(ROUTE_KEY.GAME);
        } else {
          window.alert("您今天已經到達抽獎上限次數囉 請明天再來參加");
        }
      })
      .catch((err) => {
        const { message } = err?.response?.data || {};
        if (message) window.alert(message);
      });
  }, [user, checkUserQuota]);

  const goToRule = useCallback(() => {
    navigate(ROUTE_KEY.RULE);
  }, [navigate]);

  const getLink = useCallback(async () => {
    if (!isFetching) {
      setFetching(true);
      const { url } = await getShareLink({
        kitId: user.kitId,
      });

      if (url) {
        window.location.href = url;
      }
      setFetching(false);
    }
  }, [isFetching]);

  return (
    <section className="wrap">
      <div>
        <div className="container">
          <div className="navToggle">
            <div className="icon"></div>
          </div>
          <div id="menu">
            <ul>
              <li>
                <a href="index.html">回首頁</a>
              </li>
              <li>
                <a href="rule.html">活動辦法</a>
              </li>
            </ul>
          </div>
          <div className="title-idx"></div>
          <div className="title-idol">
            <div className="title-pic2">
              <img src={idolLin} alt="" />
            </div>
          </div>
          <div className="mission-pic">
            <img src={missionPic} alt="" />
          </div>
          <div className="idx_info">
            <p className="idx-text_box">
              活動日期:2023/05/17~06/27
              <br />
              <span>每人每天2次機會</span>
            </p>

            <div className="btn-box">
              <div
                className="btn btn-style1 W(250px) btn-animat"
                onClick={goToDraw}
              >
                <div>立即GO ►</div>
              </div>
            </div>
            <div className="btn-box">
              <div className="btn btn-style2 W(250px)" onClick={goToRule}>
                <div>活動辦法</div>
              </div>
            </div>

            <div className="btn-box">
              <div className="btn btn-style2 W(250px)" onClick={getLink}>
                <div className="relative">
                  分享好友
                  {isFetching && (
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 translate-x-2">
                      <div className="w-5 h-5 border-[3px] border-t-white border-[#c9c9c952] rounded-full animate-spin" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
