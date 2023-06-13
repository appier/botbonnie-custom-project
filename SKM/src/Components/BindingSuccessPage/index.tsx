import { useCallback } from "react";
import Page from "../Page";

const BindingSuccessPage = () => {
  const closeWebview = useCallback(() => {
    window.liff.closeWindow();
  }, []);

  const goToRedeem = useCallback(() => {
    window.liff.openWindow({ url: "https://r.botbonnie.com/BCOK6" });
  }, []);

  const goToDownload = useCallback(() => {
    window.liff.openWindow({
      url: "https://www.skm.com.tw/page/downloadskmapp?utm_source=lineoa&utm_medium=memberfinal",
    });
  }, []);
  return (
    <Page type="primary">
      <div className="flex w-full flex-col items-center">
        <p className="text-white mt-[100px] mb-[200px] text-center">
          恭喜完成新光三越會員加入及綁定，6/16-7/31期間加入之新會員請點擊下方按鈕進行冰飲品兌換
        </p>

        <button
          className="btn btn-secondary btn-sm mt-3 mb-3"
          onClick={goToRedeem}
        >
          點我兌換熱門冰飲品
        </button>

        <button
          className="btn btn-secondary btn-sm mt-3 mb-3"
          onClick={goToDownload}
        >
          下載新光三越APP解鎖更多功能
        </button>

        <button
          className="btn btn-secondary btn-sm mt-3 mb-5"
          onClick={closeWebview}
        >
          回官方帳號
        </button>
      </div>
    </Page>
  );
};

export default BindingSuccessPage;
