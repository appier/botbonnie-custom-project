import Menu from "~/Menu";
import { ROUTE_KEY } from "~/constants/route";

const Rule = () => {
  return (
    <section className="wrap">
      <div className="bg">
        <div className="container inner-page">
          <Menu currentRouteKey={ROUTE_KEY.RULE} />

          <div className="gotop">TOP</div>

          <div className="title-page">
            <div className="title-pic1">
              <img src="images/idol-chikuwa.png" alt="" />
            </div>
            <div className="title-pic2">
              <img src="images/idol-chimaki.png" alt="" />
            </div>
          </div>
          <h2>活動辦法</h2>
          <div className="rule-content">
            <div className="rule-box">
              <h3>
                飲料抽抽樂<span>活動期間</span>
              </h3>
              <table>
                <tbody>
                  <tr>
                    <th className="th-1">活動期間</th>
                    <th className="th-2">兌換期間</th>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        7/17(10:00)~
                        <br />
                        7/20(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        7/17(10:00)~
                        <br />
                        7/20(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        7/21(00:00)~
                        <br />
                        7/23(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        7/21(00:00)~
                        <br />
                        7/23(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        7/24(00:00)~
                        <br />
                        7/27(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        7/24(00:00)~
                        <br />
                        7/27(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        7/28(00:00)~
                        <br />
                        7/30(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        7/28(00:00)~
                        <br />
                        7/30(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        7/31(00:00)~
                        <br />
                        8/3(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        7/31(00:00)~
                        <br />
                        8/3(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        8/4(00:00)~
                        <br />
                        8/6(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        8/4(00:00)~
                        <br />
                        8/6(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        8/7(00:00)~
                        <br />
                        8/10(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        8/7(00:00)~
                        <br />
                        8/10(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        8/11(00:00)~
                        <br />
                        8/13(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        8/11(00:00)~
                        <br />
                        8/13(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        8/14(00:00)~
                        <br />
                        8/17(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        8/14(00:00)~
                        <br />
                        8/17(23:59)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        8/18(00:00)~
                        <br />
                        8/22(19:00)
                      </strong>
                    </td>
                    <td>
                      <strong>
                        8/18(00:00)~
                        <br />
                        8/22(23:59)
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rule-box">
              <h3>
                飲料抽抽樂<span>活動方式</span>
              </h3>
              <ul>
                <li>
                  活動時間內，由7-ELEVEN
                  APP首頁點選”遊樂場”活動icon，進入飲料抽抽樂活動，登入OPENPOINT會員即可參加。
                </li>
                <li>每人(每組OPENPOINT會員帳號)每天限參加2次。</li>
                <li>
                  參加「飲料抽抽樂」活動獲得的折扣條碼，可至7-ELEVEN APP
                  ”我的好康”→“活動贈獎”領取，憑條碼至門市使用折扣。
                </li>
                <li>每條碼限使用一次(折價一組)，使用過後條碼立即失效。</li>
                <li>APP飲料抽抽樂折扣條碼經刷讀後，商品恕無法退換貨。</li>
              </ul>
            </div>

            <div className="rule-box">
              <h3>
                飲料抽抽樂<span>活動獎項</span>
              </h3>
              <table>
                <tbody>
                  <tr>
                    <th className="th-1">商品</th>
                    <th className="th-2">折扣(價低者折)</th>
                  </tr>
                  <tr>
                    <td>
                      <strong>指定飲料</strong>
                    </td>
                    <td>
                      <strong>任選2件0元</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>指定飲料</strong>
                    </td>
                    <td>
                      <strong>任選2件49折</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>指定飲料</strong>
                    </td>
                    <td>
                      <strong>任選2件59折</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>指定飲料</strong>
                    </td>
                    <td>
                      <strong>任選2件69折</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>指定飲料</strong>
                    </td>
                    <td>
                      <strong>任選2件79折</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>指定飲料</strong>
                    </td>
                    <td>
                      <strong>任選2件89折</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>黑松茶尋味臺灣春茶590ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>黑松沙士PLUS強碳酸600ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>黑松FIN補給飲料580ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>舒跑S補給飲料590ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>御茶園台灣金萱550ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>舒跑鹼性離子水850ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>味丹心茶道冬瓜茶560ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>OOHA氣泡飲-檸檬蜂蜜500ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>美粒果零加糖蘋果蘇打500ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>美粒果零加糖葡萄蘇打500ml</strong>
                    </td>
                    <td>
                      <strong>免費送乙瓶</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p
                style={{
                  marginTop: 15,
                }}
              >
                以下品項不參與本次活動：待提供
              </p>
            </div>

            <div className="rule-box">
              <h4>注意事項</h4>
              <ul>
                <li>
                  參加本活動者皆已同意相關活動辦法與說明，本活動不與其他優惠併用。
                </li>
                <li>
                  任何影響活動進行、影響網站及網站管理者之運作，違反網站及網站管理者的使用條款，或冒用、偽造、變造第三人資料參加本活動者，或任何經主辦單位認定有違反活動之公平性者，主辦單位保留取消其參加本活動之權利。
                </li>
                <li>
                  參加者若以惡意之電腦程式或其他明顯違反活動之正常運行之方式，意圖混淆或影響活動結果者，一經主辦單位察覺得立即取消參加者之參賽、抽獎及得獎資格，並得追回獎品。參加者對於因違反相關規定所產生之一切法律責成，需自行負擔。
                </li>
                <li>
                  本活動如有任何因電腦、網路、電話、技術或其他不可歸責於主辦單位之事由，而使活動參加者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無效之狀況，主辦單位不負任何法律責任，本活動參加者及中獎者亦不得異議。如發生前述情形，主辦單位將不做任何通知。
                </li>
                <li>
                  如遇天災、地震、颱風、疫情、停電、罷工等不可抗力或非可歸責於主辦單位之事件，主辦單位保留變更活動日期之權利。
                </li>
                <li>本活動之獎項不得要求折換現金、轉賣、退換、退還或轉贈。</li>
                <li>主辦單位保留更換等值獎品之權利。</li>
                <li>
                  參加者應妥善保管優惠條碼，避免優惠被他人兌換以致無法使用。
                </li>
                <li>不同帳號獲得的優惠折扣恕無法合併使用。</li>
                <li>
                  參加者需記得自己獲得優惠折扣的OPENPOINT登入帳號，若因個人因素遺忘登入資訊，以致逾期無法兌換優惠，恕不補發。
                </li>
                <li>{`優惠折扣存放於「我的好康>活動贈獎」中，點選即可看到獲得的優惠折扣內容。`}</li>
                <li>{`優惠兌換期間與品項以「7-ELEVEN APP 我的好康>活動贈獎」中的優惠折扣上說明為準，逾期無效。`}</li>
                <li>
                  若因參加者手機或設備等網路連線問題或其他個人因素，導致無法兌換優惠，主辦單位恕不負責。
                </li>
                <li>
                  優惠條碼請於使用期限內儘速至門市兌換，避免超過兌換期限無法使用，本優惠超過期限後恕不再重新提供或補發優惠條碼。
                </li>
                <li>
                  商品數量以該門市實際販售為準，優惠商品因各門市於各時段之庫存狀況不一，請於兌換前先確認該店是否有商品可供兌換。
                </li>
                <li>
                  每條碼限使用一次(折價一組)，使用過後條碼立即失效，不得再為使用。
                </li>
                <li>
                  詳細活動辦法依本公司公告為準。凡參與本活動，即視同接受本活動注意事項及相關規定，本公司保有隨時修正、暫停或終止本活動之權利，若有未盡事宜，悉依本公司之相關公告辦理；本公司保留最終解釋及決定權利。
                </li>
                <li>
                  本活動為統一超商股份有限公司所有，與蘋果公司(Apple
                  Inc.)無關，蘋果公司未以任何形式參與本活動。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rule;
