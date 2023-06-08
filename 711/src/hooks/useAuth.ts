import { atom, useAtom } from "jotai";
import queryString from "query-string";
import { useEffect, useMemo } from "react";
// import { PLATFORM } from "~/constants/platform";
// import tokenManager from "~/utils/tokenManager";

type userProps = {
  isLogin: boolean;
  kitId: string;
};

export const userAtom = atom<userProps>({
  isLogin: false,
  kitId: "",
});

const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  // handle liff url
  const { liffId, kitId } = useMemo(() => {
    const qs = queryString.parse(window.location.search) as {
      liffId: string;
      "liff.state"?: string;
      kitId: string;
    };

    const liffState = qs?.["liff.state"] || "";
    const liffQs = queryString.parse(liffState) as {
      liffId: string;
      func: string;
      kitId: string;
    };

    const { liffId, kitId } = liffState ? liffQs : qs;

    return {
      liffId,
      kitId,
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
              redirectUri: `${import.meta.env.VITE_WEBVIEW_URL}${
                window.location.search
              }`,
            });
          } else {
            setUser({
              isLogin: true,
              kitId,
            });
          }
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }, [liffId, user, kitId]);

  return user;
};

export default useAuth;
