import queryString from "query-string";
import { useEffect } from "react";
import { Routes } from "react-router-dom";
import { FUNC_TO_ROUTE_KEY, ROUTE_KEY } from "~/constants/route";
import useNavigate from "~/hooks/useNavigate";

interface Props {
  children: React.ReactNode;
}

const RouterHandler: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const { func, from, status } = queryString.parse(window.location.search);
    const funcKey = func as string;
    if (from === "skm" && status === "bindSuccessed") {
      navigate(ROUTE_KEY.ACCOUNT_BINDING);
    } else {
      navigate(ROUTE_KEY.POLICY);
    }
  }, [navigate]);

  return <Routes>{children}</Routes>;
};

export default RouterHandler;
