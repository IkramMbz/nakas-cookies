import { Cookie } from "lucide-react";
import { dialog } from "nakas-ui";
import React, { useState } from "react";

import Preferences from "./cookies-preferences.js";
import { getCookie, setCookie } from "../lib/cookies.js";
import { STORAGE_KEYS, DEFAULT_CONSENT } from "../lib/utils.js";
import { ConsentState } from "../types.js";

type OpenCookiePreferencesProps = {
  appPrefix: string;
  onSave?: (newConsent: ConsentState) => void;
};

export const openCookiePreferences = ({
  appPrefix,
  onSave,
}: OpenCookiePreferencesProps): void => {
  const THEME_COOKIES_CONSENT_NAME =
    appPrefix + "-" + STORAGE_KEYS.COOKIES_CONSENT;
  const THEME_BANNER_COOKIES_DISMISSED_NAME =
    appPrefix + "-" + STORAGE_KEYS.BANNER_DISMISSED;

  const storedConsent = getCookie(THEME_COOKIES_CONSENT_NAME);
  let initialConsent = DEFAULT_CONSENT;

  if (storedConsent) {
    try {
      initialConsent = JSON.parse(storedConsent);
    } catch (e) {
      console.warn("Erreur lors du parsing des cookies:", e);
    }
  }

  let tempConsent = { ...initialConsent };

  const PreferencesWrapper = (): React.ReactElement => {
    const [localConsent, setLocalConsent] = useState(tempConsent);

    const localToggle = (key: keyof ConsentState): void => {
      setLocalConsent((prev: ConsentState) => {
        const updated = { ...prev, [key]: !prev[key] };
        tempConsent = updated;
        return updated;
      });
    };

    const handleAction = (newConsent: ConsentState): void => {
      setCookie(
        THEME_COOKIES_CONSENT_NAME,
        JSON.stringify(newConsent),
        180 * 24 * 60 * 60
      );
      setCookie(
        THEME_BANNER_COOKIES_DISMISSED_NAME,
        "true",
        180 * 24 * 60 * 60
      );
      if (onSave) onSave(newConsent);
      dialog.close();
    };

    return (
      <Preferences
        consent={localConsent}
        toggle={localToggle}
        handleAction={handleAction}
      />
    );
  };

  dialog.openCustom({
    title: "Paramètres de confidentialité",
    icon: <Cookie size={20} />,
    content: <PreferencesWrapper />,
  });
};
