import { API_ENDPOINT } from "./index";
import { withAuth } from "./index";

export const checkUserState = () => {
  return withAuth()
    .get(`${API_ENDPOINT}skm/state`)
    .then(({ data }) => data as Promise<{ status: "BOUND" | "UNBINDING" }>);
};

export const accountLink = (payload: object) => {
  return withAuth()
    .post(`${API_ENDPOINT}skm/accountLink`, payload)
    .then(({ data }) => data as Promise<{ status: "BOUND" | "UNBINDING" }>);
};
