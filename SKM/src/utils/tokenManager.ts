import { PLATFORM } from "~/constants/platform";

declare global {
  interface Window {
    liff: any;
  }
}

interface tokenManager {
  platform?: number;
  token: string;
}

class tokenManager {
  constructor() {
    this.platform;
    this.token = "";
  }

  init = ({ platform, token }: { platform: number; token: string }) => {
    this.platform = platform;
    this.token = token;
  };

  get idToken() {
    switch (this.platform) {
      case PLATFORM.MESSENGER: {
        return this.token;
      }
      case PLATFORM.LINE: {
        return window.liff?.getIDToken() || this.token || "";
      }
      default:
        return "";
    }
  }
}

export default new tokenManager();
