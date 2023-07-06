import { useCallback, useState, FC } from "react";
import { ROUTE_KEY } from "~/constants/route";
import useNavigate from "~/hooks/useNavigate";

interface Props {
  currentRouteKey: string;
}

const Menu: FC<Props> = ({ currentRouteKey }) => {
  const navigate = useNavigate();
  const [isMenuOpened, setMenuOpened] = useState(false);
  const handleToggle = useCallback(() => {
    setMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);

  const handleNavigate = useCallback(
    (key: string) => {
      if (key === currentRouteKey) setMenuOpened(false);
      else navigate(key);
    },
    [currentRouteKey, navigate]
  );
  return (
    <>
      <div className="navToggle" onClick={handleToggle}>
        <div className="icon"></div>
      </div>
      <div id="menu" className={isMenuOpened ? "active" : ""}>
        <ul>
          <li>
            <a onClick={() => handleNavigate(ROUTE_KEY.HOME)}>回首頁</a>
          </li>
          <li>
            <a onClick={() => handleNavigate(ROUTE_KEY.RULE)}>活動辦法</a>
          </li>
          <li>
            <a onClick={() => handleNavigate(ROUTE_KEY.HISTORY)}>優惠券列表</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
