import { ConsentState } from "../types.js";

export const STORAGE_KEYS = {
  COOKIES_CONSENT: "nakas-cookies-consent",
  BANNER_DISMISSED: "nakas-cookies-banner-dismissed",
} as const;

export const DEFAULT_CONSENT: ConsentState = {
  required: true,
  functional: true,
  performance: true,
  ads: false,
};
