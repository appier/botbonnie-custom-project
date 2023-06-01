import { withAuth } from "./index";

export const checkUserState = () => {
  return withAuth()
    .get("skm/state")
    .then(({ data }) => data as Promise<{ status: "BOUND" | "UNBINDING" }>);
};

export const accountLink = (payload: object) => {
  return withAuth()
    .post("skm/accountLink", payload)
    .then(({ data }) => data as Promise<{ status: "BOUND" | "UNBINDING" }>);
};
