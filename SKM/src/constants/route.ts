export const ROUTE_KEY = {
  ACCOUNT_BINDING: "accountBinding",
  BINDING_SUCCESS: "binding_success",
  OTP: "otp",
  POLICY: "policy",
};

export const PATH_CONFIG = {
  [ROUTE_KEY.ACCOUNT_BINDING]: {
    path: "/accountBinding",
  },
  [ROUTE_KEY.BINDING_SUCCESS]: {
    path: "/binding_success",
  },
  [ROUTE_KEY.ACCOUNT_BINDING]: {
    path: "/accountBinding",
  },
  [ROUTE_KEY.POLICY]: {
    path: "/policy",
  },
  [ROUTE_KEY.OTP]: {
    path: "/otp",
  },
};

export const FUNC_KEY = {
  ACCOUNT_BINDING: "accountBinding",
  OTP: "otp",
};

export const FUNC_TO_ROUTE_KEY = {
  [FUNC_KEY.ACCOUNT_BINDING]: ROUTE_KEY.ACCOUNT_BINDING,
};
