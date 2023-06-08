import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Rule from "./Rule";
import Game from "./Game";
import RecordPage from "./RecordPage";
import Auth from "./Auth";
import RouterHandler from "./RouteHandler";
import { ROUTE, ROUTE_KEY } from "./constants/route";

function App() {
  return (
    <Auth>
      {/* <RecordPage /> */}
      <RouterHandler>
        <Route path={ROUTE[ROUTE_KEY.HOME].path} element={<Home />} />
        <Route path={ROUTE[ROUTE_KEY.RULE].path} element={<Rule />} />
        <Route path={ROUTE[ROUTE_KEY.GAME].path} element={<Game />} />
        <Route path={ROUTE[ROUTE_KEY.HISTORY].path} element={<RecordPage />} />
      </RouterHandler>
    </Auth>
  );
}

export default App;
