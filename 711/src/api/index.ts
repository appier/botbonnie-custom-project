import axios, { AxiosInstance } from "axios";
export const API_ENDPOINT = import.meta.env.VITE_BACKEND_SERVER;

declare global {
  interface Window {
    liff: any;
  }
}

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
  const idToken = window?.liff?.getIDToken();

  return axios.create({
    baseURL,
    timeout,
    headers: {
      ...headers,
      ...(idToken && { Authorization: `Bearer ${idToken}` }),
    },
  });
};
