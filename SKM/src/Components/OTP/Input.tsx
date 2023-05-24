import { useCallback, ChangeEvent } from "react";
import PhoneIcon from "../../assets/img/mobile-alt-solid.svg";
import SMSIcon from "../../assets/img/sms-solid.svg";

type Props = {
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  type: "phone" | "otp";
};

const TYPE_ICON = {
  phone: PhoneIcon,
  otp: SMSIcon,
};
const TYPE_LABEL = {
  phone: "請輸入手機號碼",
  otp: "簡訊開通碼",
};

const TYPE_MAX_INPUT = {
  phone: 10,
  otp: 4,
};
const Input: React.FC<Props> = ({
  placeholder = "",
  value = "",
  onChange,
  type = "phone",
}) => {
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  return (
    <div className="flex min-w-0 items-center relative">
      <label className="flex items-center absolute left-2 top-1/2 transform -translate-y-1/2">
        <img src={TYPE_ICON[type]} className="w-4 min-w-4 inline mr-[0.3rem]" />
        {TYPE_LABEL[type]}
      </label>
      <input
        type="phone"
        maxLength={TYPE_MAX_INPUT[type]}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        className="flex min-w-0 px-2 py-3 flex-1 outline-none border-b border-solid border-b-[#cccccc] focus:border-b-[var(--color-main-darken)] text-right"
      />
    </div>
  );
};

export default Input;
