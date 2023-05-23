import { useCallback, useState } from "react";
import Page from "../Page";
import Input from "./Input";

const ERROR = {
  FORMAT: "請輸入正確手機號碼格式",
};

const Verification: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputError, setInputError] = useState("");

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
    }
  }, [phoneNumber]);

  return (
    <Page type="secondary">
      <div className="card w-full bg-white shadow-md px-4 pb-12">
        <h4 className="w-full text-center mt-6 mb-[1.3rem]">開通驗證碼</h4>
        <Input
          placeholder="請輸入簡訊開通碼"
          value={phoneNumber}
          onChange={setPhoneNumber}
          type="sms"
        />
        <div className="flex h-10 w-full items-center justify-center">
          {inputError && (
            <div className="text-sm text-error">請輸入正確手機號碼格式</div>
          )}
        </div>
        <div className="px-6 mt-8">
          <button className="btn btn-primary btn-sm" onClick={handleSubmit}>
            確認送出
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Verification;
