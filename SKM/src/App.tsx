import OTP from "./Components/OTP";
import Auth from "./Components/Auth";
import RouterHandler from "./Components/RouterHandler";
import { Route } from "react-router-dom";
import { PATH_CONFIG, ROUTE_KEY } from "./constants/route";
import AccountBinding from "./Components/AccountBinding";
import Policy from "./Components/Policy";

function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Auth>
        <RouterHandler>
          <Route
            path={PATH_CONFIG[ROUTE_KEY.ACCOUNT_BINDING].path}
            element={<AccountBinding />}
          />
          <Route
            path={PATH_CONFIG[ROUTE_KEY.POLICY].path}
            element={<Policy />}
          />
          <Route path={PATH_CONFIG[ROUTE_KEY.OTP].path} element={<OTP />} />
        </RouterHandler>
      </Auth>
    </div>
  );
}

export default App;
