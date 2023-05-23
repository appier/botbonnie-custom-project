import { atom, useAtom } from "jotai";
import queryString from "query-string";
import { useEffect, useMemo } from "react";
import { PLATFORM } from "~/constants/platform";
import tokenManager from "~/utils/tokenManager";

type userProps = {
  isLogin: boolean;
};

const userAtom = atom<userProps>({
  isLogin: false,
});

const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  // handle liff url
  const { liffId } = useMemo(() => {
    const qs = queryString.parse(window.location.search) as {
      liffId: string;
      "liff.state"?: string;
    };

    const liffState = qs?.["liff.state"] || "";
    const liffQs = queryString.parse(liffState) as {
      liffId: string;
      func: string;
      userId?: string;
    };

    const { liffId } = liffState ? liffQs : qs;

    return {
      liffId,
    };
  }, []);

  useEffect(() => {
    if (!user.isLogin) {
      window.liff
        .init({
          liffId: liffId || import.meta.env.VITE_LIFF_ID,
        })
        .then(() => {
          if (!window.liff.isLoggedIn()) {
            window.liff.login({
              redirectUri: `${import.meta.env.VITE_BASE_URL}${
                window.location.search
              }`,
            });
          } else {
            tokenManager.init({
              platform: PLATFORM.LINE,
              token: window.liff?.getIDToken(),
            });

            setUser({
              isLogin: true,
            });
          }
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }, [liffId, user]);

  return user;
};

export default useAuth;
