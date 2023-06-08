export const FUNC_KEY = {
  HOME: "home",
  HISTORY: "history",
};

export const ROUTE_KEY = {
  HOME: "home",
  RULE: "rule",
  GAME: "game",
  HISTORY: "history",
};

export const FUNC_TO_ROUTE_KEY = {
  [FUNC_KEY.HOME]: ROUTE_KEY.HOME,
  [FUNC_KEY.HISTORY]: ROUTE_KEY.HISTORY,
};

export const ROUTE = {
  [ROUTE_KEY.HOME]: {
    path: "/home",
  },
  [ROUTE_KEY.GAME]: {
    path: "/game",
  },
  [ROUTE_KEY.RULE]: {
    path: "/rule",
  },
  [ROUTE_KEY.HISTORY]: {
    path: "/history",
  },
};
