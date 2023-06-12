import { useCallback } from "react";
import Page from "../Page";

const BindingSuccessPage = () => {
  const closeWebview = useCallback(() => {
    window.liff.closeWindow();
  }, []);

  const goToRedeem = useCallback(() => {
    window.liff.openWindow({ url: "https://r.botbonnie.com/BCOK6" });
  }, []);
  return (
    <Page type="primary">
      <div className="flex w-full flex-col items-center">
        <p className="text-white mt-[100px] mb-[200px]">
          恭喜完成新光三越會員加入，請點擊下方按鈕進行冰飲品兌換
        </p>

        <button
          className="btn btn-secondary btn-sm mt-3 mb-3"
          onClick={goToRedeem}
        >
          點我兌換熱門冰飲品
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
