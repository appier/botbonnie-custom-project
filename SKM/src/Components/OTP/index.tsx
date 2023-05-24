import { useCallback, useEffect, useState } from "react";
import Page from "../Page";
import Input from "./Input";
import Verification from "./Verification";
import { sendOtp } from "~/api/otp";

const ERROR = {
  FORMAT: "請輸入正確手機號碼格式",
};

const OTP: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputError, setInputError] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [isSendingOtp, setSendingOtp] = useState(false);

  const checkPhoneValid = (val: string) => {
    if (val.length === 10 && val.startsWith("09")) return true;
    return false;
  };

  const handleSubmit = useCallback(() => {
    const preprocessNumber = phoneNumber.padStart(10, "0");
    const valid = checkPhoneValid(preprocessNumber);
    if (!valid) setInputError(ERROR.FORMAT);
    else {
      setInputError("");
      setSendingOtp(true);
      sendOtp({
        mobilePhone: phoneNumber,
      }).then(() => {
        setSendingOtp(false);
        setShowVerification(true);
      });
    }
  }, [phoneNumber]);

  if (showVerification) return <Verification phoneNumber={phoneNumber} />;
  return (
    <Page type="secondary">
      <div className="card w-full bg-white shadow-md px-4 pb-12">
        <h4 className="w-full text-center mt-6 mb-[1.3rem]">申請開通碼</h4>
        <Input
          placeholder="例：0912345678"
          value={phoneNumber}
          onChange={setPhoneNumber}
          type="phone"
        />
        <p className="w-full opacity-70 text-sm my-4">
          為確保您的權益，請輸入正確資料。首次使用的開通碼，將以簡訊方式傳送至您輸入的門號，如您手機有開通阻擋商業簡訊之功能，需請您先進行關閉，即可順利收取開通碼。
        </p>
        <div className="flex h-10 w-full items-center justify-center">
          {inputError && <div className="text-sm text-error">{inputError}</div>}
        </div>
        <div className="px-6 mt-8">
          <button
            disabled={isSendingOtp}
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

export default OTP;
