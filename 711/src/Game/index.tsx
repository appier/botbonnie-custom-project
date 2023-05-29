import { useCallback, useState } from "react";
import animation from "~/assets/images/animation-loading.gif";
import finger from "~/assets/images/icon-finger.svg";
import Game1 from "~/assets/images/game_01.jpg";
import Game2 from "~/assets/images/game_02.jpg";
import Game3 from "~/assets/images/game_03.jpg";
import Game4 from "~/assets/images/game_04.jpg";
import DrawAnimation from "~/assets/images/btn_act.gif";
import Result from "./Result";

const Game = () => {
  const [drawIndex, setDrawIndex] = useState<number>();
  const [isFetching, setFetching] = useState<boolean>(false);
  const [prizeKey, setPrizeKey] = useState("");

  const handleDraw = useCallback(
    (e: React.SyntheticEvent) => {
      if (e.target instanceof HTMLImageElement && !isFetching) {
        const gameIndex = e.target.dataset.game;
        if (gameIndex) {
          setFetching(true);
          setDrawIndex(Number(gameIndex));
          setTimeout(() => {
            setPrizeKey("prize_02");
            setFetching(false);
          }, 2200);
        }
      }
    },
    [isFetching]
  );

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

            {prizeKey ? (
              <Result prizeKey={prizeKey} />
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
