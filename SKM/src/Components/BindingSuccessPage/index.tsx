import { useCallback } from "react";
import Page from "../Page";

const BindingSuccessPage = () => {
  const closeWebview = useCallback(() => {
    window.liff.closeWindow();
  }, []);
  return (
    <Page type="primary">
      <div className="flex w-full flex-col items-center">
        <p className="text-white mt-[100px] mb-[200px]">
          恭喜您已經成功完成會員綁定
        </p>

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
