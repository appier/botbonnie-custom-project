import { API_ENDPOINT } from "./index";
import { withAuth } from "./index";

export const sendOtp = ({ mobilePhone }: { mobilePhone: string }) => {
  return withAuth()
    .post(`${API_ENDPOINT}skm/otp`, {
      mobilePhone,
    })
    .then(({ data }) => data as Promise<{}>);
};

export const verifyOtp = ({
  mobilePhone,
  otpCode,
}: {
  mobilePhone: string;
  otpCode: string;
}) => {
  return withAuth()
    .post(`${API_ENDPOINT}skm/otp/validation`, {
      mobilePhone,
      otpCode,
    })
    .then(({ data }) => data as Promise<{ url: string }>);
};
