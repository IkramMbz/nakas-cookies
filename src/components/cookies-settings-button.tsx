"use client";

import { DialogProvider } from "nakas-ui";

import { openCookiePreferences } from "./cookies-dialog-helper.js";
import { setCookie } from "../lib/cookies.js";
import { STORAGE_KEYS } from "../lib/utils.js";
import { ConsentState } from "../types.js";

type CookiesConsentModalProps = {
  appPrefix: string;
  children: React.ReactNode;
};

const CookiesConsentModal = ({
  appPrefix,
  children,
}: CookiesConsentModalProps): React.ReactElement => {
  const THEME_COOKIES_CONSENT_NAME =
    appPrefix + "-" + STORAGE_KEYS.COOKIES_CONSENT;
  const THEME_BANNER_COOKIES_DISMISSED_NAME =
    appPrefix + "-" + STORAGE_KEYS.BANNER_DISMISSED;

  const handleAction = (newConsent: ConsentState): void => {
    setCookie(
      THEME_COOKIES_CONSENT_NAME,
      JSON.stringify(newConsent),
      180 * 24 * 60 * 60
    );
    setCookie(THEME_BANNER_COOKIES_DISMISSED_NAME, "true", 180 * 24 * 60 * 60);
  };

  return (
    <DialogProvider>
      <button
        onClick={() =>
          openCookiePreferences({ appPrefix, onSave: handleAction })
        }
      >
        {children}
      </button>
    </DialogProvider>
  );
};

export default CookiesConsentModal;
