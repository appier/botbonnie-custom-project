import { useCallback, useState } from "react";
import { useAtom } from "jotai";
import animation from "~/assets/images/animation-loading.gif";
import finger from "~/assets/images/icon-finger.svg";
import Game1 from "~/assets/images/game_01.jpg";
import Game2 from "~/assets/images/game_02.jpg";
import Game3 from "~/assets/images/game_03.jpg";
import Game4 from "~/assets/images/game_04.jpg";
import DrawAnimation from "~/assets/images/btn_act.gif";
import Result from "./Result";
import { drawPrize } from "~/api/campaign";
import useAuth from "~/hooks/useAuth";
import { RecordTypes } from "~/RecordPage/Record";
import useNavigate from "~/hooks/useNavigate";
import { ROUTE_KEY } from "~/constants/route";
import { quotaAtom } from "~/Home";

const Game = () => {
  const [drawIndex, setDrawIndex] = useState<number | null>(null);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [prize, setPrize] = useState<RecordTypes | null>(null);
  const [, setQuota] = useAtom(quotaAtom);
  const { kitId } = useAuth();
  const navigate = useNavigate();
  const handleDraw = useCallback(
    (e: React.SyntheticEvent) => {
      if (e.target instanceof HTMLImageElement && !isFetching) {
        const gameIndex = e.target.dataset.game;
        if (gameIndex) {
          setFetching(true);
          setDrawIndex(Number(gameIndex));
          drawPrize({
            kitId,
          })
            .then((res) => {
              setPrize(res);
              setQuota((prev) => prev - 1);
              setFetching(false);
            })
            .catch((err) => {
              const { message } = err.response.data || {};
              if (message) {
                window.alert(message);
                navigate(ROUTE_KEY.HOME);
              }
            });
        }
      }
    },
    [isFetching, kitId]
  );

  const handleRetry = useCallback(() => {
    setDrawIndex(null);
    setPrize(null);
  }, []);

  return (
    <>
      <div className="animation-loading" style={{ display: "none" }}>
        <img src={animation} alt="" />
      </div>

      <section className="wrap">
        <div className="bg">
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

            <div className="title-page"></div>

            {prize ? (
              <Result data={prize} onRetry={handleRetry} />
            ) : (
              <div id="event">
                <div className="gamecard">
                  <ul>
                    <li>
                      <img
                        data-game={0}
                        onClick={handleDraw}
                        src={drawIndex === 0 ? DrawAnimation : Game1}
                      />
                    </li>
                    <li>
                      <img
                        data-game={1}
                        onClick={handleDraw}
                        src={drawIndex === 1 ? DrawAnimation : Game2}
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        data-game={2}
                        onClick={handleDraw}
                        src={drawIndex === 2 ? DrawAnimation : Game3}
                      />
                    </li>
                    <li>
                      <img
                        data-game={3}
                        onClick={handleDraw}
                        src={drawIndex === 3 ? DrawAnimation : Game4}
                      />
                    </li>
                  </ul>
                </div>
                <p className="game-note">
                  請點選上方Start試手氣!
                  <img src={finger} alt="" />
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Game;
