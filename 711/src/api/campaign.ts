import { RecordTypes } from "~/RecordPage/Record";
import { withAuth } from "./index";

export const checkUserQuota = ({ kitId }: { kitId: string }) => {
  return withAuth()
    .get(`pcsc/lotteryEvent/${kitId}/quota`)
    .then(
      ({ data }) =>
        data as Promise<{
          remaining: number;
        }>
    );
};

export const drawPrize = ({ kitId }: { kitId: string }) => {
  return withAuth()
    .post(`pcsc/lotteryEvent/${kitId}/draw`)
    .then(({ data }) => data as Promise<RecordTypes>);
};

export const getHistory = ({ kitId }: { kitId: string }) => {
  return withAuth()
    .get(`pcsc/lotteryEvent/${kitId}/history`)
    .then(({ data }) => data as Promise<RecordTypes[]>);
};

export const getShareLink = ({ kitId }: { kitId: string }) => {
  return withAuth()
    .get(`pcsc/lotteryEvent/${kitId}/mylink`)
    .then(
      ({ data }) =>
        data as Promise<{
          url: string;
        }>
    );
};
