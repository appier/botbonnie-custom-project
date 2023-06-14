import { useEffect } from "react";
import queryString from "query-string";

import { accountLink } from "~/api/account";
import useNavigate from "~/hooks/useNavigate";
import { ROUTE_KEY } from "~/constants/route";

const AccountBinding: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const query = queryString.parse(window.location.search);
    accountLink(query)
      .then(() => {
        navigate(ROUTE_KEY.BINDING_SUCCESS);
      })
      .catch((resp) => {
        const { message = "" } = resp?.response?.data?.error || {};
        if (message) window.alert(message);
      });
  }, []);
  return <></>;
};

export default AccountBinding;
