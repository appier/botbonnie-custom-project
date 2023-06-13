import { useCallback, useState } from "react";
import Page from "../Page";
import Input from "./Input";
import { sendOtp, verifyOtp } from "~/api/otp";

import styles from "./index.module.scss";
import useResendTimer from "~/hooks/useResendTimer";

const ERROR = {
  FORMAT: "尚未輸入",
};
interface Props {
  phoneNumber: string;
}

const Verification: React.FC<Props> = ({ phoneNumber }) => {
  const [otpCode, setOtpCode] = useState("");
  const [isFetching, setFetching] = useState(false);
  const [inputError, setInputError] = useState("");

  const timer = useResendTimer({
    defaultTime: 60,
    autoStart: true,
  });

  const handleSubmit = useCallback(() => {
    if (isFetching) return;
    if (!otpCode) {
      setInputError(ERROR.FORMAT);
    } else {
      setFetching(true);
      verifyOtp({
        mobilePhone: phoneNumber,
        otpCode,
      })
        .then((res) => {
          const { url } = res;
          if (url) {
            window.location.href = url;
          }
        })
        .catch((resp) => {
          const { message = "" } = resp?.response?.data?.error || {};
          if (message) window.alert(message);
          setFetching(false);
        });
    }
  }, [otpCode, isFetching, phoneNumber]);

  const resendOtp = useCallback(() => {
    sendOtp({
      mobilePhone: phoneNumber,
    });
    timer.activate();
  }, [timer.activate, phoneNumber]);

  return (
    <Page type="secondary">
      <div className="card w-full bg-white shadow-md px-4 pb-12">
        <h4 className="w-full text-center mt-6 mb-[1.3rem]">開通驗證碼</h4>
        <Input
          placeholder="請輸入簡訊開通碼"
          value={otpCode}
          onChange={setOtpCode}
          type="otp"
        />
        <div className="flex h-10 w-full items-center justify-center">
          {inputError && <div className="text-sm text-error">{inputError}</div>}
        </div>
        {timer.active ? (
          <p className="mx-auto">{timer.time} 秒後可重新發送開通碼</p>
        ) : (
          <button className={`${styles.resendBtn} mx-auto`} onClick={resendOtp}>
            重新發送開通碼
          </button>
        )}

        <div className="px-6 mt-8">
          <button
            disabled={isFetching}
            className="btn btn-primary btn-sm"
            onClick={handleSubmit}
          >
            確認送出
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Verification;
