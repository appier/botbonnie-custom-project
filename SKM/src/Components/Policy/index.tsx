import { useCallback, useState } from "react";
import PolicyContent from "./PolicyContent";

import Page from "../Page";
import useNavigate from "~/hooks/useNavigate";
import { ROUTE_KEY } from "~/constants/route";

const Policy: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = useCallback(() => {
    if (checked) navigate(ROUTE_KEY.OTP);
  }, [navigate, checked]);
  return (
    <Page type="primary">
      <PolicyContent />
      <div className="form-control mr-auto mt-4">
        <label className="label cursor-pointer py-0">
          <input
            type="checkbox"
            checked={checked}
            onClick={() => {
              setChecked(!checked);
            }}
            className="checkbox checkbox-sm"
          />
          <span className="label-text text-white ml-2">
            我已詳閱並同意上述個資蒐集告知事項
          </span>
        </label>
      </div>
      <button
        className={`btn btn-secondary btn-sm mt-3 mb-5 ${
          !checked ? "opacity-50" : ""
        }`}
        onClick={handleConfirm}
      >
        確認送出
      </button>
    </Page>
  );
};

export default Policy;
