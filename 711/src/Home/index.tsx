import idolLin from "~/assets/images/idol-lin.png";
import missionPic from "~/assets/images/mission-idx-pic.png";

const Home = () => {
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
              <div className="btn btn-style1 W(250px) btn-animat">
                <div>立即GO ►</div>
              </div>
            </div>
            <div className="btn-box">
              <div className="btn btn-style2 W(250px) ">
                <div>活動辦法</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
