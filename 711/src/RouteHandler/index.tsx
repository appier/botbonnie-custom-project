import queryString from "query-string";
import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { FUNC_TO_ROUTE_KEY, ROUTE_KEY } from "~/constants/route";
import useNavigate from "~/hooks/useNavigate";

interface Props {
  children: React.ReactNode;
}

const RouterHandler: React.FC<Props> = ({ children }) => {
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const { func } = queryString.parse(window.location.search);
    const funcKey = func as string;
    if (funcKey in FUNC_TO_ROUTE_KEY) {
      const routeKey = FUNC_TO_ROUTE_KEY[funcKey];
      navigate(routeKey);
    } else {
      navigate(ROUTE_KEY.HOME);
    }
    setReady(true);
  }, [navigate]);

  return <Routes>{ready ? children : null}</Routes>;
};

export default RouterHandler;
