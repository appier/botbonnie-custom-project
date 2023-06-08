export const checkIsAndroid = () => {
  return /android/.test(navigator.userAgent.toLowerCase());
};
