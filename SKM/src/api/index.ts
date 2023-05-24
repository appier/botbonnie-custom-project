import axios, { AxiosInstance } from "axios";
import tokenManager from "~/utils/tokenManager";
export const API_ENDPOINT = import.meta.env.VITE_BACKEND_SERVER;

export type Type = (
  headers?: any,
  baseURL?: string,
  timeout?: number
) => AxiosInstance;

export const withAuth: Type = (
  headers = { "Content-Type": "application/json" },
  baseURL = API_ENDPOINT,
  timeout = 100000
) => {
  const { idToken } = tokenManager;

  return axios.create({
    baseURL,
    timeout,
    headers: {
      ...headers,
      ...(idToken && { Authorization: `Bearer ${idToken}` }),
    },
  });
};
