import { useCallback } from "react";
import { useNavigate as useReactNavigate } from "react-router-dom";
import queryString from "query-string";

import { ROUTE } from "../constants/route";

const useNavigate = () => {
  const navigate = useReactNavigate();

  const handleNavigate = useCallback(
    (key: string, query?: Object, options?: Object) => {
      if (!ROUTE[key]) return;
      const searchQuery = queryString.parse(window.location.search);
      const { path } = ROUTE[key];
      if (path)
        navigate(
          `${path}?${queryString.stringify({
            ...searchQuery,
            ...(query || {}),
          })}`,
          options
        );
    },
    []
  );
  return handleNavigate;
};

export default useNavigate;
