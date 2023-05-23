import { useCallback } from "react";
import { useNavigate as useReactNavigate } from "react-router-dom";
import queryString from "query-string";

import { PATH_CONFIG } from "../constants/route";

const useNavigate = () => {
  const navigate = useReactNavigate();

  const handleNavigate = useCallback(
    (key: string, query?: Object, options?: Object) => {
      if (!PATH_CONFIG[key]) return;
      const searchQuery = queryString.parse(window.location.search);
      const { path } = PATH_CONFIG[key];
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
