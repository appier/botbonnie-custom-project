export const ROUTE_KEY = {
  ACCOUNT_BINDING: "account_binding",
  BINDING_SUCCESS: "binding_success",
  OTP: "otp",
  POLICY: "policy",
  GENERAL_ERROR: "general_error",
};

export const PATH_CONFIG = {
  [ROUTE_KEY.BINDING_SUCCESS]: {
    path: "/binding_success",
  },
  [ROUTE_KEY.ACCOUNT_BINDING]: {
    path: "/account_binding",
  },
  [ROUTE_KEY.POLICY]: {
    path: "/policy",
  },
  [ROUTE_KEY.OTP]: {
    path: "/otp",
  },
  [ROUTE_KEY.GENERAL_ERROR]: {
    path: "/error",
  },
};

// only expose to url
export const FUNC_KEY = {
  ACCOUNT_BINDING: "account_binding",
};

export const FUNC_TO_ROUTE_KEY = {
  [FUNC_KEY.ACCOUNT_BINDING]: ROUTE_KEY.ACCOUNT_BINDING,
};
