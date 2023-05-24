import queryString from "query-string";
import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { checkUserState } from "~/api/account";
import { FUNC_KEY, ROUTE_KEY } from "~/constants/route";
import useNavigate from "~/hooks/useNavigate";

interface Props {
  children: React.ReactNode;
}

const RouterHandler: React.FC<Props> = ({ children }) => {
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const { func, from, status } = queryString.parse(window.location.search);
    const funcKey = func as string;
    if (from === "skm" && status === "bindSuccessed") {
      navigate(ROUTE_KEY.ACCOUNT_BINDING);
      setReady(true);
    } else if (funcKey) {
      checkUserState()
        .then((res) => {
          if (res.status === "UNBINDING") navigate(ROUTE_KEY.POLICY);
          else if (res.status === "BOUND") {
            navigate(
              funcKey === FUNC_KEY.ACCOUNT_BINDING
                ? ROUTE_KEY.BINDING_SUCCESS
                : funcKey
            );
          }
        })
        .catch(() => {
          navigate(ROUTE_KEY.GENERAL_ERROR);
        })
        .finally(() => {
          setReady(true);
        });
    }
  }, [navigate]);

  return <Routes>{ready ? children : null}</Routes>;
};

export default RouterHandler;
